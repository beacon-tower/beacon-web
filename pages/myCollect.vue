<style lang="less">
  @import "../assets/less/style_variable";
  .mycollect{
    .search-bar{
      text-align: right;
      input{
        width: 300px;
        height: 38px;
      }
    }
    .article-list{
      margin-top: 50px;
    }
    .artic-content{
      color: #aeaeae;
      width: 742px;
      float: left;
      outline: 1px solid red;
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
      .title{
        font-size: 18px;
        color: #003c7e;
        margin: 15px 0 10px;
      }
      p{
        line-height: 24px;
        height: 75px;
        overflow: hidden;
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
        margin-right: 15px;
        i{
          margin-right: 5px;
        }
       }
    }
    .artic-img{
      float: right;
      outline: 1px solid green;
      width: 150px;
      height: 120px;
    }
  }
</style>
<template>
  <div class="mycollect">
    <div class="search-bar">
      <input type="text" placeholder="标题或发表人"/>
    </div>
    <ul class="article-list">
      <li>
        <div class="artic-content">
          <div class="artic-user">
            <img src="" alt="" class="artic-photo">
            <span class="name">name</span>
            <span>情感</span>
            <span class="attention">取消关注</span>
          </div>
          <h2 class="title">2017的最后一天，2018的第一天</h2>
          <p>
            早起对我们都非常重要。我看过《高效能人士的七个习惯》《每天最重要的2小时》《晨间日记》等一些关于提高效能的书，和一些中外财经杂志的报道，调查领导、公众人物特点，而且他们把这个作为他们的一种工作方式，和一些中外财经杂志的报道，调查领导、公 ...

            比如说，美国苹果CEO库克，早晨4点30分就开始处理邮件，5点进入健身房，总是第一个到办公室。他的前任，已故的苹果缔造者乔布斯，6点左右开始一天的工作，他9点到办公室，期间可以工作一个多小时，还可以等孩子起床和他们一起吃早餐，送孩子上学。

            作者：晓多
            链接：https://www.jianshu.com/p/054a3fb345a5
            來源：简书
            著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。<span>5分钟前</span>
          </p>
          <div class="artic-bottom">
            <span><i class="iconfont icon-yiyue"></i>25</span>
            <span><i class="iconfont icon-xiaoxi"></i>111</span>
            <span><i class="iconfont icon-xing"></i>111</span>
            <span><i class="iconfont icon-cha"></i>111</span>
          </div>
        </div>

        <div class="artic-img">

        </div>
      </li>
      <li></li>
    </ul>
  </div>
</template>
