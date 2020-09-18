<template>
  <div class="hello">
    <div class="my-cmp">哈哈哈哈</div>
    <m-button type='primary'>我是按钮</m-button>
  </div>
</template>

<script>
import { Button } from "antd-mobile-vue";
export default {
  name: "HelloWorld",
  components: {
    'm-button':Button
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.my-cmp {
  color: #f5294c;
  font-size: 20px;
  border: 1px solid seagreen;
  width: 100%;
  height: 2rem;
  box-sizing: border-box;
}
</style>
