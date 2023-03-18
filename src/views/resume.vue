<template>
  <div class="resume">
    <swiper :options="swiperOption" ref="mySwiper" id="mySwiper">
      <!-- <swiper-slide><introduce></introduce></swiper-slide>
      <swiper-slide><skills/></swiper-slide>
      <swiper-slide><profiles/></swiper-slide>
      <swiper-slide><career/></swiper-slide>
      <swiper-slide><contact/></swiper-slide> -->
      <swiper-slide v-for="item in pageList" :key="item.name">
          <!-- <transition name="fade">
            <component :is="item.name"></component>
          </transition> -->
          <component :is="item.name"></component>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
import info from '@/components/info'
import skills from '@/components/skills'
import profiles from '@/components/profiles'
import career from '@/components/career'
import contact from '@/components/contact'

export default {
  name: 'resume',
  components: {
    // swiper,
    // swiperSlide,
    info,
    skills,
    profiles,
    career,
    contact
  },
  data(){
    return {
      pageList:[
        {
          name: 'info',
          bgColor:'#144949'
        },
        {
          name: 'skills',
          bgColor:'#38133b'
        },
        {
          name: 'profiles',
          bgColor:'#49500a'
        },
        {
          name: 'career',
          bgColor:'#03380B'
        },
        {
          name: 'contact',
          bgColor:'#165839'
        }
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true  // 点击分页器跳切换到相应的幻灯片
        },
        direction: 'vertical', // 幻灯片放映方向，通常不与左右按钮一同使用
        autoHeight: true,
        mousewheel: true, // 鼠标滚轮控制Swiper切换
        setWrapperSize: true, // Swiper使用flexbox布局(display: flex)
        threshold: 5 //拖动的临界值（单位为px）
      }
    }
  }
}
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.resume {
  /* background-color: rgba(22,88,57,.897); */
  height: 100vh;
  overflow: hidden;
}
.resume .swiper-container {
  height: 100vh;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>