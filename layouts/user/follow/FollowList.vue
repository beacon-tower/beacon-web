<style lang="less">
  @followHeight: 30px;
  .follow_list {
    width: 100%;
    .follow_item {
      padding-top: @followHeight;
      padding-bottom: 30px;
      border-bottom: 1px solid #E0E0E0;
      border-top: 1px solid #E0E0E0;
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
          background: #19adfc;
          border: none;
          color: #ffff;
          text-align: center;
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
              cursor: pointer;
              color: #AEAEAE;
              &:hover {
                color: #109BFE;
              }
            }
            .follow_art_text {
              margin-left: 10px;
              color: #AEAEAE;
            }
          }

        }
      }
    }
  }
</style>
<template>
  <ul class="follow_list">
    <li class="follow_item" v-for="item in sites">
      <div class="follow_add">
        <button>
          <span class="follow_add_text">+</span>关注
        </button>
      </div>


      <div class="follow_user">
        <nuxt-link :to="{name: '/p/b8af3beceda0'}">
          <img v-bind:src="item.avatar" :onerror="userDefault" />
        </nuxt-link>
      </div>

      <div class="follow_user_left">
        <nuxt-link :to="{name: '/p/b8af3beceda0'}">{{item.name}}</nuxt-link>
        <span class="follow_text"><span>文章{{item.art}}篇，{{item.wordNumber}}万字，{{item.followNumber}}人关注</span></span>
      </div>

      <ul class="follow_art">
        <li class="follow_art_item" v-for="li in item.titleList">
          <span>{{li.title}}</span>
          <span class="follow_icon">{{li.category}}</span>
          <span class="follow_art_box">
            <span class="follow_art_text">{{li.date}}</span>
          </span>
          <span class="follow_art_box">
            <i class="iconfont">&#xe6e7;</i>
            <span class="follow_art_text">{{li.like}}</span>
          </span>
          <span class="follow_art_box">
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
        sites: [
          { name: '董小姐',avatar: '//upload.jianshu.io/users/upload_avatars/4092287/f2f762c11fea.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64', art: 10, wordNumber: 10, followNumber: 1000, titleList :[
            {
              title: '生活是什么',category: '科技',date: '2017.01.12',like: 112, fabulous: 222
            },
            {
              title: '生活是什么',category: '科技',date: '2017.01.12',like: 112, fabulous: 222
            }
          ]},
          { name: '董小姐',avatar: '//upload.jianshu.io/users/upload_avatars/4092287/f2f762c11fea.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64', art: 10, wordNumber: 10, followNumber: 1000, titleList :[
            {
              title: '生活是什么',category: '科技',date: '2017.01.12',like: 112, fabulous: 222
            },
            {
              title: '生活是什么',category: '科技',date: '2017.01.12',like: 112, fabulous: 222
            }
          ] },
          { name: '董小姐',avatar: '//upload.jianshu.io/users/upload_avatars/4092287/f2f762c11fea.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64', art: 10, wordNumber: 10, followNumber: 1000, titleList :[
            {
              title: '生活是什么',category: '科技',date: '2017.01.12',like: 112, fabulous: 222
            },
            {
              title: '生活是什么',category: '科技',date: '2017.01.12',like: 112, fabulous: 222
            }
          ] },
          { name: '董小姐',avatar: '//upload.jianshu.io/users/upload_avatars/4092287/f2f762c11fea.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64', art: 10, wordNumber: 10, followNumber: 1000, titleList :[
            {
              title: '生活是什么',category: '科技',date: '2017.01.12',like: 112, fabulous: 222
            },
            {
              title: '生活是什么',category: '科技',date: '2017.01.12',like: 112, fabulous: 222
            }
          ]},
          { name: '董小姐',avatar: '//upload.jianshu.io/users/upload_avatars/4092287/f2f762c11fea.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64', art: 10, wordNumber: 10, followNumber: 1000, titleList :[
            {
              title: '生活是什么',category: '科技',date: '2017.01.12',like: 112, fabulous: 222
            },
            {
              title: '生活是什么',category: '科技',date: '2017.01.12',like: 112, fabulous: 222
            }
          ] },
          { name: '董小姐',avatar: '', art: 10, wordNumber: 10, followNumber: 1000, titleList :[
            {
              title: '生活是什么',category: '科技',date: '2017.01.12',like: 112, fabulous: 222
            },
            {
              title: '生活是什么',category: '科技',date: '2017.01.12',like: 112, fabulous: 222
            }
          ] },
        ]
      }
    },
    components: {

    },
    mounted(){
      console.log(process.env.NODE_ENV);
    },
    methods: {}
  }
</script>
