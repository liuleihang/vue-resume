<template>
  <div class="page-item profiles">
    <div class="page-title">作品</div>
    <div class="page-container">
      <el-carousel class="carousel" :autoplay="autoplay" :interval="interval" :indicator-position="indicatorPosition"
        :arrow="arrow">
        <div v-for="(profile, index) in profiles" :key="index">
          <el-carousel-item class="el-carousel-item">
            <div class="box">
              <el-card class="card">
                <div class="el-card-header">
                  <div class="el-card-title">{{ profile.title }}</div>
                  <div class="el-card-sub-title">{{ profile.subTitle }}</div>
                </div>
                <div class="el-card-title-container">技术栈： {{ profile.skills }}</div>
                <div class="el-card-text">
                  {{ profile.text }}
                </div>
                <div class="el-card-actions" v-if="profile.github">
                  <a :href="profile.github" target="_blank">
                    <i class="icon iconfont icon-github-fill"></i>
                    <span class="url">{{ profile.github }}</span>
                  </a>
                </div>
              </el-card>
            </div>
          </el-carousel-item>
        </div>
      </el-carousel>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Profiles',
  components: {
  },
  data() {
    return {
      type: 'card',
      autoplay: false, // 是否周期性自动切换
      interval: 10000, // 自动切换的时间间隔，单位为毫秒
      indicatorPosition: 'outside', // 指示器的位置
      arrow: 'always'
    }
  },
  computed: {
    ...mapState(['profiles'])
  }
}
</script>

<style lang="less" scoped>
.profiles {
  background-color: rgb(23, 158, 140) !important;

  // color: #000;
  .carousel {
    // min-height: 50vh;
    // width: 95%;

    /deep/ .el-carousel__indicators {
      display: none;
    }

    .el-carousel-item {
      display: flex;
      justify-content: center;
      align-items: center;

      .box {
        width: 95%;
        .card {
          width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
          border-radius: 10px;
          border-color: rgb(243, 243, 243, 50%);
          text-align: left;
          background-color: rgb(23, 158, 140, 10%);
          //覆盖el-card样式
           /deep/ .el-card__body {
            padding: 0px 5px;
          }
          .el-card-header {
            padding: 5px 0px;
          }

          .el-card-title {
            color: rgb(255, 255, 255);
            font-size: 1.3rem;
          }

          .el-card-sub-title {
            font-size: 14px;
            color: rgb(255, 255, 255, 80%);
          }

          .el-card-title-container {
            padding: 5px 0px;
            font-size: 14px;
            color: rgb(255, 255, 255, 80%);
          }

          .el-card-text {
            padding: 5px 0px;
            letter-spacing: 1px;
            color: rgb(255, 255, 255, 90%);
            text-align: left;
          }

          .el-card-actions {
            padding: 5px 0px;

            a {
              font-size: 15px;
              color: rgb(255, 255, 255, 0.8);
              text-decoration: none;
              display: flex;
              align-items: center;
            }

            .iconfont {
              font-size: 25px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}</style>