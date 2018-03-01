<style lang="less">
  @import "../assets/less/style_variable";
  .mycollect{
    .search-bar{
      text-align: right;
      input{
        width: 300px;
        height: 38px;
      }
      .icon-sousuo{
        position: relative;
        right: 37px;
        cursor: pointer;
        font-size: 20px;
      }
    }
    .article-list{
      margin-top: 20px;
      >li{
         overflow: hidden;
         border-bottom: 1px solid #e0e0e0;
         padding: 30px 0;
       }
    }
    .artic-content{
      color: #aeaeae;
      width: 742px;
      float: left;
      .artic-photo{
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid gainsboro;
        border-radius: 100%;
      }
      .name{
        color: #666;
      }
      .classify{
        bottom: 0;
      }
      .title{
        font-size: 18px;
        color: #003c7e;
        margin: 15px 0 10px;
      }
      p{
        color: #666;
        line-height: 24px;
        height: 75px;
        overflow: hidden;
        .time-ago{
          color: #aeaeae;
          margin-left: 10px;
        }
      }
    }
    .artic-user{
      >span{
        margin-left: 10px;
        position: relative;
        bottom: 5px;
       }
    }
    .artic-bottom{
      >span{
        font-size: 12px;
        margin-right: 15px;
        i{
          margin-right: 5px;
          font-size: 16px;
        }
       }
    }
    .artic-img{
      float: right;
      padding-top:30px;
      img{
        width: 150px;
        height: 120px;
      }
    }
  }
</style>
<template>
  <div class="mycollect">
    <div class="search-bar">
      <input type="text" placeholder="标题或发表人" v-model="searchVal"/>
      <i class="iconfont icon-sousuo" @click="searchArticle"></i>
    </div>
    <ul class="article-list">
      <li v-for="(item,index) in collectListDb" :key="index">
        <div class="artic-content">
          <div class="artic-user">
            <img class="artic-photo" v-if="item.user" :src="item.user" :onerror="errorAuthImg" alt="">
            <span class="name">{{item.user}}董小姐</span>
            <span class="classify"><img src="../assets/images/emotion.png" alt=""></span>

            <span class="attention">取消关注</span>
          </div>
          <h2 class="title">{{item.title}}</h2>
          <p>
            {{item.shortContent}}<span class="time-ago">{{item.formatTime}}</span>
          </p>
          <div class="artic-bottom">
            <span><i class="iconfont icon-yiyue"></i>{{item.readCount}}</span>
            <span><i class="iconfont icon-xiaoxi"></i>{{item.commentCount}}</span>
            <span><i class="iconfont icon-xing"></i>{{item.favoriteCount}}</span>
            <span><i class="iconfont icon-cha"></i>{{item.likesCount}}</span>
          </div>
        </div>

        <div class="artic-img">
          <img src="../assets/images/article_img.png" alt="">
        </div>
      </li>
      <!--<li>-->
        <!--<div class="artic-content">-->
          <!--<div class="artic-user">-->
            <!--&lt;!&ndash;<img class="artic-photo" v-if="item.avatarImg" :src="item.avatarImg.url" :onerror="errorAuthImg" alt="">&ndash;&gt;-->
            <!--<span class="name">董小姐</span>-->
            <!--<span class="classify"><img src="../assets/images/emotion.png" alt=""></span>-->

            <!--<span class="attention">取消关注</span>-->
          <!--</div>-->
          <!--<h2 class="title">2017的最后一天，2018的第一天</h2>-->
          <!--<p>-->
            <!--早起对我们都非常重要。我看过《高效能人士的七个习惯》《每天最重要的2小时》《晨间日记》等一些关于提高效能的书，和一些中外财经杂志的报道，调查领导、公众人物特点，而且他们把这个作为他们的一种工作方式，和一些中外财经杂志的报道，调查领导、公 ...-->

            <!--<span class="time-ago">5分钟前</span>-->
          <!--</p>-->
          <!--<div class="artic-bottom">-->
            <!--<span><i class="iconfont icon-yiyue"></i>25</span>-->
            <!--<span><i class="iconfont icon-xiaoxi"></i>111</span>-->
            <!--<span><i class="iconfont icon-xing"></i>111</span>-->
            <!--<span><i class="iconfont icon-cha"></i>111</span>-->
          <!--</div>-->
        <!--</div>-->

        <!--<div class="artic-img">-->
          <!--<img src="../assets/images/article_img.png" alt="">-->
        <!--</div>-->
      <!--</li>-->
    </ul>
  </div>
</template>
<script>
  import {isnull, getSessionToken, pushActClass, handleNeedLogin} from '../assets/js/common'
  import axios from '../plugins/axios';
  export default {
    data(){
      return{
        errorAuthImg: 'this.src="' + require('../assets/images/person.png') + '"',
        searchVal:'',
        collectListDb:[],
        param:{
          pageNumber:1,
          pageSize:10,
          keyword:""
        }
      }
    },
    mounted(){
      this.getCollectList();
    },
    methods:{
      getCollectList(){
        return axios({
          method:"GET",
          url:'my/favorite',
          params:this.param,
          headers:  {'token': getSessionToken()}
        }).then((res) => {
          this.collectListDb = res.data.data.resultList;
        })
      },
      searchArticle(){
        this.param.keyword = this.searchVal;
        this.getCollectList();
        console.log(this.searchVal)
      }
    }
  }
</script>
