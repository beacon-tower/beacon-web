<style lang="less">
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
</style>
<template>
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
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {}
    },
    components: {},
    mounted(){
      console.log(process.env.NODE_ENV);
    },
    methods: {}
  }
</script>
