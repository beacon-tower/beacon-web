<style lang="less">
  @followHeight: 30px;
  .follow_list {
    border-top: 2px solid #E0E0E0;
    width: 100%;
    .follow_item {
      padding-top: @followHeight;
      padding-bottom: 30px;
      border-bottom: 1px solid #E0E0E0;
      position: relative;
      .follow_add {
        position: absolute;
        top: @followHeight;
        right: 20px;
        button {
          outline:none;
          cursor: pointer;
          width: 103px;
          height: 42px;
          line-height: 42px;
          border-radius: 21px;
          border: none;
          text-align: center;
          &.addFollow {
            color: #ffff;
            background: #19adfc;
          }
          &.unFollow {
            color: #8c8c8c;
            background: #ffffff;
            border: 1px solid hsla(0,0%,59%,.6);
          }
          .follow_add_text {
            margin-right: 10px;
          }
        }
      }

      .follow_user {
        display: inline-block;
        *display:inline;
        zoom:1;
        margin:0;
        padding:0;
        text-decoration: none;
        width: 60px;
        height: 60px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .follow_user_left {
        position: absolute;
        left: 80px;
        top: @followHeight;
        height: 60px;
        line-height: 28px;
        margin-left: 30px;
        a {
          display: block;
          font-size: 14px;
          font-weight: 900;
          color: #666666;
        }
        .follow_text {
          display: block;
          font-size: 14px;
          color: #666666;
        }
      }

      .follow_art {
        margin-top: 20px;
        .follow_art_item {
          line-height: 30px;
          a {
            cursor: pointer;
            color: #666666;
          }
          .follow_icon {
            display: inline-block;
            *display:inline;
            zoom:1;
            margin:0;
            margin-left: 10px;
            padding:0;
            width: 48px;
            height: 22px;
            line-height: 22px;
            text-align: center;
            border-radius: 11px;
            border: 1px solid #109BFE;
            color: #109BFE;
          }
          .follow_art_box {
            margin-left: 30px;
            i {
              color: #AEAEAE;
            }
            .follow_art_text {
              margin-left: 10px;
              color: #AEAEAE;
            }
            &.link-follow{
              cursor: pointer;
              &:hover {
                i {
                  color: #109BFE;
                }
                .follow_art_text {
                  color: #000000;
                }
              }
            }

          }


        }
      }
    }
  }
</style>
<template>
  <ul class="follow_list">
    <li class="follow_item" v-for="item in project">
      <div class="follow_add">
        <button class="addFollow" v-if="item.followed" @click="myFollow(item)">
          <span class="follow_add_text">+</span>关注
        </button>
        <button class="unFollow" v-else="item.followed" @click="unFollow(item)">
          <span class="follow_add_text"></span>已关注
        </button>
      </div>

      <div class="follow_user">
        <nuxt-link v-bind:to="{path:'/user/follow/' + item.id}">
          <img v-bind:src="item.avatar_url" :onerror="userDefault" />
        </nuxt-link>
      </div>

      <div class="follow_user_left">
        <nuxt-link v-bind:to="{path:'/user/follow/' + item.id}">{{item.name}}</nuxt-link>
        <span class="follow_text"><span>文章{{item.art}}篇，{{item.wordNumber}}万字，{{item.followNumber}}人关注</span></span>
      </div>

      <ul class="follow_art">

        <li class="follow_art_item" v-for="li in item.titleList">
          <nuxt-link class="follow_art_item" v-bind:to="{path:'/user/follow/' + li.id}">
            <span>{{li.title}}</span>
          </nuxt-link>
          <span class="follow_icon">{{li.category}}</span>
          <span class="follow_art_box">
            <span class="follow_art_text">{{li.date}}</span>
          </span>
          <span class="follow_art_box link-follow">
            <i class="iconfont">&#xe6e7;</i>
            <span class="follow_art_text">{{li.like}}</span>
          </span>
          <span class="follow_art_box link-follow">
            <i class="iconfont">&#xe608;</i>
            <span class="follow_art_text">{{li.fabulous}}</span>
          </span>

        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
  import axios from 'axios'
  import userDefault from '../../../assets/images/user/user.jpg'
  export default {
    data () {
      return {
        userDefault: 'this.src="' + userDefault + '"',
        project: []
      }
    },
    defaultData(){

    },
    components: {

    },
    mounted(){
      axios.post('/subscriptions/recommended').then(res=>{
        console.log(res.data.data);
        // get body data
         this.project = res.data.data;
      }).catch(error=>console.log(error));

      console.log(process.env.NODE_ENV);
    },
    methods: {
      //关注
      myFollow (item) {
        const _this = this;
        this.isFollowBtn = false;
        axios.get('follow').then(function (res) {
            console.log("请求的数据昌：", res.data.data)
        })


      },

      //取消关注
      unFollow (item) {
        const _this = this;
        this.isFollowBtn = true;
        axios.post('/follow/un').then(function (res) {
          item.user_followed = false
        })
      },

      // 移动事件
      mouseMoveFollw() {
        this.isFollowBtn = true;
      },
      mouseOutFollw() {
        this.isFollowBtn = false;
      }
    }
  }
</script>
