<style lang="less">
  @import "../assets/less/style_variable";

  .login-container {
    .img-style {
      width: 100%;
      border: none;
    }
    .login-content {
      position: absolute;
      top: 0;
      z-index: 9999;
      width: 100%;
      .title {
        width: 270px;
        margin-left: 51px;
        margin-top: 50px;
      }
      .login-wrap {
        width: 420px;
        border: 1px solid #f1fff1;
        background: rgba(255, 255, 255, 1);
        position: absolute;
        left: 50%;
        top: 210px;
        margin-left: -210px;
        .boder_radius(2px);
        .input-wrap {
          padding-top: 75px;
          padding-left: 102px;
          padding-right: 92px;
        }
        .form-icon-group {
          margin-bottom: 10px;
          position: relative;
          .iconfont {
            color: #969696;
            position: absolute;
            top: 10px;
            left: 5px;
          }
          .icon-yonghu {
            font-size: 18px;
          }
          .icon-shouji{
            font-size: 20px;
            top: 8px!important;
          }
          .icon-shuaxin {
            width: 15px;
            height: 15px;
            cursor: pointer;
            top: 90px;
            left: 190px;
          }
        }
        .input-style {
          width: 212px;
          padding-left: 25px;
        }
        .input-password {
          height: 110px;
          padding-top: 9px;
          resize: none;
        }
        .valid-code-wrap {
          border: 1px solid #C8C8C8;
          width: 212px;
          height: 38px;
          color: #C8C8C8;
          font-size: 14px;
          text-align: center;
          padding-top: 12px;
        }
        .login-img-btn {
          cursor: pointer;
          width: 258px;
          margin-left: 80px;
          margin-top: 20px;
        }
      }
      .faq-link {
        text-decoration: none;
        color: #AEAEAE;
        padding-left: 25px;
        font-size: 12px;
      }
      .go-link {
        text-decoration: none;
        font-size: 12px;
        color: @primarycolor;
        font-weight: bold;
      }
    }
  }
</style>
<template>
  <div class="login-container">
    <img src="../assets/images/bg_up.png" class="img-style" alt="">
    <img src="../assets/images/bg_bottom.png" class="img-style" alt="">
    <div class="login-content">
      <img src="../assets/images/reg_title.png" v-if="isShowRegTitle" class="title" alt="">
      <img src="../assets/images/title.png" v-else class="title" alt="">
      <nuxt/>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        isShowRegTitle: false
      }
    },
    mounted(){
      this.ShowTitlePic(this.$route.name);
    },
    watch: {
      '$route' (to, from) {
        this.ShowTitlePic(to.name);
        console.log('watch====:$route');
      }
    },
    methods: {
        ShowTitlePic(name){
          this.isShowRegTitle = name.indexOf('register') != -1 ? true : false;
        }
    }
  }
</script>
