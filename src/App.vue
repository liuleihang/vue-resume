<template>
  <div id="app">
    <router-view :key="$route.path" />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Helvetica,sans-serif,Avenir,Arial,\,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei!important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d0d2d4;
}
</style>
