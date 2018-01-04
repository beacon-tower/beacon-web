<style lang="less">
  .reg1-wrap{
    .beacon-primary-btn{
      margin-left: 6px;
    }
  }
</style>
<template>
  <div class="login-wrap reg1-wrap" style="height: 305px;">
    <form action="">
      <div class="input-wrap">
        <div class="form-icon-group">
          <i class="iconfont icon-shouji"></i>
          <input type="text"  placeholder="请输入手机号" class="input-style input-text">
        </div>
        <div class="form-icon-group">
          <i class="iconfont icon-yuechi"></i>
          <input type="text"  placeholder="请输入验证码" style="width: 125px;" class="input-style input-text">
          <button type="button" class="beacon-primary-btn">发送验证码</button>
        </div>
      </div>
      <img src="../assets/images/next.png" @click="goReg2" class="login-img-btn" alt="">
      <p><a href="javascript:;" @click="goLogin" style="padding-left: 300px;" class="go-link">已有账号？去登陆</a></p>
    </form>
  </div>
</template>
<script>
  export default{
    layout: 'loginwrap',
    data(){
        return {

        }
    },
    methods:{
      goLogin(){
        this.$router.push({name:'login'});
      },
      goReg2(){
        this.$router.push({name:'register2'});
      },
    }
  }
</script>
