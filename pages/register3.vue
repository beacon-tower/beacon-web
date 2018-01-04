<template>
    <div class="login-wrap" style="height: 350px;">
      <form action="">
        <div class="input-wrap">
          <div class="form-icon-group">
            <i class="iconfont icon-yonghu"></i>
            <input type="text" v-model="loginForm.user" placeholder="请输入您的昵称" class="input-style input-text">
          </div>
          <div class="form-icon-group">
            <i class="iconfont icon-yuechi"></i>
            <textarea v-model="loginForm.password" placeholder="请输入获得的钱包密钥"
                      class="input-style input-password"></textarea>
          </div>
        </div>
        <img src="../assets/images/complete_reg.png" @click="goReg4" class="login-img-btn" alt="">
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
      goReg4(){
        this.$router.push({name:'register4'});
      }
    }

  }
</script>
