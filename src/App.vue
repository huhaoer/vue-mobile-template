<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
@import url('./assets/css/reset.css');
// @media screen and (min-width: 600px) {
//   /*当屏幕尺寸小于600px时，应用下面的CSS样式*/
//   html {
//     background: #ccc;
//   }
// }
// @media screen and (min-width: 400px) and (max-width: 600px) {
//   /*当屏幕尺寸小于600px时，应用下面的CSS样式*/
//   html {
//     background: red;
//   }
// }
// @media screen and (min-width: 200px) and (max-width: 400px) {
//   /*当屏幕尺寸小于600px时，应用下面的CSS样式*/
//   html {
//     background: blue;
//   }
// }
</style>
