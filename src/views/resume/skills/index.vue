<template>
  <div class="page-item section">
    <div class="page-title">技能</div>
    <div class="page-container">
      <transition-group tag="ul" name="fade">
        <li v-for="item in skills" class="chip" :key="item">
          {{ item }}
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { skills } from '@/data/index.js'
import { shuffle } from 'lodash-es'
export default {
  name: 'skills',
  data() {
    return {
      skills: skills,
    }
  },
  computed: {
  },
  mounted(){
    this.shuffleSkills()
    this.time = setInterval(() => {
      this.shuffleSkills()
    }, 5000)
  },
  beforeDestroy () {
    console.log('clear')
    // clearInterval(this.time)
  },
  methods: {
    shuffleSkills(){
      this.skills = shuffle(this.skills)
    },
  }
}
</script>

<style lang="less" scoped>
.section {
  background-color: rgb(53, 125, 153) !important;

  .page-container {

    .chip {
      background-color: rgb(176, 190, 197, .665);
      margin: 5px;
      color: rgb(56, 19, 59);
      border-radius: 16px;
      padding: 0 10px;
      height: 32px;
      line-height: 30px;
      font-size: 12px;
      white-space: nowrap;
      display: inline-block;
    }
  }
}
/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 1s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
  以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}
</style>