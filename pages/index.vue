<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        beacon_web
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <router-link :to="{name:'login'}">去登陆页面</router-link>
      <br>
      <br>
      <button @click="login">登录接口测试</button>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from '../plugins/axios'
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
    Logo
  },
  mounted(){
    console.log(process.env.NODE_ENV);
  } ,
  methods:{
    login(){
      axios.post('user/login.do',{
        userName: 'ADMIN',
        password: 'uims1234'
      })
        .then(function(res){
          console.log(res);
        })
        .catch(function(err){
          console.log(err);
        });
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
