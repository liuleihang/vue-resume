<template>
  <div class="page-item section">
    <div class="page-title">职业生涯</div>
    <div class="page-container career">
      <!-- <div v-for="(item, index) in career" :key="index">
        <div class="item">
          <h3 class="title">{{item.time}}</h3>
          <h3 class="title">{{item.company}}</h3>
          <p class="text">{{item.text}}</p>
        </div>
        <el-divider class="el-divider"></el-divider>
      </div> -->
      <el-timeline class="timeline" :reverse="reverse">
        <el-timeline-item
          class="timeline-item"
          v-for="(item, index) in career"
          :key="index"
          :timestamp="item.time"
          placement="top"
        >
          <el-card class="el-card">
            <div class="el-card-header">
              <div class="el-card-title">{{ item.company }}</div>
            </div>
            <div class="el-card-text">
              <!-- {{ item.text }} -->
              <div v-for="(item, index) in item.workList" :key="index">
                {{ item }}
              </div>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
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
      reverse: true,
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
    
    /deep/ .timeline {
      .el-timeline-item {
        .el-timeline-item__wrapper {
          padding-left: 20px;
        }
        .el-timeline-item__timestamp {
          color: #ffffff;
          text-align: left;
        }
      }
    }
    .el-card {
      box-sizing: border-box;
      border-radius: 10px;
      border-color: rgb(176, 190, 197);
      text-align: left;
      background-color: rgb(28, 108, 119, 10%);
    }
    //覆盖el-card样式
    /deep/ .el-card__body {
      padding: 0px 5px;
    }
    .el-card-header {
      padding: 5px 0px;
    }

    .el-card-title {
      color: #ffffff;
      font-size: 1.3rem;
    }

    .el-card-text {
      padding: 5px 0px;
      letter-spacing: 1px;
      color: #e3e3e3;
      text-align: left;
    }
    
  }
}
</style>