<template>
  <div class="resume" @mousewheel="rollScroll">
    <el-carousel ref="carousel" class="carousel" height="100vh" direction="vertical" :autoplay="false" :interval="3000"
      :loop="true">
      <el-carousel-item v-for="item in pageList" :key="item.neme">
        <component :is="item.name"></component>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import info from '@/views/resume/info'
import skills from '@/views/resume/skills'
import profiles from '@/views/resume/profiles'
import career from '@/views/resume/career'
import contact from '@/views/resume/contact'

// const info = () => import('@/views/resume/info')
// const skills = () => import('@/views/resume/skills')
// const profiles = () => import('@/views/resume/profiles')
// const career = () => import('@/views/resume/career')
// const contact = () => import('@/views/resume/contact')
export default {
  name: 'Resume',
  components: {
    info,
    skills,
    profiles,
    career,
    contact
  },
  data() {
    return {
      pageList: [
        {
          name: 'info',
          bgColor: '#144949'
        },
        {
          name: 'skills',
          bgColor: '#38133b'
        },
        {
          name: 'profiles',
          bgColor: '#49500a'
        },
        {
          name: 'career',
          bgColor: '#03380B'
        },
        {
          name: 'contact',
          bgColor: '#165839'
        }
      ]
    }
  },
  methods: {
    rollScroll(event) {
      let _that = this;
      // chrome、ie使用的wheelDelta，火狐使用detail
      let scrollVal = event.wheelDelta || event.detail;
      // 节流
      if (!_that.timeOut) {
        _that.timeOut = setTimeout(() => {
          _that.timeOut = null;
          scrollVal > 0
            ? _that.$refs.carousel.prev()
            : _that.$refs.carousel.next();
        }, 300);
      } else {
      }
    }
  }
}
</script>

<style lang="less" scoped>
.resume {
  /* background-color: rgba(22,88,57,.897); */
  height: 100vh;
  overflow: hidden;

  .carousel {
    height: 100vh;
  }
}

.resume .swiper-container {
  height: 100vh;
}
</style>