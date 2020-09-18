module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset'],
    // ['@vue/app'],//按需加载antd-mobile-vue
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'antd-mobile-vue',
        libraryDirectory: 'es',
        style: true
      },
      'antd-mobile-vue'
    ]
  ]
}
