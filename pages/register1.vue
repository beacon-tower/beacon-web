<style lang="less">
  .reg1-wrap {
    .beacon-primary-btn {
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
          <input type="text" v-model="regForm.mobile" placeholder="请输入手机号" class="input-style input-text">
        </div>
        <div class="form-icon-group">
          <i class="iconfont icon-yuechi"></i>
          <input type="text" v-model="regForm.code" placeholder="请输入验证码" style="width: 125px;"
                 class="input-style input-text">
          <button type="button" class="beacon-primary-btn" style="width: 82px;" @click="sendCode">{{codebtn}}</button>
        </div>
      </div>
      <span class="err-tip" v-html="errTip"></span>
      <img src="../assets/images/next.png" @click="goReg2" class="login-img-btn" alt="">
      <p>
        <nuxt-link :to="{name:'login'}" style="padding-left: 300px;" class="go-link">已有账号？去登陆</nuxt-link>
      </p>
    </form>
  </div>
</template>
<script>
  import axios from '../plugins/axios'
  import {validatePhone} from '../assets/js/common'
  export default{
    layout: 'loginwrap',
    data(){
      return {
        isGetDynamic:false,
        codebtn: '发送验证码',
        errTip:'&nbsp;',
        regForm: {
          mobile: '',
          code: '',
        },
      }
    },
    methods: {
      goReg2(){
        if (this.regForm.mobile == '') {
          this.errTip = '手机号不能为空';
        }else{
          if(validatePhone(this,this.regForm.mobile)){
            if (this.regForm.code == '') {
              this.errTip = '验证码不能为空';
            }else{
              sessionStorage.setItem('ph',this.regForm.mobile);
              axios.post('user/register/first/step', this.regForm)
                .then( (response)=> {
                  if(response.data.code==200){
                    this.$router.push({name: 'register2'});
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

      },
      /**
       * 清除定时器
       * @param _vm 当前实例对象this
       * @param counttime 定时器id
       */
      clearClockingTime (_vm, counttime) {
        clearInterval(counttime);
        _vm.codebtn = '发送验证码';
        _vm.isGetDynamic = false;
      },
      /**
       * 设置定时器
       * @param _vm 当前实例对象this
       * @param tims 倒计时时长开始
       * @param completeCb 倒计时结束时的回调
       * @returns {number} 定时器id
       */
      etClocking (_vm, tims, completeCb) {
        var countn = tims;
        _vm.isGetDynamic = true;
        _vm.codebtn = countn + 's';
        //定时器
        var counttime = setInterval( () =>{
          countn--;
          _vm.codebtn = countn + 's';
          if (countn < 0) {
            this.clearClockingTime(_vm, counttime);
            if (completeCb) {
              completeCb();
            }
          }
        }, 1000);
        return counttime;
      },
      sendCode(){
        if (this.regForm.mobile == '') {
          this.errTip = '手机号不能为空';
        }else{
            if(validatePhone(this,this.regForm.mobile)){
              let countID = this.etClocking(this, 60);
              axios.post('sms/code', {
                mobile:this.regForm.mobile,
                type:'register'
              })
                .then( (response)=> {
                  if (response.data.code != 200) {
                    this.clearClockingTime(this, countID);
                    this.errTip = response.data.msg;
                  }
                })
                .catch( (error)=> {
                  console.log(error);
                });
            }
        }
      }
    }
  }
</script>
