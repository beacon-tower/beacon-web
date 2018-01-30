<template>
    <div class="login-wrap" style="height: 350px;">
      <form action="">
        <div class="input-wrap">
          <div class="form-icon-group">
            <i class="iconfont icon-yonghu"></i>
            <input type="text" v-model="regForm.nickname" placeholder="请输入您的昵称" class="input-style input-text">
          </div>
          <div class="form-icon-group">
            <i class="iconfont icon-yuechi"></i>
            <textarea v-model="regForm.secret" placeholder="请输入获得的钱包密钥"
                      class="input-style input-password"></textarea>
          </div>
        </div>
        <span class="err-tip" v-html="errTip"></span>
        <img src="../assets/images/complete_reg.png" @click="goReg4" class="login-img-btn" alt="">
      </form>
    </div>
</template>
<script>
  import {validateEmpty} from '../assets/js/common'
  import axios from '../plugins/axios'
  export default{
    layout: 'loginwrap',
    data(){
      return {
        errTip:'',
        regForm: {
          nickname: '',
          secret: '',
          mobile:''
        }
      }
    },
    mounted(){
        this.regForm.mobile = sessionStorage.getItem('ph');
    },
    methods: {
      goReg4(){
        if (validateEmpty(this.regForm)) {
          this.errTip = '输入框不能为空';
        } else {
          var qs = require('qs');
          var AschJS = require('asch-js');
          var publicKey = AschJS.crypto.getKeys(this.regForm.secret).publicKey;  //根据密码生成公钥
          axios.post('user/register/third/step', qs.stringify({
            nickname: this.regForm.nickname,
            publicKey: publicKey,
            mobile: this.regForm.mobile
          }))
            .then((response) => {
              if (response.data.code == 200) {
                sessionStorage.setItem('rgtk', response.data.data);
                this.$router.push({name: 'register4'});
              } else if (response.data.code == 500) {
                this.errTip = '服务器错误，请联系管理员';
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
