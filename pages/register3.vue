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
  import axios from '../plugins/axios'
  export default{
    layout: 'loginwrap',
    data(){
      return {
        errTip:'',
        regForm: {
          nickname: '',
          secret: '',
          mobile:sessionStorage.getItem('ph')
        }
      }
    },
    mounted(){

    },
    methods: {
      goReg4(){
        var qs = require('qs');
        axios.post('user/register/third/step', qs.stringify(this.regForm))
          .then( (response)=> {
            if(response.data.code==200){
              this.$router.push({name: 'register4'});
            }else{
              this.errTip = response.data.msg;
            }
          })
          .catch( (error)=> {
            console.log(error);
          });
      }
    }

  }
</script>
