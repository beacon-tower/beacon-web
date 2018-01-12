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
        .content-wrap{
          border-bottom: 1px solid @linecolor;
          padding-bottom: 30px;
          margin-bottom: 20px;
          .p-wrap{
            color: @graycolor;
            img{
              vertical-align: middle;
            }
          }
        }
        .content-left{
          width: 546px;
          color: @color666;
          .colorblue{
            font-weight: bold;
            font-size: 16px;
            margin-top: 10px;
            margin-bottom: 10px;
          }
          .line-hei-span{
            line-height: 22px;
          }
          .fire_coin{
            width: 16px;
          }
          .icon-yiyue{
            font-size: 20px;
          }
          .icon-p{
            font-size: 12px;
            margin-top: 2px;
            > span{
              margin-right: 10px;
            }
          }
        }
        .content-right{
          width: 106px;
          margin-top: 20px;
        }
      }
      .index-right {
        .right-hot {
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
              width: 40px;
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
  }
</style>
<template>
  <div class="index-container">
    <img src="../assets/images/index_banner.png" class="index_banner" alt="">
    <div class="index-content clearfloat">
      <div class="index-left fl">
        <span class="hot-span">热点</span>
        <ul class="hot-ul">
          <nuxt-link :to="{name:'index'}" tag="li">科技</nuxt-link>
          <nuxt-link :to="{name:'index'}" tag="li">金融</nuxt-link>
          <nuxt-link :to="{name:'index'}" tag="li">创业</nuxt-link>
          <nuxt-link :to="{name:'index'}" tag="li">体育</nuxt-link>
          <nuxt-link :to="{name:'index'}" tag="li">游戏</nuxt-link>
          <nuxt-link :to="{name:'index'}" tag="li">娱乐</nuxt-link>
          <nuxt-link :to="{name:'index'}" tag="li">情感</nuxt-link>
          <nuxt-link :to="{name:'index'}" tag="li">社会</nuxt-link>
          <nuxt-link :to="{name:'index'}" tag="li">上班</nuxt-link>
          <nuxt-link :to="{name:'index'}" tag="li">校园</nuxt-link>
          <nuxt-link :to="{name:'index'}" tag="li">读书</nuxt-link>
          <nuxt-link :to="{name:'index'}" tag="li">小说</nuxt-link>
          <nuxt-link :to="{name:'index'}" tag="li">旅行</nuxt-link>
          <nuxt-link :to="{name:'index'}" tag="li">历史</nuxt-link>
          <nuxt-link :to="{name:'index'}" tag="li">想法</nuxt-link>
          <nuxt-link :to="{name:'index'}" tag="li" class="more-link">更多</nuxt-link>
        </ul>
      </div>
      <div class="index-center fl">
         <div class="content-wrap clearfloat">
           <p class="p-wrap">
             <img src="../assets/images/person.png" alt="">
             <span class="color666">&nbsp;&nbsp;董小姐&nbsp;&nbsp;</span>
             <img src="../assets/images/emotion.png" alt="">
             &nbsp;&nbsp; 被关注：1000
           </p>
           <div class="fl content-left">
             <p class="colorblue">2017的最后一天，2018年的第一天</p>
            <span class="line-hei-span"> 早起对我们都非常重要。我看过《高效能人士的七个习惯》《每天最重要的2小时》
             《晨间日记》等一些关于提高效能的书，和一些中外财经杂志的报道，调查领导、公众人物特点，而且
             他们这个作为他们的一个工作方式...</span>
             <span class="colorgray">5分钟前</span>
             <p class="colorgray icon-p">
               <span><img class="fire_coin" src="../assets/images/fire_coin.png" alt=""> 25</span>
               <span><i class="iconfont icon-yiyue"></i> 25</span>
               <span><i class="iconfont icon-xiaoxi"></i> 111</span>
               <span><i class="iconfont icon-xing"></i> 111</span>
               <span><i class="iconfont icon-cha"></i> 111</span>
             </p>
           </div>
           <div class="fr content-right">
             <img src="../assets/images/article_img.png" alt="">
           </div>
         </div>
        <div class="content-wrap clearfloat">
          <p class="p-wrap">
            <img src="../assets/images/person.png" alt="">
            <span class="color666">&nbsp;&nbsp;董小姐&nbsp;&nbsp;</span>
            <img src="../assets/images/emotion.png" alt="">
            &nbsp;&nbsp; 被关注：1000
          </p>
          <div class="fl content-left">
            <p class="colorblue">2017的最后一天，2018年的第一天</p>
            <span class="line-hei-span"> 早起对我们都非常重要。我看过《高效能人士的七个习惯》《每天最重要的2小时》
             《晨间日记》等一些关于提高效能的书，和一些中外财经杂志的报道，调查领导、公众人物特点，而且
             他们这个作为他们的一个工作方式...</span>
            <span class="colorgray">5分钟前</span>
            <p class="colorgray icon-p">
              <span><img class="fire_coin" src="../assets/images/fire_coin.png" alt=""> 25</span>
              <span><i class="iconfont icon-yiyue"></i> 25</span>
              <span><i class="iconfont icon-xiaoxi"></i> 111</span>
              <span><i class="iconfont icon-xing"></i> 111</span>
              <span><i class="iconfont icon-cha"></i> 111</span>
            </p>
          </div>
          <div class="fr content-right">
            <img src="../assets/images/article_img.png" alt="">
          </div>
        </div>
        <div class="content-wrap clearfloat">
          <p class="p-wrap">
            <img src="../assets/images/person.png" alt="">
            <span class="color666">&nbsp;&nbsp;董小姐&nbsp;&nbsp;</span>
            <img src="../assets/images/emotion.png" alt="">
            &nbsp;&nbsp; 被关注：1000
          </p>
          <div class="fl content-left">
            <p class="colorblue">2017的最后一天，2018年的第一天</p>
            <span class="line-hei-span"> 早起对我们都非常重要。我看过《高效能人士的七个习惯》《每天最重要的2小时》
             《晨间日记》等一些关于提高效能的书，和一些中外财经杂志的报道，调查领导、公众人物特点，而且
             他们这个作为他们的一个工作方式...</span>
            <span class="colorgray">5分钟前</span>
            <p class="colorgray icon-p">
              <span><img class="fire_coin" src="../assets/images/fire_coin.png" alt=""> 25</span>
              <span><i class="iconfont icon-yiyue"></i> 25</span>
              <span><i class="iconfont icon-xiaoxi"></i> 111</span>
              <span><i class="iconfont icon-xing"></i> 111</span>
              <span><i class="iconfont icon-cha"></i> 111</span>
            </p>
          </div>
          <div class="fr content-right">
            <img src="../assets/images/article_img.png" alt="">
          </div>
        </div>
      </div>
      <div class="index-right fl">
        <nuxt-link :to="{name:'index'}" tag="div" class="today-hot right-hot">
          <img src="../assets/images/today.png" class="today-img" alt="">
          <span class="hot-txt">今日最火</span>
        </nuxt-link>
        <nuxt-link :to="{name:'index'}" tag="div" class="seven-hot right-hot">
          <img src="../assets/images/hot.png" class="seven-img" alt="">
          <span class="seven-txt">7日最火</span>
        </nuxt-link>
        <nuxt-link :to="{name:'index'}" tag="div" class="history-hot right-hot">
          <img src="../assets/images/time.png" class="history-img" alt="">
          <span class="history-txt">历史最火</span>
        </nuxt-link>
        <p class="author-p"><span>推荐作者</span><span style="margin-left: 123px;"><i class="iconfont icon-shuaxin"></i>&nbsp;换一批</span>
        </p>
        <ul class="author-ul">
          <li class="clearfloat">
            <div class="author-li-left fl">
              <img src="../assets/images/person.png" alt="">
              <span class="person-name">董小姐</span>
              <p class="txt-p">100万字 · 20万人关注</p>
            </div>
            <p class="fr">
              <span class="attention">+关注</span>
            </p>
          </li>
          <li class="clearfloat">
            <div class="author-li-left fl">
              <img src="../assets/images/person.png" alt="">
              <span class="person-name">董小姐</span>
              <p class="txt-p">100万字 · 20万人关注</p>
            </div>
            <p class="fr">
              <span class="attention">+关注</span>
            </p>
          </li>
          <li class="clearfloat">
            <div class="author-li-left fl">
              <img src="../assets/images/person.png" alt="">
              <span class="person-name">董小姐</span>
              <p class="txt-p">100万字 · 20万人关注</p>
            </div>
            <p class="fr">
              <span class="attention">+关注</span>
            </p>
          </li>
          <li class="clearfloat">
            <div class="author-li-left fl">
              <img src="../assets/images/person.png" alt="">
              <span class="person-name">董小姐</span>
              <p class="txt-p">100万字 · 20万人关注</p>
            </div>
            <p class="fr">
              <span class="attention">+关注</span>
            </p>
          </li>
          <li class="clearfloat">
            <div class="author-li-left fl">
              <img src="../assets/images/person.png" alt="">
              <span class="person-name">董小姐</span>
              <p class="txt-p">100万字 · 20万人关注</p>
            </div>
            <p class="fr">
              <span class="attention">+关注</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '../plugins/axios'
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
//      NuxtLink,
//      Nuxt
    },
    mounted(){
      console.log(process.env.NODE_ENV);
    },
    methods: {}
  }
</script>


