<template>
  <div class="page-item section">
    <!-- <h2>联系我</h2> -->
    <div class="page-title">联系我</div>
    <div class="page-container">
      <div class="experience">
        <h3>个人能力</h3>
        <div class="content" v-for="(item,index) in contact.experiences" :key="index">
          <p class="p-item">{{item}}</p>
        </div>
        <!-- {{contact.experience}} -->
      </div>
      <div class="evaluation">
        <h3>自我评价</h3>
        <div class="content">{{contact.evaluation}}</div>
      </div>
      <div class="socials">
        <h3>社交帐号</h3>
        <div class="box">
          <div v-for="(item, index) in contact.socials" :key="index">
            <a class="socials-item" :href="item.url" target="_blank">
              <i :class="`iconfont ${item.icon}`"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="contact-me">
        <h3>联系方式</h3>
        <a class="btn" :href="`tel:${contact.tel}`" target="_blank">
          <i class="iconfont icon-shoujihao"></i>
          {{contact.tel}}
        </a>
        <a class="btn" target="_blank">
          <i class="iconfont icon-youxiang"></i>
          {{contact.email}}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import {
  mapState
} from 'vuex'
export default {
  // ..
  computed: {
    ...mapState(['contact'])
  }
}
</script>
<style lang="less" scoped>
.section {
  background-color: rgb(23, 141, 150)!important;
  a {
    text-decoration: none;
  }
  .page-container {
    text-align: left;
    height: auto;
    h3 {
      // text-align: center;
      margin: 10px 0px;
    }
    .experience {
      .content {
        padding-left: 15px;
      }
      .p-item {
        padding: 2px 0;
      }
    }
    .evaluation {
      .content {
        padding-left: 15px;
      }
    }
    .socials {
      .box {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .socials-item {
          display: block;
          height: 40px;
          width: 40px;
          background: rgba(11, 5, 48, 0.3);
          border-radius: 20px;
          text-align: center;
          margin: 0 5px;
          .iconfont {
            font-size: 2rem;
            line-height: 40px;
            color: rgb(162, 165, 168);
          }
        }
      }
    }
    .contact-me {
      .btn {
        margin: 0 auto;
        display: block;
        height: 30px;
        width: 85%;
        background: rgba(11, 5, 48, 0.3);
        border-radius: 15px;
        font-size: 1.2rem;
        line-height: 30px;
        color: #d0d2d4;
        margin-bottom: 5px;
        text-align: left;
        text-indent: 1rem;
        .icon {
          font-size: 1.5rem;
          color: rgb(210, 213, 216);
          padding: 0 10px;
        }
      }
    }
  }
}
</style>
