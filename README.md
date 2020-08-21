# 框架使用

## 目录

```ts
.
├── README.md
├── next-antd-less.config.js // 使用css modules时处理antd
├── next-env.d.ts
├── next.config.js // next配置文件
├── package-lock.json
├── package.json
├── postcss.config.js // postcss配置文件
├── src
│   ├── components  // 组件
│   ├── config  // 项目配置目录
│   │   └── index.ts  // 环境请求地址配置
│   ├── http-client  // 请求类
│   │   ├── axiosInstance.ts
│   │   ├── fetcher.ts
│   │   ├── index.ts
│   │   └── status.ts
│   ├── pages  // 页面目录
│   │   ├── about
│   │       ├── index.less
│   │       └── index.ts
│   │   ├── 404.tsx
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── _error.tsx
│   │   └── index.tsx
│   ├── store  // mobx数据管理
│   │   ├── UserStore.ts
│   │   └── index.ts
│   ├── styles // 样式
│   │   ├── app.less  // _app.tsx样式文件
│   │   ├── base.less // 项目基础样式，配置字号，主题色变量
│   │   ├── board1px.less // 1像素边框样式
│   │   └── index.less // index.tsx样式文件
│   └── utils
├── tsconfig.json //ts配置文件
└── typings.d.ts

```

注意项：  

* pages目录下目录路径即为路由路径，新建页面参考`about`页面格式
* `404.tsx`，`_app.tsx`，`_document.tsx`，`_error.tsx`和相关配置文件可根据业务具体设置
* 框架只是对`antd`做了兼容处理，业务若使用时须自己安装
  
## 页面

### 新建

在`pages`目录下创建目录并添加页面文件，这个页面文件相对于`pages`的路径即为路由路径。  
比如在`pages`目录创建`about`文件夹，并在此文件下创建`index.tsx`，添加About页面，`About`路由即为`/about`。

### 路由跳转

在客户端支持`Router`，`useRouter`，`Link`，`withRouter`等获取路由跳转。在服务端使用`res.writeHead(301, {Location: '重定向地址'})`来处理。

## 请求

### 个性化处理

在`http-client`目录下`axiosInstance.ts`文件中处理。

#### header请求头的全局配置

```typescript
const axiosInstance = axios.create({
  baseURL: config.baseURL,
  //NOTE: header全局配置
  headers: {
    salePlatformID: config.salePlatformID
  },
  timeout: 3000
})
```

#### header填充

```typescript
axiosInstance.interceptors.request.use(
  config => {
    //TODO: -- 自定义对header统一处理
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
```

#### 请求返回401的处理

```typescript
axiosInstance.interceptors.response.use(
  res => res,
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          //NOTE: 自定义需登录操作处理
          break
        default:
          error.message = httpStatus[error.response.status]
      }
    } else {
      error.message = '请求失败'
    }
    return Promise.reject(error)
  }
)
```

### 直接请求

```tsx
import { useEffect } from 'react'
import httpClient from 'http-client'

const Page = () => {
  useEffect(() => {
      httpClient.post('/api/Template/GetTemplateMobileExtend?seocode=618kuangjia').then(res => {
        // 处理数据
        const data = res.data
        console.log('resp data is ', data)
      })
    }, [])

  return (
    <div>直接请求场景</div>
  )
}
```

>`httpClient`是axios的自定义实例，支持axios请求方式，具体形式参考[axios](https://github.com/axios/axios)

### ahooks/use-request请求

```tsx
import useRequest from '@ahooksjs/use-request'

const Page = () => {
  const { data } = useRequest('/api/Template/GetTemplateMobileExtend?seocode=618kuangjia')

  return (
    <div>{data && data.Data.Title}</div>
  )
}

export default Page
```

> `@ahooksjs/use-request`的`requestMehtod`被设置为`http-client`的`fetcher`，`useRequest`中`service`限定传`string`或`Object<AxiosRequestConfig>`类型，当为`string`类型时执行`axios.post(service)`，为`Object<AxiosRequestConfig>`类型时执行`axios.request(service)`。可以根据项目需求自主修改`fetcher`逻辑。

## 缓存

框架默认不开启缓存，如有缓存处理页面，`在server.js`中添加对应页面路由处理。  
比如`about`页面需要缓存，在`server.js`中`app.prepare()`回调中添加以下代码

```typescript
server.get('/about', (req, res) => {
    return MemCache.renderWithCache(app, req, res)
  })
```

> 多个页面需要缓存，可以利用将页面放到数组里遍历处理。

## file-loader打包图片

### 1. 在根目录创建`next-file-loader.config.js`，将以下代码复制到新建文件内

```js
module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack: (config, options) => {
      const { isServer } = options
      nextConfig = Object.assign({ assetPrefix: '' }, nextConfig)
      config.module.rules.push({
        test: /\.(jpe?g|png|svg|gif|ico|webp|jp2)$/i,
        loader: 'file-loader',
        options: {
          name: '[name]_[contenthash].[ext]',
          publicPath: `${nextConfig.assetPrefix}/_next/static/images/`,
          outputPath: `${isServer ? '../' : ''}static/images/`
        }
      })
      return config
    }
  })
}

```

### 2. 在`next.config.js`使用

先导入`next-file-loader.config.js`

```js
const withFileLoader = require('./next-file-loader.config')
```

修改当前`next.config.js`的exports

```js
module.exports = withFileLoader(withCSS(withLess({/* 现有配置*/})))
```

### 3. 安装`file-loader`

```js
npm install file-loader --save-dev
```

### 4. 在`typings.d.ts`文件中添加相应声明

```ts
declare module "*.jpeg" {
  const value: string;
  export = value;
}

declare module "*.jpg" {
  const value: string;
  export = value;
}

declare module "*.png" {
  const value: string;
  export = value;
}

declare module "*.svg" {
  const value: string;
  export = value;
}

declare module "*.gif" {
  const value: string;
  export = value;
}

declare module "*.ico" {
  const value: string;
  export = value;
}

declare module "*.webp" {
  const value: string;
  export = value;
}

declare module "*.jp2" {
  const value: string;
  export = value;
}
```

### 5. 使用

比如在src目录下创建`assets`文件夹，放进一个`profile.jpg`。那使用时可以采用以下两种方式：

```tsx
import profile from 'assets/profile.jpg'

<img src={profile}/>
```

或者

```tsx
<img src={require('assets/profile.jpg').default}/>
```

### 6. 类型拓展

首先在`next-file-loader.config.js`中test语句中添加对应类型。  
其次在`typings.d.ts`中按已有类型声明格式添加相应声明。

## 启动运行

开发调试

```js
npm run dev
```

打包

```js
npm run build-dev
```

> 不同环境选择不同打包命令

使用server.js启动

```js
npm start
```
