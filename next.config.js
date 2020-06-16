const withLess = require('@zeit/next-less')
const nextBuildId = require('next-build-id')

module.exports = withLess({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]__[hash:base64:5]'
  },
  webpack:(config) => {
    return config
  },
  /*
    build id默认会在每次build时随机生成，如果在多台机器编译部署会导致不一致，前端缓存失效
    保持同一个版本build id一致
    */
  generateBuildId: () => nextBuildId({dir: __dirname}),
  /*nextjs gzip 交给nginx来处理，减轻server的压力*/
  compress: false,
  /* 增加自定义env环境变量*/
  publicRuntimeConfig: {
    REACT_APP_ENV: process.env.REACT_APP_ENV
  }
})
