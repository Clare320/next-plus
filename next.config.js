const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
const nextBuildId = require('next-build-id')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withCSS(withLess({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]__[hash:base64:5]'
  },
  /*
    build id默认会在每次build时随机生成，如果在多台机器编译部署会导致不一致，前端缓存失效
    保持同一个版本build id一致
    */
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  /* nextjs gzip 交给nginx来处理，减轻server的压力 */
  compress: false,
  /* 增加自定义env环境变量 */
  publicRuntimeConfig: {
    REACT_APP_ENV: process.env.REACT_APP_ENV
  },
  assetPrefix: isProd ? 'https://pic.keede.com' : '', // 设置资源服务器
  devIndicators: {
    autoPrerender: false
  },
  // 设置右斜线
  exportTrailingSlash: true,
  // 设置路径映射
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      ...defaultPathMap,
      '/menu': { page: '/home/classmenu' }
    }
  },
  webpack: (config) => {
    return config
  }
}))
