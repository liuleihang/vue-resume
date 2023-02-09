<template>
  <div class="page-item section">
    <h2>Career</h2>
    <div class="career">
      <template v-for="(item, index) in career">
        <div class="item" :key="index">
          <h3 class="title">{{item.time}}</h3>
          <h3 class="title">{{item.company}}</h3>
          <p class="text">{{item.text}}</p>
          <mu-divider></mu-divider>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'career',
  components: {
  },
  data(){
    return {
      
    }
  },
  computed: {
    ...mapState(['career'])
  }
}
</script>

<style lang="less" scoped>
.section {
  background-color: #1c6c77 !important;
  .career {
    width: 95%;
    .item {
      margin: 10px 0;
      padding: 0 20px;
      .title {
        margin: 0;
        text-align: left;
      }
      .text {
        color: rgb(223, 224, 224);
        text-align: left;
      }
    }
  }
}
</style>