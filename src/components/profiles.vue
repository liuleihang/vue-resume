<template>
  <div class="page-item section">
    <h2>Profiles</h2>
    <mu-carousel class="carousel" :cycle="cycle" :hide-controls="controls" :hide-indicators="indicators" :interval="interval"  transition="slide">
      <template v-for="(profile, index) in profiles">
        <mu-carousel-item :key=index>
          <mu-container class="box">
            <mu-card class="card" style="width: 100%; margin: 0 auto;">
              <mu-card-header :title="profile.title" :sub-title="profile.subTitle" />
              <mu-card-title :sub-title="'技术栈：' + profile.skills"></mu-card-title>
              <mu-card-text>
                {{profile.text}}
              </mu-card-text>
              <mu-card-actions v-if="profile.github"><a :href="profile.github" target="_blank">
                  <mu-icon class="icon" value=":iconfont icon-GitHub"></mu-icon>{{profile.github}}</a>
              </mu-card-actions>
            </mu-card>
          </mu-container>
        </mu-carousel-item>
      </template>
    </mu-carousel>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'profiles',
  components: {
  },
  data(){
    return {
      cycle: false, //是否周期性自动切换
      indicators: true, //是否隐藏指示器
      controls: false, //是否隐藏控制器
      interval: 10000 //切换时间间隔
    }
  },
  computed: {
    ...mapState(['profiles'])
  }
}
</script>

<style lang="less" scoped>
  .section {
    background-color:rgb(23, 158, 140) !important;
    color: #000;
    .carousel {
      min-height: 50vh;
      width: 95%;
      .mu-carousel-item {
        display: flex;
        justify-content: center;
        align-items: center;
        .box {
          width: 80%;
          .card {
            border-radius: 10px;
            text-align:left;
            background-color:#f2f4f5;
            .mu-card-actions {
              // padding: 0;
              .icon {
                margin-right: 10px;
                font-size: 30px;
                color: #000;
              }
          }
          }
        }
      }
    }
  }
</style>