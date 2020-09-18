# vue-mobile-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 安装amfe-flexible,适配移动端
yarn add amfe-flexible

### 安装postcss-pxtorem,根据设计稿转换px到rem为单位
yarn add postcss-pxtorem
- 开发时添加前缀兼容性在.browserslistrc添加 ```ios >= 8 android >= 4.0```
- postcss.config.js文件用于转换书写的px单位为rem单位  使用```height: 500Px;```大写P开头的像素不进行转换

### 安装antd-mobile-vue库,类似于vue端的antd-mobile
yarn add antd-mobile-vue -S
yarn add babel-plugin-import -D 进行按需加载