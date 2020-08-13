
/*
 如果某些布局，不想被转换，单位写成大写： PX
 */
module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3,
      features: {
        'custom-properties': false
      }
    }
  }
}

/**
 *  'postcss-pxtorem': {
      rootValue: 75,
      unitPrecision: 5,
      propList: ['*'],
      minPixelValue: 1,
      selectorBlackList: ['html', 'body'],
      exclude: /node_modules/i
    }
 */
