<style lang="less">
  .navigation {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    margin: 120px 0 0;
    padding: 0 0 30px;
    width: 45px;
    overflow: auto;
    .navigation-hot {
      li {
        line-height: 35px;
        font-size: 16px;
        font-weight: 900;
        text-align: center;
        color: #666666;
        cursor: pointer;
        &.nuxt-link-active , &:hover {
          color: #003C7A;
        }
      }
    }
  }
</style>
<template>
  <div class="navigation">
    <ul class="navigation-hot">
      <nuxt-link tag="li" v-for="item in ment" v-bind:to="{path:'/user/follow/' + item.id}" >{{item.title}}</nuxt-link>
      <nuxt-link to="{name:'index'}" tag="li" class="more-link">更多</nuxt-link>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
          ment: [
            {
              id: '15222',
              title: '科技'
            },
            {
              id: '256622',
              title: '金融'
            },
            {
              id: '15454',
              title: '创业'
            },
            {
              id: '25666',
              title: '体育'
            },
            {
              id: '4848',
              title: '游戏'
            },
            {
              id: '2115',
              title: '娱乐'
            },
            {
              id: '45435',
              title: '情感'
            },
            {
              id: '6787',
              title: '社会'
            },
            {
              id: '32543',
              title: '上班'
            },
            {
              id: '5657',
              title: '校园'
            },
          ]
      }
    },
    components: {

    },
    mounted(){
      console.log(process.env.NODE_ENV);
    },
    methods: {

    },
  }
</script>
