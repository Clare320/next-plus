const withCSS = require('@zeit/next-css')
const withAntdLess = require('./next-antd-less.config')

module.exports = withCSS(withAntdLess({
  /*disable nextjs x-powered-by header*/
  poweredByHeader: false,
  /* nextjs gzip 交给nginx来处理，减轻server的压力 */
  compress: false,
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]__[hash:base64:5]'
  },
  /* 增加自定义env环境变量 */
  publicRuntimeConfig: {
    REACT_APP_ENV: process.env.REACT_APP_ENV
  },
  webpack: (config) => {
    return config
  }
}))
