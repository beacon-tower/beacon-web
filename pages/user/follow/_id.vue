<style lang="less">
  .tab {
    position: relative;
  }
  ul.tabs-component-tabs {
    padding-right: 300px;
    border-bottom: 2px solid #E0E0E0;
    li.tabs-component-tab {
      cursor: pointer;
      display: inline-block;
      *display:inline;
      zoom:1;
      margin:0;
      padding:0;
      height: 45px;
      line-height: 45px;
      width: 162px;
      z-index: 10;
      margin-bottom: -2px;
      a {
        display: block;
        font-size: 16px;
        font-weight: 900;
        text-align: center;
        color: #AEAEAE;
      }
      i {
        margin-right: 10px;
      }
      sapn {
      }
      &.is-active {
        a {
          color: #003C7A ;
        }
        border-bottom: 2px solid #003C7A;
      }
      &:hover {
        a {
          color: #003C7A ;
        }
      }
    }
  }
  .tabs-component-panels {
    position: relative;
    margin-left: 100px;
    .is_active {
      display: block;
    }
  }


  // 搜索
  .followSearch {
    position: absolute;
    top: 0px;
    right: 0px;
    .search {
      .search-input {
        outline:none;
        padding: 0 40px 0 20px;
        width: 160px;
        height: 38px;
        font-size: 14px;
        border: 1px solid #eee;
        border-radius: 40px;
        background: #eee;
        transition: width .5s;
        -moz-transition: width .5s;
        -webkit-transition: width .5s;
        -o-transition: width .5s;
        transition-delay: .1s;
        -moz-transition-delay: .1s;
        -webkit-transition-delay: .1s;
        -o-transition-delay: .1s;
        &:focus {
          transition-delay: 0s;
          -moz-transition-delay: 0s;
          -webkit-transition-delay: 0s;
          -o-transition-delay: 0s;
          width: 240px;
          outline: none;
        }
      }
      .search-btn {
        display: block;
        position: absolute;
        top: 4px;
        right: 5px;
        width: 30px;
        height: 30px!important;
        line-height: normal!important;
        padding: 0!important;
        color: #969696!important;
        text-align: center;
        vertical-align:text-top;
        i {
          text-align: center;
        }
      }
    }
  }

  // 导航
  .navigation {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    margin: 120px 0 0;
    padding: 0 0 30px;
    width: 45px;
    overflow: auto;
    z-index: 9999;
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
  <div class="user-content">


    <!--导航-->
    <div class="navigation">
      <ul class="navigation-hot">
        <nuxt-link tag="li" v-for="item in ment" v-bind:to="{path:'/user/follow/' + item.id}" >{{item.title}}</nuxt-link>
        <nuxt-link to="/user/follow" tag="li" class="more-link">更多</nuxt-link>
      </ul>
    </div>
    <!--导航-->

    <div class="tab">

      <!--搜索-->
      <div class="followSearch">
        <div class="search">
          <form target="_blank" action="/search" accept-charset="UTF-8" method="get">
            <input name="utf8" type="hidden" value="✓">
            <input type="text" name="q" id="q" value="" autocomplete="off" placeholder="搜索" class="search-input" data-mounted="1" />
            <a class="search-btn" href="javascript:void(null)">
              <i class="iconfont">&#xe6e7;</i>
            </a>
          </form>
        </div>
      </div>
      <!--搜索-->


      <tabs :options ="{useUrlFragment:false}">
        <tab prefix='<i class="iconfont">&#xe6e7;</i>' name='<span>推荐关注</span>'>
          <follow-list :paing="tab1" />
        </tab>
        <tab prefix='<i class="iconfont">&#xe6e7;</i>' name='<span>我的关注</span>'>
          <follow-list :paing="tab2" />
        </tab>
      </tabs>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {Tabs, Tab} from 'vue-tabs-component';
  import FollowList from '~/components/FollowList.vue';
  export default {
    data () {
      return {
        ment: [],
        tab1: 1,
        tab2: 2
      }
    },
    components: {
      Tabs,
      Tab,
      FollowList,
    },
    mounted(){
      axios.post('/nav').then(res=>{
        console.log(res.data.data);
        // get body data
        this.ment = res.data.data;
      }).catch(error=>console.log(error));
      console.log(process.env.NODE_ENV);
    },
    methods: {}
  }
</script>
