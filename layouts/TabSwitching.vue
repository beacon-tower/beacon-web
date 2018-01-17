<style lang="less">
  .tab {
    position: relative;
  }
  ul.tabSwitching {
    margin-right: 300px;
    li {
      cursor: pointer;
      display: inline-block;
      *display:inline;
      zoom:1;
      margin:0;
      padding:0;
      height: 45px;
      line-height: 45px;
      font-size: 16px;
      font-weight: 900;
      width: 162px;
      text-align: center;
      color: #AEAEAE;
      border-bottom: 2px solid #AEAEAE;
      z-index: 10;
      margin-bottom: -2px;
      i {
        margin-right: 10px;
      }
      sapn {
      }
      &.active,&:hover {
        color: #003C7A ;
        border-bottom: 2px solid #003C7A;
      }
    }
  }
  .tabSwitching-box {
    position: relative;
    margin-left: 100px;
  }
</style>
<template>
  <div class="tab">
    <ul class="tabSwitching">
      <li class="tab active">
        <i class="iconfont">&#xe6e7;</i>
        <span>推荐关注</span>
      </li>
      <li class="tab" @click="toggleTab('Recommend')">
        <i class="iconfont">&#xe6e7;</i>
        <span>我的关注</span>
      </li>
    </ul>
    <FollowSearch />
    <div  class="tabSwitching-box">
      <FollowList />
    </div>
  </div>
</template>

<script>
  import axios from '../plugins/axios';
  import Navigation from './user/Navigation.vue';
  import FollowSearch from './user/follow/FollowSearch.vue';
  import FollowList from './user/follow/FollowList.vue';
  import Recommend from './user/follow/Recommend.vue';
  export default {
    data() {
      return {
        tabs: ["推荐关注", "我的关注"],
        currentTab: 'FollowList' // currentTab 用于标识当前触发的子组件
      }
    },
    components: {
      Navigation,
      FollowSearch,
      FollowList,
      Recommend
    },
    mounted(){
      console.log(process.env.NODE_ENV);
    },
    methods: {
      toggleTab: function(tab) {
        this.currentTab = tab; // tab 为当前触发标签页的组件名
      }
    },
  }
</script>
