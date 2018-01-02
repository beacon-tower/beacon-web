<style lang="less">

</style>
<template>
  <div class="login-wrap" style="height: 430px;">
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
</template>
<script>
import axios from '../plugins/axios'
export default{
   layout: 'loginwrap',
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
