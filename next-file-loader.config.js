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
