<style lang="less">
  @import "../assets/less/style_variable";

  .person-center-wrap {
    .line-title {
      color: @graycolor;
      padding-bottom: 10px;
      border-bottom: 1px solid @linecolor;
      margin-bottom: 20px;
    }
    .line-hr {
      border: none;
      border-bottom: 1px solid @linecolor;
      margin: 20px 0;
    }
    .person-img {
      width: 75px;
      display: block;
      margin-bottom: 15px;
    }
    .choose-btn {
      display: block;
      width: 73px;
      height: 30px;
      line-height: 27px;
      background-color: #fff;
      .boder_radius(18px);
      margin-top: 5px;
      text-align: center;
      cursor: pointer;
    }
    .person-form {
      color: @graycolor;
      .form-icon-group {
        margin-bottom: 30px;
      }
      .form-label {
        width: 83px;
        display: inline-block;
      }
      .input-text {
        width: 280px;
      }
      .imme_update {
        width: 270px;
        margin-left: -25px;
        margin-bottom: 150px;
      }
    }
    .pic-size{
      width: 70px;
      height: 65px;
      .boder_radius(50px);
    }
  }
</style>
<template>
  <div class="main-wrap person-center-wrap">
    <h4 class="line-title"><i class="iconfont icon-jieyibiaozhi1"></i> 基本资料</h4>
    <img v-if="userInfo.avatarImage" :src="userInfo.avatarImage.url" class="pic-size" :onerror="errorAuthImg" alt="">
    <img src="../assets/images/person-center-pic.png" class="pic-size" v-else alt="">
    <label for="photo" class="primary-btn choose-btn">选择</label>
    <input type="file" class="ele-hide" id="photo" @change="onfilechange">
    <hr class="line-hr">
    <form action="" class="person-form">
      <div class="form-icon-group">
        <label for="" class="form-label">昵称</label>
        <input type="text" v-model="userInfo.nickname" :maxlength="10" class="input-style input-text">
      </div>
      <div class="form-icon-group">
        <label for="" class="form-label">性别</label>
        <input type="radio" v-model="userInfo.sex" value="男">男    <input v-model="userInfo.sex" type="radio" value="女"
                                                                         style="margin-left: 90px">女
      </div>
      <div class="form-icon-group">
        <label for="" class="form-label">出生日期</label>
        <input type="text" v-model="userInfo.birthday" class="input-style input-text">
      </div>
      <div class="form-icon-group">
        <label for="" class="form-label" style="vertical-align: top">个人简介</label>
        <textarea class="input-style" :maxlength="500" v-model="userInfo.introduce" style="width: 430px;height: 150px;"></textarea>
      </div>
      <h4 class="line-title"><i class="iconfont icon-web-icon-"></i> 联系方式</h4>
      <div class="form-icon-group">
        <label for="" class="form-label">手机</label>
        <input type="text" :maxlength="11" class="input-style input-text" v-model="userInfo.mobile">
      </div>
      <div class="form-icon-group">
        <label for="" class="form-label">邮箱</label>
        <input type="text" :maxlength="20" v-model="userInfo.email" class="input-style input-text">
      </div>
      <img src="../assets/images/imme_update.png" class="imme_update" @click="immediatelyUpdate">
    </form>
  </div>
</template>
<script>
  import axios from '../plugins/axios'
  import {getUser,uploadPicture,updateUserInfo} from '../service/user';
  import {isnull, getSessionToken} from '../assets/js/common'
  export default{
    data(){
      return {
        errorAuthImg: 'this.src="' + require('../assets/images/person-center-pic.png') + '"',
        userInfo: {
          avatarImage: null,
          birthday: "",
          email: "",
          id: 0,
          introduce: "",
          mobile: "",
          nickname: "",
          sex: ""
        }
      }
    },
    beforeMount() {
          if (isnull(getSessionToken())) {//未登录了
            alert('未登录，请先登录');
            this.$router.push({name:'index'});
          }else{
            this.getUserInfo();
          }
    },
    mounted(){

    },
    methods: {
      getUserInfo(){//获取用户信息
        this.logintoken = getSessionToken();
        if(isnull(this.logintoken)){
          return
        }
        getUser(this.logintoken).then( (response)=> {
          this.userInfo = response.data.data;
        }).catch( (error) =>{
            console.log(error);
          });
      },
      immediatelyUpdate(){
        updateUserInfo(this.userInfo,getSessionToken()).then((response)=>{
          var result = response.data;
          alert(result.msg);
          if(result.code == 200){
            this.getUserInfo();
          }
        });
      },
      onfilechange(e){
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)return;
       var formdata = new FormData();
        formdata.append('file',files[0]);
        uploadPicture(formdata,getSessionToken()).then((response)=>{
            //动态的给userInfo对象添加avatarImage对象
          this.userInfo = Object.assign({}, this.userInfo, { avatarImage: response.data.data});
        });
      }
    }
  }
</script>
