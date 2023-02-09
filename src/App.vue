<template>
  <div id="app">
    <Resume></Resume>
  </div>
</template>

<script>
import Resume from '@/views/resume'
export default {
  name: 'App',
  components:{
    Resume
  },
  data(){
    return {
      
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Helvetica,sans-serif,Avenir,Arial,\,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei!important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d0d2d4;
}
</style>
