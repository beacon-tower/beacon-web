<style lang="less">
  .reg2-wrap {
    .txt {
      font-size: 12px;
      color: #969696;
      line-height: 16px;
      margin-top: -10px;
    }
    .next-txt-link {
      display: block;
      text-align: center;
      text-decoration: none;
      color: #467EC3;
      margin-top: -10px;
    }
    .input-wrap {
      padding-right: 97px !important;
    }
    .login-img-btn {
      margin-top: -10px !important;
    }
  }
</style>
<template>
  <div class="login-wrap reg2-wrap" style="height: 445px;">
    <form action="">
      <div class="input-wrap">
        <div class="form-icon-group">
          <i class="iconfont icon-yuechi"></i>
          <textarea readonly v-model="regForm.password"
                    class="input-style input-password"></textarea>
          <i class="iconfont icon-shuaxin" @click="getSecretInfo"></i>
        </div>
        <div class="form-icon-group">
          <i class="iconfont icon-qianbao"></i>
          <input readonly type="text" v-model="regForm.address" class="input-style input-text">
        </div>
        <div class="form-icon-group txt">
          请以最安全的方式保存钱包密钥及地址，钱包密钥将用于你以后登录钱包使用，钱包地址用于接收烽火币.
          <span class="red" style="padding-left: 6px;">密钥丢失后您的数字资产与帐号将永远无法找回</span>，请妥善保管!
        </div>
      </div>
      <span class="err-tip" v-html="errTip"></span>
      <img src="../assets/images/save_money.png" @click="saveMoney" class="login-img-btn" alt="">
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
        errTip: '&nbsp;',//是否明文
        regForm: {
          password: '',
          address: '',
        }
      }
    },
    mounted(){
      this.getSecretInfo();
    },
    methods: {
      goLogin(){
        this.$router.push({name: 'login'});
      },
      saveMoney(){
        var txt = `钱包密钥： ${this.regForm.password}\r钱包地址:  ${this.regForm.address}`
        var FileSaver = require('file-saver');
        var blob = new Blob([txt], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, "钱包信息.txt");
      },
      getSecretInfo(){//获取密钥和地址信息
        if (sessionStorage.getItem('ph')) {
          var qs = require('qs');
          axios.post('user/register/second/step', qs.stringify({
            mobile: sessionStorage.getItem('ph')
          }))
            .then((response) => {
              if (response.data.code == 200) {
                this.regForm.password = response.data.data.secret;
                this.regForm.address = response.data.data.address;
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

  }
</script>
