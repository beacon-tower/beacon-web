<style lang="less">
  .reg4-wrap{
    .input-wrap{
      text-align: center;
    }
    .success_icon{
      width: 105px;
    }
    .success-txt{
      font-size:25px;
      color: #004178;
      font-weight: bold;
    }
    .txt{
      font-size: 12px;
      color: #AEAEAE;
    }
  }
</style>
<template>
    <div class="login-wrap reg4-wrap" style="height: 350px;">
      <form action="">
        <div class="input-wrap">
          <div class="form-icon-group">
            <img src="../assets/images/success_icon.png" class="success_icon" alt="">
          </div>
          <div class="form-icon-group success-txt">
            注册成功
          </div>
          <span>{{num}}s后自动跳转...</span>
        </div>
        <img src="../assets/images/immed_login.png" @click="immediateLogin" class="login-img-btn" alt="">
      </form>
    </div>
</template>
<script>
  import axios from '../plugins/axios'
  export default{
    layout: 'loginwrap',
    data(){
      return {
        num:10
      }
    },
    mounted(){
       let id = setInterval(()=>{
            this.num--;
         if(this.num<=0){
                clearInterval(id);
                this.immediateLogin();
            }
        },1000);
    },
    methods: {
      immediateLogin(){
        this.$router.push({name:'login'});
      }
    }

  }
</script>
