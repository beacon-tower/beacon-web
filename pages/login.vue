<template>
    <div class="login-wrap" style="height: 420px;">
      <form action="">
        <div class="input-wrap">
          <div class="form-icon-group">
            <i class="iconfont icon-yonghu"></i>
            <input type="text" v-model="loginForm.user" placeholder="请输入邮箱或手机号" class="input-style input-text">
          </div>
          <div class="form-icon-group">
            <i class="iconfont icon-yuechi"></i>
            <textarea v-model="loginForm.password" placeholder="请输入密钥"
                      class="input-style input-password"></textarea>
          </div>
          <div class="valid-code-wrap">极验占位</div>
        </div>
        <img src="../assets/images/login_btn.png" class="login-img-btn" alt="">
        <p><a href="" class="faq-link">FAQ</a>
          <nuxt-link :to="{name:'register1'}"  style="padding-left: 240px;" class="go-link">没有密钥？注册一个</nuxt-link>
        </p>
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
    }

  }
</script>
