<style lang="less">
  @import "../assets/less/style_variable";

  .index-container {
    .index_banner {
      width: 1000px;
      margin-bottom: 15px;
    }
    .index-content {
      margin-bottom: 100px;
      .hot-span {
        font-size: 21px;
        font-weight: bold;
        color: @bluecolor;
      }
      .hot-ul {
        margin-top: 5px;
        > li {
          cursor: pointer;
          margin-top: 10px;
        }
        .more-link {
          color: @bluecolor;
          font-weight: bold;
        }
      }
      .index-center {
        margin: 0 25px;
        width: 670px;
        min-height: 10px;
        .content-wrap {
          border-bottom: 1px solid @linecolor;
          padding-bottom: 30px;
          margin-bottom: 20px;
          .p-wrap {
            color: @graycolor;
            img {
              vertical-align: middle;
            }
          }
        }
        .content-left {
          /*width: 546px;*/
          color: @color666;
          .colorblue {
            font-weight: bold;
            font-size: 16px;
            margin-top: 10px;
            margin-bottom: 10px;
          }
          .line-hei-span {
            line-height: 22px;
          }
          .fire_coin {
            width: 16px;
            position: relative;
            top: 3px;
          }
          .icon-yiyue {
            font-size: 23px;
            position: relative;
            top: 4px;
          }
          .icon-p {
            font-size: 12px;
            margin-top: 2px;
            > span {
              margin-right: 10px;
            }
          }
        }
        .content-right {
          width: 106px;
          margin-top: 20px;
        }
      }
      .index-right {
        .right-hot {
          display: block;
          width: 238px;
          height: 75px;
          .boder_radius(6px);
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 12px;
        }
        .hot-txt {
          left: 50px;
          position: relative;
          top: 8px;
        }
        .today-hot {
          background-color: #FEAB7D;
        }
        .today-img {
          width: 105px;
          top: 25px;
          position: relative;
          left: 5px;
        }
        .seven-hot {
          background-color: #FE958A;
        }
        .seven-img {
          width: 85px;
          top: 1px;
          position: relative;
          left: 5px;
        }
        .seven-txt {
          left: 75px;
          position: relative;
          top: -17px;
        }
        .history-hot {
          background-color: #7DCDFE;
        }
        .history-img {
          width: 96px;
          top: 12px;
          position: relative;
          left: 5px;
        }
        .history-txt {
          left: 57px;
          position: relative;
          top: -6px;
        }
        .author-p {
          color: @graycolor;
          .icon-shuaxin {
            font-size: 12px;
          }
        }
        .author-ul {
          font-size: 12px;
          color: @graycolor;
          margin-top: 10px;
          .author-li-left {
            img {
              display: inline-block;
              width: 40px;
              height: 42px;
              vertical-align: top;
            }
            .person-name {
              font-size: 14px;
              color: #666;
              font-weight: bold;
              position: relative;
              top: 6px;
              left: 11px;
            }
            .txt-p {
              position: relative;
              top: -18px;
              left: 50px;
            }
          }
          .attention {
            position: relative;
            top: 14px;
            left: 0;
            color: #467EC3;
            cursor: pointer;
          }
        }
      }
    }
    .no-data {
      color: @graycolor;
      text-align: center;
      padding: 10px;
    }
    .fire-act-color {
      color: #0c797d;
    }
    a {
      text-decoration: none;
    }
    .border-span{
      border: 1px solid @primarycolor;
      .boder_radius(10px);
      font-size: 12px;
      color:@primarycolor;
      padding: 1px 7px;
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
          <li :class="[hotAct[index] ? 'act-color':'']" v-for="(item,index) in hotData" :key="index"
              @click="getArticleListByHot(item.id,index)">{{item.name}}
          </li>
          <nuxt-link :to="{name:'hotmore'}" tag="li" class="more-link">更多</nuxt-link>
        </ul>
      </div>
      <div class="index-center fl">
        <div class="content-wrap clearfloat" v-for="(item,index) in defaultArticleData" :key="index">
          <p class="p-wrap">
            <img v-if="item.url" :src="item.url" :onerror="errorAuthImg" alt="">
            <img src="../assets/images/person.png" v-else alt="">
            <span class="color666">&nbsp;&nbsp;{{item.nickname}}&nbsp;&nbsp;</span>
            <span class="border-span">{{item.topicName}}</span>
            &nbsp;&nbsp; 被关注：{{item.likesCount}}
          </p>
          <div class="fl content-left">
            <p class="colorblue" v-html="item.title"></p>
            <div class="line-hei-span" v-html="item.content"></div>
            <span class="colorgray">{{item.createTime}}</span>
            <p class="colorgray icon-p">
              <span><img class="fire_coin" src="../assets/images/fire_coin.png" alt=""> {{item.coinCount}}</span>
              <span><i class="iconfont icon-yiyue"></i> {{item.readCount}}</span>
              <span><i class="iconfont icon-xiaoxi"></i> {{item.commentCount}}</span>
              <span><i class="iconfont icon-xing"></i> {{item.favoriteCount}}</span>
              <span><i class="iconfont icon-cha"></i> {{item.followCount}}</span>
            </p>
          </div>
          <!--<div class="fr content-right">-->
          <!--<img src="../assets/images/article_img.png" alt="">-->
          <!--</div>-->
        </div>
        <p class="text-center"><img src="../assets/images/loading.gif" v-show="isShowLoading" alt=""></p>
        <p class="no-data" v-if="noMoreArticleData!=''">{{noMoreArticleData}}</p>
      </div>
      <div class="index-right fl">
        <a href="javascript:;" @click.prevent="todayHot" class="today-hot right-hot">
          <img src="../assets/images/today.png" class="today-img" alt="">
          <span class="hot-txt" :class="[bestFireAct[0] ? 'fire-act-color' :'']">今日最火</span>
        </a>
        <a href="javascript:;" @click.prevent="sevenHot" class="seven-hot right-hot">
          <img src="../assets/images/hot.png" class="seven-img" alt="">
          <span class="seven-txt" :class="[bestFireAct[1] ? 'fire-act-color' :'']">7日最火</span>
        </a>
        <a href="javascript:;" @click.prevent="historyHot" class="history-hot right-hot">
          <img src="../assets/images/time.png" class="history-img" alt="">
          <span class="history-txt" :class="[bestFireAct[2] ? 'fire-act-color' :'']">历史最火</span>
        </a>
        <p class="author-p"><span>推荐作者</span><span style="margin-left: 123px;cursor: pointer" @click="changeAuthor"><i
          class="iconfont icon-shuaxin"></i>&nbsp;换一批</span>
        </p>

        <ul class="author-ul">
          <li v-if="authData.length<=0" class="text-center">{{authNoData}}</li>
          <li class="clearfloat" v-else v-for="(item,index) in authData" :key="index">
            <div class="author-li-left fl">
              <img v-if="item.avatarImg" :src="item.avatarImg.url" :onerror="errorAuthImg" alt="">
              <img src="../assets/images/person.png" v-else alt="">
              <span class="person-name">{{item.nickname}}</span>
              <p class="txt-p">{{item.wordsCount}}万字 · {{item.followCount}}人关注</p>
            </div>
            <p class="fr">
              <span class="attention" @click="attentionFun(item.id)">+关注</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {isnull, getSessionToken, pushActClass, handleNeedLogin} from '../assets/js/common'
  import Pagination from '../components/Pagination';
  import {
    getTopicList, getDefaultArticleList, getArticleListById,
    getTodayHot, getSevenHot, getHistoryHot, getAuthList, addAuthAttention
  } from '../service/index'

  export default {
    data(){
      return {
        errorAuthImg: 'this.src="' + require('../assets/images/person.png') + '"',
        authData: [],//作者列表
        authNoData:'暂无作者推荐',
        authPage: 1,//作者数据当前页
        moreSign: 'default',//文章列表加载更多的标记
        isShowLoading: true,
        hotParams: {//热点（话题）参数
          limit: 10
        },
        hotData: [],//热点（话题）列表数据
        hotAct: [],//热点（话题）选中
        bestFireAct: [false, false, false],//今日，7日，历史最火选中
        topicDetailParams: {//话题详情文章列表参数
          topicId: null,
          pageNumber: 1,
          pageSize: 10
        },
        todayHotArticleParams: {//今日最火文章参数对象
          pageNumber: 1,
          pageSize: 10
        },
        sevenHotArticleParams: {//7日最火文章参数对象
          pageNumber: 1,
          pageSize: 10
        },
        historyHotArticleParams: {//历史最火文章参数对象
          pageNumber: 1,
          pageSize: 10
        },
        defaultArticleParams: {//默认文章参数对象
          pageNumber: 1,
          pageSize: 10
        },
        defaultArticleData: [],//默认文章列表数据
        noMoreArticleData: '',//无更多文章数据
      }
    },
    components: {},
    beforeMount(){
      this.hotCallback();
      this.defaultArticleCallback();
      this.authListCallback();
    },
    mounted(){
      var self = this;
      $(window).scroll(function () {
        let scrollTop = $(this).scrollTop()
        let scrollHeight = $(document).height()
        let windowHeight = $(this).height()
        if (scrollTop + windowHeight === scrollHeight) {//滚动加载更多
          if (self.noMoreArticleData.indexOf('暂无') != -1) {//没有更多数据了
            return
          }
          if (self.isShowLoading) {//已经发送了，等待处理完了之后再发送（防止重复请求）
            return
          }
          self.isShowLoading = true;
          switch (self.moreSign) {
            case 'topic'://热点
              self.topicDetailParams.pageNumber++;
              self.articleListByHotCallback();
              break;
            case 'todyhot'://今日最火
              self.todayHotArticleParams.pageNumber++;
              self.todayHotCallback();
              break;
            case 'sevenhot'://7日最火
              self.sevenHotArticleParams.pageNumber++;
              self.sevenHotCallback();
              break;
            case 'historyhot'://历史最火
              self.historyHotArticleParams.pageNumber++;
              self.historyHotCallback();
              break;
            default://默认
              self.defaultArticleParams.pageNumber++;
              self.defaultArticleCallback();
          }
        }
      })
    },
    methods: {
      handleAritcleData(data){//统一处理文章数据
        if (isnull(data) || data.length <= 0) {
          this.noMoreArticleData = '暂无更多文章数据了';
        } else {
          this.noMoreArticleData = '';
          data.forEach((item, index) => {
            this.defaultArticleData.push(item);
          });
        }
        //第一页都没有数据的提示文字
        if (this.defaultArticleData.length <= 0) {
          this.noMoreArticleData = '暂无文章数据';
        }
        this.isShowLoading = false;
      },
      hotCallback(){//热点（话题）列表数据处理
        getTopicList(this.hotParams).then((response) => {
          this.hotData = response.data.data;
        })
      },
      articleListByHotCallback(){//通过热点（话题）id查询文章列表数据处理
        getArticleListById(this.topicDetailParams).then((response) => {
          this.handleAritcleData(response.data.data);
        })
      },
      getArticleListByHot(id, index){//通过热点（话题）id查询文章列表
        this.moreSign = 'topic';
        this.isShowLoading = true;
        this.bestFireAct = [false, false, false];
        this.hotAct = pushActClass(this.hotData, index);
        this.defaultArticleData = [];
        this.topicDetailParams.topicId = id;
        this.topicDetailParams.pageNumber = 1;
        this.articleListByHotCallback();
      },
      defaultArticleCallback(){//默认文章列表数据处理
        getDefaultArticleList(this.defaultArticleParams).then((response) => {
          this.handleAritcleData(response.data.data);
        })
      },
      authListCallback(sign){//获取作者列表数据处理
        getAuthList({
          pageNumber: this.authPage,
          pageSize: 10
        }, getSessionToken()).then((response) => {
          this.authData = response.data.data;
          if(sign=='change'){//换一换--》执行
            if (this.authData.length <= 0) {
              this.authNoData = '暂无更多作者推荐了';
            }
          }
        })
      },
      changeAuthor(){ // 换一换，作者数据列表
        if (this.authData.length <= 0) {
          this.authPage = 0;//回到第一页
        }
        this.authPage++;
        this.authListCallback('change');
      },
      todayHotCallback(){//今日最火数据处理
        getTodayHot(this.todayHotArticleParams).then((response) => {
          this.handleAritcleData(response.data.data);
        })
      },
      todayHot(){//今日最火
        this.moreSign = 'todyhot';
        this.isShowLoading = true;
        this.hotAct = [];
        this.bestFireAct = pushActClass(this.bestFireAct, 0);
        this.defaultArticleData = [];
        this.todayHotArticleParams.pageNumber = 1;
        this.todayHotCallback();
      },
      sevenHotCallback(){//今日最火数据处理
        getSevenHot(this.sevenHotArticleParams).then((response) => {
          this.handleAritcleData(response.data.data);
        })
      },
      sevenHot(){
        this.moreSign = 'sevenhot';
        this.isShowLoading = true;
        this.hotAct = [];
        this.bestFireAct = pushActClass(this.bestFireAct, 1);
        this.defaultArticleData = [];
        this.sevenHotArticleParams.pageNumber = 1;
        this.sevenHotCallback();
      },
      historyHotCallback(){//历史最火数据处理
        getHistoryHot(this.historyHotArticleParams).then((response) => {
          this.handleAritcleData(response.data.data);
        })
      },
      historyHot(){
        this.moreSign = 'historyhot';
        this.isShowLoading = true;
        this.hotAct = [];
        this.bestFireAct = pushActClass(this.bestFireAct, 2);
        this.defaultArticleData = [];
        this.historyHotArticleParams.pageNumber = 1;
        this.historyHotCallback();
      },
      attentionFun(id){
        addAuthAttention(id, getSessionToken()).then((response) => {
          handleNeedLogin(response, () => {
            this.authListCallback();
          });
        })
      }
    }
  }
</script>


