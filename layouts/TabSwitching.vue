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
</style>
<template>
  <div class="tab">
    <FollowSearch />
    <tabs :options ="{useUrlFragment:false}">
      <tab prefix='<i class="iconfont">&#xe6e7;</i>' name='<span>推荐关注</span>'>
        <FollowList />
    </tab>
      <tab prefix='<i class="iconfont">&#xe6e7;</i>' name='<span>我的关注</span>'>
        <Recommend />
    </tab>
    </tabs>
  </div>
</template>

<script>
  import axios from '../plugins/axios';
  import {Tabs, Tab} from 'vue-tabs-component';
  import Navigation from './user/Navigation.vue';
  import FollowSearch from './user/follow/FollowSearch.vue';
  import FollowList from './user/follow/FollowList.vue';
  import Recommend from './user/follow/Recommend.vue';
  export default {
    props: {

    },
    data: () => ({

    }),
    components: {
      Tabs,
      Tab,
      Navigation,
      FollowSearch,
      FollowList,
      Recommend
    },
    mounted(){
      console.log(process.env.NODE_ENV);
    },
    methods: {



    },
  }
</script>
