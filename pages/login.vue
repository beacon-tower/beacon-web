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
          <textarea v-model="textareaPW" id="textareaPW" placeholder="请输入密钥"
                    class="input-style input-password"></textarea>
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
      return {
        isPlaintext: false,//是否明文
        textareaPW: '',//文本密码
        loginForm: {
          user: '',
          password: ''
        }
      }
    },
    mounted(){
      this.bindEvent();
    },
    methods: {
      bindEvent(){//绑定事件
        $('#textareaPW').keyup((e)=>{//弹起事件，明文转为密文
          this.limitLetter(e, (keyName) => {
            this.loginForm.password += keyName;
            console.log('keyup明文', this.loginForm.password);
            this.textareaPW = this.starText(this.textareaPW)
            console.log('keyup密文',this.textareaPW);
          });
        });
        //粘贴事件
        $('#textareaPW').on('paste', (e)=>{
          this.limitLetter(e, (keyName) => {//转为密文
            this.textareaPW = this.starText(this.textareaPW)
          });
        });
      },
      limitLetter(e, callback) {//输入的值为字母才去做事情
        let lastCode = this.textareaPW.charAt(this.textareaPW.length - 1);
        if (/[\s\S]*/gi.test(this.textareaPW)) {//匹配非空白符
          callback(lastCode);
        }
      },
      eyeText(){//密文和明文的转换
        this.isPlaintext = !this.isPlaintext;
        if (this.isPlaintext) {//转为明文
          this.textareaPW = this.loginForm.password;
        } else {//转为密文
          this.textareaPW = this.starText(this.textareaPW)
        }
      },
      starText(text){//文本显示密文
        var re = /[\s\S]*/gi;
        var output = text.replace(re, function (sMatch) {
          return sMatch.replace(/./g, "*");
        });
        return output;
      }
    }

  }
</script>
