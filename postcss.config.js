const px2rem = require('postcss-pxtorem')

/*
 如果某些布局，不想被转换，单位写成大写： PX
 */
module.exports = {
    plugins: [
        px2rem({
            rootValue: 75,
            unitPrecision: 5,
            propList:['*'],
            minPixelValue: 1,
            selectorBlackList:['html','body']
        })
    ]
}
