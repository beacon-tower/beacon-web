<style lang="less">
  @import "../assets/less/style_variable";
  .index-container {
    .index_banner {
        width: 1000px;
        margin-bottom: 15px;
    }
    .index-content{
      .hot-span{
        font-size:20px;
        font-weight: bold;
        color:@bluecolor;
      }
      .hot-ul{
        margin-top: 5px;
        > li{
          margin-top: 10px;
        }
      }
    }
  }
</style>
<template>
  <div class="index-container">
    <img src="../assets/images/index_banner.png" class="index_banner" alt="">
    <div class="index-content clearfloat">
      <div class="index-left fl">
        <span class="hot-span">热点</span>
        <ul class="hot-ul">
          <nuxt-link :to="{name:'index'}" tag="li">科技</nuxt-link>
          <nuxt-link :to="{name:'index'}" tag="li">金融</nuxt-link>
          <nuxt-link :to="{name:'index'}" tag="li">创业</nuxt-link>
        </ul>
      </div>
      <div class="index-center fl">dsaf</div>
      <div class="index-right fl">fasfa</div>
    </div>
  </div>
</template>

<script>
  import axios from '../plugins/axios'
  import Nuxt from "../.nuxt/components/nuxt";
  import NuxtLink from "../.nuxt/components/nuxt-link";
  export default {
//  asyncData ({ params }) {//页面刷新时不会进入这个函数，页面跳转会进入
//    return axios.post('user/login.do',{
//      userName: 'ADMIN',
//      password: 'uims1234'
//    })
//      .then((res) => {
//        return { title: res.data.responseMsg }
//      })
//  },
    components: {
      NuxtLink,
      Nuxt},
    mounted(){
      console.log(process.env.NODE_ENV);
    },
    methods: {}
  }
</script>


