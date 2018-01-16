<style lang="less">


</style>
<template>
  <div class="user-content">
    <Navigation />
    <TabSwitching />
  </div>
</template>

<script>
  import axios from 'axios';
  import Navigation from '../../../layouts/user/Navigation.vue'
  import TabSwitching from '../../../layouts/TabSwitching.vue'
  //  import Nuxt from "../.nuxt/components/nuxt";
  //  import NuxtLink from "../.nuxt/components/nuxt-link";
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
      Navigation,
      TabSwitching,
    },
    mounted(){
      console.log(process.env.NODE_ENV);
    },
    methods: {}
  }
</script>
