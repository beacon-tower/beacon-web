<template>
  <div class="login-wrap" style="height: 430px;">
    <form action="">
      <div class="input-wrap">
        <div class="form-icon-group">
          <i class="iconfont icon-yonghu"></i>
          <input type="text" v-model="loginForm.username" placeholder="请输入手机号" class="input-style input-text">
        </div>
        <div class="form-icon-group">
          <i class="iconfont icon-yuechi"></i>
          <textarea v-model="loginForm.secret" placeholder="请输入密钥"
                    class="input-style input-password"></textarea>
        </div>
        <div class="valid-code-wrap" id="captcha">
          <p id="wait" class="show">正在加载验证码......</p>
        </div>
      </div>
      <span class="err-tip" v-html="errTip"></span>
      <img src="../assets/images/login_btn.png" @click="loginMethod" class="login-img-btn" alt="">
      <p><a href="" class="faq-link">FAQ</a>
        <nuxt-link :to="{name:'register1'}" style="padding-left: 240px;" class="go-link">没有密钥？注册一个</nuxt-link>
      </p>
    </form>
  </div>
</template>
<script>
  import axios from '../plugins/axios'
  import {validatePhone, validateEmpty, validateEmail} from '../assets/js/common'
  import '../assets/js/gt';//极验依赖
  export default{
    layout: 'loginwrap',
    data(){
      return {
        errTip: '&nbsp;',
        isPlaintext: false,//是否明文
        loginForm: {
          username: '',
          secret: ''
        }
      }
    },
    mounted(){
      /*var handler = function (captchaObj) {
       captchaObj.appendTo('#captcha');
       captchaObj.onReady(function () {
       $("#wait").hide();
       });
       $('#btn').click(function () {
       var result = captchaObj.getValidate();
       if (!result) {
       return alert('请完成验证');
       }
       $.ajax({
       url: 'gt/validate-slide',
       type: 'POST',
       dataType: 'json',
       data: {
       username: this.loginForm.username,
       password: this.loginForm.secret,
       geetest_challenge: result.geetest_challenge,
       geetest_validate: result.geetest_validate,
       geetest_seccode: result.geetest_seccode
       },
       success: function (data) {
       if (data.status === 'success') {
       alert('登录成功');
       } else if (data.status === 'fail') {
       alert('登录失败，请完成验证');
       captchaObj.reset();
       }
       }
       });
       })
       // 更多接口说明请参见：http://docs.geetest.com/install/client/web-front/
       window.gt = captchaObj;
       };
       $.ajax({
       url: "gt/register-slide?t=" + (new Date()).getTime(), // 加随机数防止缓存
       type: "get",
       dataType: "json",
       success: function (data) {

       // 调用 initGeetest 进行初始化
       // 参数1：配置参数
       // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它调用相应的接口
       initGeetest({
       // 以下 4 个配置参数为必须，不能缺少
       gt: data.gt,
       challenge: data.challenge,
       offline: !data.success, // 表示用户后台检测极验服务器是否宕机
       new_captcha: data.new_captcha, // 用于宕机时表示是新验证码的宕机

       product: "float", // 产品形式，包括：float，popup
       width: "300px"
       // 更多配置参数说明请参见：http://docs.geetest.com/install/client/web-front/
       }, handler);
       }
       });*/
    },
    methods: {
      loginMethod(){
        if (validateEmpty(this.loginForm)) {
          this.errTip = '输入框不能为空';
        } else {
          if (this.loginForm.username.indexOf('@') != -1) {//验证邮箱
            if (validateEmail(this, this.loginForm.username)) {
              this.requestLogin();
            }
          } else {//验证手机
            if (validatePhone(this, this.loginForm.username)) {
              this.requestLogin();
            }
          }
        }
      },
      requestLogin(){
        var qs = require('qs');
        var AschJS = require('asch-js');
        var publicKey = AschJS.crypto.getKeys(this.loginForm.secret).publicKey;  //根据密码生成公钥
        axios.post('user/login', qs.stringify({
          username: this.loginForm.username,
          publicKey: publicKey
        }))
          .then((response) => {
            if (response.data.code == 200) {
              sessionStorage.setItem('rgtk', response.data.data);
              this.$router.push({name: 'index'});
            } else {
              this.errTip = response.data.msg;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }

    }

  }
</script>
