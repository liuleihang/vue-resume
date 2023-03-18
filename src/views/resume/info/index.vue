<template>
  <div class="page-item section">
    <!-- <h2>个人简介</h2> -->
    <div class="page-title">个人简介</div>
    <div class="page-container">
      <div class="head">
        <img class="img" :src="headImg">
        <!-- <el-avatar  :src="headImg"></el-avatar> -->
      </div>
      <div>{{ info.name }}</div>
      <div>{{ info.introduce }}</div>
      <div class="papers">
        <div v-for="(item, index) in info.status" :key="index">
          <div :key="index" class="paper" circle :z-depth="4">
            <i :class="`iconfont ${item.icon}`"></i>
            <div class="title">{{ item.value }}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import headImg from '@/assets/head.png'
export default {
  name: 'Info',
  components: {
  },
  data() {
    return {
      headImg
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

  h3,
  h4 {
    margin: 10px 0px;
  }  
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
  .head {
    margin: 10px 0px;
    .img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

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
    border-radius: 50%;
    background-color: rgba(97, 136, 207, .363);

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
      // color: rgba(192, 200, 207, 0.514);
    }
  }
}
</style>