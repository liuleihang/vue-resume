<template>
  <div class="resume" @mousewheel="rollScroll">
    <el-carousel
      name="pageCarousel"
      ref="pageCarousel" 
      class="pageCarousel" 
      :height="height"
      :direction="direction" 
      :autoplay="autoplay" 
      :interval="interval" 
      :loop="loop"
      @change="changePage"
    >
      <el-carousel-item v-for="(item, index) in pageList" :key="item.neme">
        <component :is="item.name" :ref="item.name" :pageIndex="index"></component>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
      height: '100vh',
      direction: 'vertical',
      autoplay: true,
      interval: 5000,
      loop: true,
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
  computed: {
    ...mapState(['activeIndex'])
  },
  mounted(){
    if (this.$refs.pageCarousel) this.slideBanner();
  },
  methods: {
    ...mapActions(['changeActiveIndex']),
    rollScroll(event) {
      let _that = this;
      // chrome、ie使用的wheelDelta，火狐使用detail
      let scrollVal = event.wheelDelta || event.detail;
      // 节流
      if (!_that.timeOut) {
        _that.timeOut = setTimeout(() => {
          _that.timeOut = null;
          scrollVal > 0
            ? _that.$refs.pageCarousel.prev()
            : _that.$refs.pageCarousel.next();
        }, 300);
      } else {
      }
    }, 
    //是否自动播放
    stopAuto() {
      this.autoplay = false
    },
    startAuto() {
      this.autoplay = true
    },
    // 轮播手滑切换
    slideBanner() {
      //选中的轮播图
      var box = document.querySelector('.el-carousel__container');
      //手指滑动起点Y坐标
      var startPoint = 0;
      //手指滑动终点Y坐标
      var stopPoint = 0;
      //重置坐标
      var resetPoint = function () {
        startPoint = 0;
        stopPoint = 0;
      }
      //手指按下
      box.addEventListener("touchstart", function (e) {
        //手指点击位置的Y坐标
        startPoint = e.changedTouches[0].pageY;
      });
      //手指滑动
      box.addEventListener("touchmove", function (e) {
        //手指滑动后终点位置Y的坐标
        stopPoint = e.changedTouches[0].pageY;
      });
      //当手指抬起的时候，判断图片滚动离左右的距离
      let that = this
      box.addEventListener("touchend", function (e) {
        if (stopPoint == 0 || startPoint - stopPoint == 0) {
          resetPoint();
          that.startAuto();
          return;
        }
        // 下划上一页
        if (startPoint - stopPoint > 0) {
          resetPoint();
          that.$refs.pageCarousel.next();
          that.startAuto();
          return;
        }
        // 上划下一页
        if (startPoint - stopPoint < 0) {
          resetPoint();
          that.$refs.pageCarousel.prev();
          that.startAuto();
          return;
        }
      });
    },
    changePage(index){
      this.changeActiveIndex(index);
      if (index !== 1) {
        this.$refs.skills[0].clearShuffle();
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

  .pageCarousel {
    height: 100vh;
  }
}

.resume .swiper-container {
  height: 100vh;
}
</style>