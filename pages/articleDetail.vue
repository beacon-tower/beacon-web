<style lang="less">
  @import "../assets/less/main";
  .artcle-detail{
    .ad-title{
      font-size: 32px;
      color: #003c7a;
    }
    .author{
      margin: 28px 0 40px;
    }
    .artic-photo{
      display: inline-block;
      width: 46px;
      height: 46px;
      border: 1px solid gainsboro;
      border-radius: 100%;
    }
    .author-right{
      display: inline-block;
      margin-left:12px;
      .para{
        color: #aeaeae;
        margin-top: 10px;
      }
    }
    .ad-content{
      line-height: 24px;
      text-indent: 2em;
    }
    .praise{
      width: 80px;
      margin: 64px auto 0;
      color: #1ABAEE;
      text-align:center;
      cursor:pointer;
      .hand{
        height: 80px;
        line-height: 80px;
        border: 1px solid #1ABAEE;
        border-radius: 100%;
        margin-bottom: 10px;
      }
      i{
        font-size: 50px;
      }
    }
    .artcle-bottom{
      text-align: right;
      color: #aeaeae;
      margin: 23px 0 45px 36px;
      .collect{
        margin-left: 36px;
        cursor: pointer;
      }
      .iconfont{
        margin-right: 5px;
      }
    }
    .comment-content{
      width: 93%;
      height: 126px;
      float: right;
      resize: none;
    }
    .comment-btn{
      margin-top: 10px;
      float: right;
      width: 140px;
      height: 45px;
      cursor: pointer;
      background: url("../assets/images/atcdtl_btn.png") no-repeat -21px -17px;
    }
    .comment-list{
      color:#666;
      >li{
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 40px;
        margin-bottom: 30px;
      }

      .com-time{
        color: #AEAEAE;
        margin-top: 10px;
      }
      .com-content{
        margin: 20px 0;
      }
      .mrl-13{
        margin-left: 13px;
        float: left;
      }
      .com-list-bottom{
        color: #AEAEAE;
        margin-bottom:27px;
        .com-number{
          margin-right: 14px;
        }
        span{
          cursor: pointer;
        }
        .iconfont{
          margin-right: 10px;
        }
        .icon-cha{
          color: #1ABAEE;
        }
      }
    }
    .click-reply{
      cursor: pointer;
    }
    .reply-list{
      font-size: 12px;
      margin-left: 20px;
      border-bottom: 1px solid #e0e0e0;
      >li{
        padding-bottom: 18px;
       }
      .reply-content{
        line-height: 24px;
      }
      .who-reply{
        color: #31A1DE;
        margin-right: 8px;
      }
    }
    .add-comment{
      margin:18px 0 0 20px;
      color: #aeaeae;
      cursor: pointer;
    }
    .write-area{
      height: 80px;
      width: 100%;
      resize: none;
      margin-top: 40px;
      border-radius: 4px;
      padding: 10px 15px;
      border: 1px solid #e0e0e0;
    }
  }
</style>
<template>
  <div class="artcle-detail">
    <h1 class="ad-title">2017的最后一天，2018年的第一天</h1>
    <div class="author">
      <img src="../assets/images/person.png" alt="" class="artic-photo">
      <div class="author-right">
        <span>董小姐</span><span>关注</span>
        <p class="para">2018.01.15 10:56 字数189，阅读818，评论17，收藏14，点赞562</p>
      </div>
    </div>
    <img src="" alt="" style="outline: 1px solid #aeaeae;width: 100%;height: 350px">
    <p class="ad-content">
      早起对我们都非常重要。我看过《高效能人士的七个习惯》《每天最重要的2小时》《晨间日记》等一些关于提高效能的书，和一些中外财经杂志的报道，调查领导、公众人物特点，而且他们把这个作为他们的一种工作方式，和一些中外财经杂志的报道，调查领导、公在21世纪的前十年，韩寒的崛起是中国的一道标志性的景观。

      他是赛车手、作家、青年意见领袖、公共知识分子。他17岁的时候就在新概念作文大赛中声名鹊起，紧接着又选择退学，临走前还踩了我国的教育体制一脚。

      “我以前以为数学学到初二就够了，我发现我错了，其实是初一。”

      “我可以靠稿费养活我自己。”

      那时候，哄笑声围绕在他的四周。人们像是在围观马戏团里的一只猴子那样轻浮。

      但是韩寒成功了，一夜之间就成为了所有青年人的领袖。

      他出书、出唱片、自己办杂志，他从来不按套路出牌，用自己的行为去戳破沉重荒诞的泡沫。李海鹏称韩寒是“冒犯者”，恰如其分。因为他向来怼天怼地怼社会，无所畏惧。虽然有时候抖一些机灵卖卖俏皮，透露出自己的小得意，也并不让人讨厌。
    </p>
    <div class="praise">
      <div class="hand"><i class="iconfont icon-cha"></i></div>
      <span>点赞支持</span>
    </div>
    <div class="artcle-bottom">
      <span class="collect"><i class="iconfont icon-xing"></i>收藏</span>
      <span class="collect">! 举报</span>
    </div>
    <div class="write-comment clearfloat">
      <div class="clearfloat">
        <img src="../assets/images/person.png" alt="" class="artic-photo fl-left">
        <textarea class="comment-content" rows="4"></textarea>
      </div>
      <div class="comment-btn"></div>
    </div>
    <ul class="comment-list">
      <li>
        <div class="clearfloat">
          <img src="../assets/images/person.png" alt="" class="artic-photo fl">
          <div class="mrl-13">
            <div>name</div>
            <div class="com-time">5楼，2018.11.25 11:36</div>
          </div>
        </div>
        <p class="com-content">生活是什么，2018才明</p>
        <div class="com-list-bottom">
          <span class="com-number"><i class="iconfont icon-cha"></i>111</span>
          <span class="click-reply"><i class="iconfont icon-xiaoxi"></i>回复</span>
          <span class="fr">举报</span>
        </div>

        <ul class="reply-list">
          <li>
            <p class="reply-content"><span class="who-reply">萌萌：@flona最美</span>2019会怎么样？</p>
            <div class="com-time">2018.11.25 11:36 <span class="click-reply"><i class="iconfont icon-xiaoxi"></i>回复</span></div>
          </li>
          <li>
            <p class="reply-content"><span class="who-reply">萌萌：@flona最美</span>2019会怎么样？</p>
            <div class="com-time">2018.11.25 11:36 <span class="click-reply"><i class="iconfont icon-xiaoxi"></i>回复</span></div>
          </li>
        </ul>
        <div class="add-comment">
          <div class="click-reply"><i class="iconfont icon-yuechi"></i>添加新评论</div>
          <textarea placeholder="写下你的评论..." class="write-area"></textarea>
        </div>
      </li>

      <li>
        <div class="clearfloat">
          <img src="../assets/images/person.png" alt="" class="artic-photo fl">
          <div class="mrl-13">
            <div>name</div>
            <div class="com-time">5楼，2018.11.25 11:36</div>
          </div>
        </div>
        <p class="com-content">生活是什么，2018才明</p>
        <div class="com-list-bottom">
          <span class="com-number"><i class="iconfont icon-cha"></i>111</span>
          <span class="click-reply"><i class="iconfont icon-xiaoxi"></i>回复</span>
          <span class="fr">举报</span>
        </div>

        <ul class="reply-list">
          <li>
            <p class="reply-content"><span class="who-reply">萌萌：@flona最美</span>2019会怎么样？</p>
            <div class="com-time">2018.11.25 11:36 <span class="click-reply"><i class="iconfont icon-xiaoxi"></i>回复</span></div>
          </li>
          <li>
            <p class="reply-content"><span class="who-reply">萌萌：@flona最美</span>2019会怎么样？</p>
            <div class="com-time">2018.11.25 11:36 <span class="click-reply"><i class="iconfont icon-xiaoxi"></i>回复</span></div>
          </li>
        </ul>
        <div class="add-comment">
          <div class="click-reply"><i class="iconfont icon-yuechi"></i>添加新评论</div>
          <textarea placeholder="写下你的评论..." class="write-area"></textarea>
        </div>
      </li>
    </ul>
  </div>
</template>
