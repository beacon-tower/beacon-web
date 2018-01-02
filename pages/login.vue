<style lang="less">
  @import "../assets/less/style_variable";
.login-container{
  .img-style{
     width: 100%;
     border: none;
  }
  .login-content{
    position: absolute;
    top: 0;
    z-index: 9999;
    width: 100%;
    .title{
      width: 270px;
      margin-left: 51px;
      margin-top: 50px;
    }
    .login-wrap{
      width: 420px;
      height: 430px;
      border: 1px solid #f1fff1;
      background:rgba(255,255,255,1);
      position: absolute;
      left:50%;
      top:210px;
      margin-left:-210px;
      .boder_radius(2px);
      .input-wrap{
        padding-top: 75px;
        padding-left: 102px;
        padding-right: 92px;
      }
      .form-icon-group{
        margin-bottom: 15px;
        position: relative;
        .iconfont{
          color: #969696;
          position: absolute;
        }
        .icon-yonghu{
          font-size: 18px;
          top: 10px;
          left: 5px;
        }
        .icon-yuechi{
          top: 10px;
          left: 5px;
        }
        .icon-eye{
          font-size: 18px;
          cursor: pointer;
          bottom: 2px;
          right: 16px;
        }
      }
      .input-style{
        width: 212px;
        padding-left: 25px;
      }
      .input-password{
        height: 110px;
        padding-top: 9px;
        resize: none;
      }
      .valid-code-wrap{
        border: 1px solid #C8C8C8;
        width: 212px;
        height: 38px;
        color: #C8C8C8;
        font-size: 14px;
        text-align: center;
        padding-top: 12px;
      }
      .login-img-btn{
        cursor: pointer;
        width: 258px;
        margin-left: 80px;
        margin-top: 20px;
      }
    }
    .faq-link{
      text-decoration:none;
      color: #AEAEAE;
      padding-left: 25px;
      font-size: 12px;
    }
    .reg-link{
      text-decoration:none;
      font-size: 12px;
      color: @primarycolor;
      font-weight: bold;
      padding-left: 240px;
    }
  }
}
</style>
<template>
  <div class="login-container">
    <img src="../assets/images/bg_up.png" class="img-style" alt="">
    <img src="../assets/images/bg_bottom.png" class="img-style" alt="">
    <div class="login-content">
      <img src="../assets/images/title.png" class="title" alt="">
      <div class="login-wrap">
        <form action="">
              <div class="input-wrap">
                <div class="form-icon-group">
                  <i class="iconfont icon-yonghu"></i>
                  <input type="text" v-model="loginForm.user" placeholder="请输入邮箱或手机号" class="input-style input-text">
                </div>
                <div class="form-icon-group">
                  <i class="iconfont icon-yuechi"></i>
                  <textarea  v-model="textareaPW" id="textareaPW"  placeholder="请输入密钥" class="input-style input-password"></textarea>
                  <i class="iconfont icon-eye" @click="eyeText"></i>
                </div>
                <input type="hidden" v-model="loginForm.password">
                <div class="valid-code-wrap">极验占位</div>
              </div>
              <img src="../assets/images/login_btn.png" class="login-img-btn" alt="">
            <p class=""><a href="" class="faq-link">FAQ</a><a href="" class="reg-link">没有密钥？注册一个</a></p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from '../plugins/axios'
export default{
    data(){
        return{
            isPlaintext:false,//是否明文
            textareaPW:'',//显示的密钥值
            loginForm:{
                user:'',
                password:''
            }
        }
    },
    mounted(){

    },
   methods:{
     eyeText(){
         this.isPlaintext = !this.isPlaintext;
         if(this.isPlaintext){//明文

         }else{//密文
           this.loginForm.password = this.starText(this.loginForm.password);
         }
     },
     starText(text){//文本显示密文
       var re = /[\s\S]*/gi;
       var output = text.replace(re, function(sMatch){
         return sMatch.replace(/./g,"*");
       });
       return output;
     }
   }

}
</script>
