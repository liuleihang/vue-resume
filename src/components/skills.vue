<template>
  <div class="page-item section">
    <h2>技能</h2>
    <mu-container class="container">
      <transition-group name="flip-list" tag="div">
        <mu-chip v-for="item in skills" class="chip" :key="item" color="#b0bec5" text-color="rgb(56, 19, 59)">
          {{item}}
        </mu-chip>
      </transition-group>
    </mu-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'skills',
  data(){
    return {
      
    }
  },
  computed: {
    ...mapState(['skills'])
  }
}
</script>

<style lang="less" scoped>
  .section {
    background-color: rgb(53, 125, 153) !important;
    .container {
      width: 80%;
        .chip {
          margin: 10px;
        }
    }
  }
</style>