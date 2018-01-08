<style lang="less">
  .reg2-wrap{
    .txt{
      font-size: 12px;
      color: #969696;
      line-height: 16px;
      margin-top: -10px;
    }
    .next-txt-link{
      display: block;
      text-align: center;
      text-decoration: none;
      color: #467EC3;
      margin-top: -10px;
    }
    .input-wrap{
      padding-right: 97px!important;
    }
    .login-img-btn{
      margin-top: -10px!important;
    }
  }
</style>
<template>
    <div class="login-wrap reg2-wrap" style="height: 430px;">
      <form action="">
        <div class="input-wrap">
          <div class="form-icon-group">
            <i class="iconfont icon-yuechi"></i>
            <textarea v-model="loginForm.password" placeholder="请输入密钥"
                      class="input-style input-password"></textarea>
            <i class="iconfont icon-shuaxin"></i>
          </div>
          <div class="form-icon-group">
            <i class="iconfont icon-qianbao"></i>
            <input type="text" v-model="loginForm.user" placeholder="请输入钱包地址" class="input-style input-text">
          </div>
          <div class="form-icon-group txt">
          请以最安全的方式保存钱包密钥及地址，钱包密钥将用于你以后登录钱包使用，钱包地址用于接收烽火币.
            <span class="red" style="padding-left: 6px;">密钥丢失后您的数字资产与帐号将永远无法找回</span>，请妥善保管!
          </div>
        </div>
        <img src="../assets/images/save_money.png" class="login-img-btn" alt="">
        <nuxt-link :to="{name:'register3'}" class="next-txt-link">下一步</nuxt-link>
        <p><a href="javascript:;" @click="goLogin" style="padding-left: 300px;" class="go-link">已有账号？去登陆</a></p>
      </form>
    </div>
</template>
<script>
  import axios from '../plugins/axios'
  export default{
    layout: 'loginwrap',
    data(){
      return {
        isPlaintext: false,//是否明文
        loginForm: {
          user: '',
          password: ''
        }
      }
    },
    mounted(){

    },
    methods: {
      goLogin(){
        this.$router.push({name:'login'});
      }
    }

  }
</script>
