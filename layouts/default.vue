<style lang="less">
  @import "../assets/less/style_variable";

  .main-wrap {
    .beacon-header-wrap {
      background-color: #fff;
      height: 50px;
    }
    .header-content {
      width: 1200px;
      margin-left: auto;
      margin-right: auto;
      .index-logo {
        margin-top: 9px;
      }
      .new-article {
        display: inline-block;
        width: 88px;
        height: 34px;
        .bgImg("write_article.png");
        background-size: 100% 100%;
      }
      .reg-btn {
        .boder_radius(25px);
        padding: 6px 29px;
        margin-left: 51px;
        margin-right: 20px;
      }
      .index-link {
        color: @bluecolor;
        font-size: 16px;
        .iconfont {
          font-size: 18px;
          position: relative;
          top: 2px;
        }
      }
      .login-link {
        color: @graycolor;
        margin-left: 43px;
        .iconfont {
          font-size: 16px;
        }
      }
      .right-p {
        > a {
          display: inline-block;
          margin-top: -4px;
        }
        .new-article {
          position: relative;
          top: 11px;
        }
      }
      a{
        text-decoration: none;
      }
      .login-info {
        margin: 0 35px;
        padding-bottom: 20px;
        position: relative;
        .button-wrap{
          display: none;
          position: absolute;
          z-index: 9999;
          background-color: #fff;
          padding-top: 10px;
          border: 1px solid #ddd;
          border-bottom-color: #ccc;
          text-align: left;
          border-radius: 4px;
          white-space: nowrap;
          right: 0;
          top: 28px;
          .link-a{
            padding-bottom: 10px;
            padding-left: 10px;
            width: 100px;
            display: block;
            color: #333;
            &:hover{
              color: @primarycolor;
            }
          }
        }
        &:hover{
          .button-wrap{
            display: block;
          }
        }
        a {
          color: @graycolor;
        }
        .icon-sanjiaodown {
          color: @graycolor;
        }
      }
      .pic-img {
        width: 33px;
        position: relative;
        top: 10px;
      }

    }
    .main-content {
      width: 1000px;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
<template>
  <div class="main-wrap">
    <div class="beacon-header-wrap">
      <div class="header-content clearfloat">
        <img src="../assets/images/index_logo.png" class="index-logo" alt="">
        <p class="fr right-p">
          <nuxt-link :to="{name:'index'}" class="index-link"><i class="iconfont icon-diqiu"></i>&nbsp;首页</nuxt-link>
          <span v-if="logintoken && logintoken.length>0" class="login-info">
            <img class="pic-img" :src="userPicture" alt="">
            <i class="iconfont icon-sanjiaodown"></i>
            <ul class="button-wrap">
                <li><nuxt-link :to="{name:'personCenter'}" class="link-a">个人中心</nuxt-link></li>
                <li><a href="javascript:;" class="link-a" @click.prevent="logout">退出</a></li>
            </ul>
          </span>
          <span v-else>
            <nuxt-link :to="{name:'login'}" class="login-link"><i class="iconfont icon-suo"></i>&nbsp;登录</nuxt-link>
            <nuxt-link :to="{name:'register1'}" class="primary-btn reg-btn">注册</nuxt-link>
         </span>
          <nuxt-link :to="{name:'write'}" class="new-article"></nuxt-link>
        </p>
      </div>
    </div>
    <div class="main-content">
      <nuxt/>
    </div>
  </div>
</template>
<script>
  import {isnull,getSessionToken} from '../assets/js/common'
  import axios from '../plugins/axios'
  import {getUser} from '../service/user';

  export default{
    data(){
      return {
        logintoken:null,
        userPicture: require('../assets/images/person.png'),//头像
      }
    },
    mounted(){
      this.getUserPicture();
    },
    methods: {
      getUserPicture(){//获取用户信息-头像
        this.logintoken = getSessionToken();
        if(isnull(this.logintoken)){
            return
        }
        getUser(this.logintoken).then( (response)=>{
            let imgObj = response.data.data.avatarImage;
            if(!isnull(imgObj)){
              this.userPicture = imgObj.url;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
      async logout(){//退出
        try {
          await this.$store.dispatch('logout',{token:this.logintoken});
          var result = this.$store.state.result;
          if(result.code == 200){
            //清除所有键值sessionStorage
            sessionStorage.clear();
            this.logintoken = null;
            this.$router.push({name:'index'});
          }else{
            alert(result.msg);
          }
        } catch (e) {
          alert(e.message);
        }
      }
    }
  }
</script>
