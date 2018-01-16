<style lang="less">


</style>
<template>
  <div class="user-content">
    <nuxt-child/>
  </div>
</template>

<script>
  import axios from 'axios';
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
    },
    mounted(){
      console.log(process.env.NODE_ENV);
    },
    methods: {}
  }
</script>
