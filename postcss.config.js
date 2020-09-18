module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 750, // 设计稿以宽度750px为例
            selectorBlackList: [".van-"], //排除，van-开头的class，不进行rem转换
            propList: ['*']
        }
    }
}