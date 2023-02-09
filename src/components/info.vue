<template>
  <div class="page-item section">
  <h2>个人简介</h2>
  <div class="mu-avatar">
    <div class="mu-avatar-inner">
      <!-- <img class="img" :src="info.avatar"> -->
      <img class="img" src="@/assets/head.jpg">
    </div>
  </div>
  <h4>{{info.name}}</h4>
  <h3>{{info.introduce}}</h3>
  <mu-container class="papers">
    <template v-for="(item, index) in info.status">
      <mu-paper :key="index" class="paper" circle :z-depth="4">
        <i :class="`iconfont ${item.icon}`"></i>
        <div class="title">{{item.value}}</div>
      </mu-paper>
    </template>
  </mu-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'introduce',
  components: {
  },
  data(){
    return {
    }
  },
  computed: {
    ...mapState(['info'])
  }
}
</script>

<style lang="less" scoped>
.section {
  background-color: #1d6666 !important;
  /* .avatar {
    overflow: hidden;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: rgb(20, 73, 73);
    box-shadow:  inset 11px 11px 22px #0f3838,
            inset -11px -11px 22px #195a5a;
    .img {
      margin: 20px 0;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      border: 3px solid #0f3838;
    }
  } */
  .mu-avatar {
    width: 80px;
    height: 80px;
  }
}

.papers {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .paper {
    margin: 15px;
    width: 50px;
    height: 50px;
    color: #c0c8cf;
    background-color: rgba(97,136,207,.363);
    /* box-shadow:  5px 5px 10px #114040,
            -5px -5px 10px #175252; */
    .iconfont {
      height: 50px;
      line-height: 50px;
      font-size: 30px;
    }
    .title {
      font-size: .9rem;
      margin: 5px 0;
      color: rgba(192, 200, 207, 0.514);
    }
  }
}
.head {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
</style>