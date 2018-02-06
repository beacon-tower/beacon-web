<style lang="less">
.writer-wrap{
    position: fixed;
    width: 100%;
    min-width: 1200px;
    left: 0;
    top: 0;
    padding-top:50px;
    background: #eee;
    height: 100%;
    z-index: -10;
    .wr-inline{
        height: 100%;
        position: relative;
        display: inline-block;
        vertical-align: top;
        border-top: 1px solid #ddd;
    }
    .type{
        width: 14%;
        background: #373C3E;
        ul{
            li{
                color: #fff;
                line-height: 40px;
                text-indent: 20px;
                cursor: pointer;
                position: relative;
                .num{
                    position: absolute;
                    display:inline-block;
                    width: 42px;
                    line-height: 18px;
                    border-radius: 3px;
                    background: #67CFFF;
                    right: 20px;
                    top: 11px;
                    text-indent: 0;
                    color: #fff;
                    text-align:center;
                }
            }
            li.selected{
                border-left: 4px solid #67CFFF;
                background: #565c5f
            }
        }
    }
    .list{
        width: 25%;
        background: #fff;
        overflow-y: scroll;
        position:relative;
        overflow-x: hidden;
        padding-bottom: 100px;
        .header{
            line-height: 104px;
            height: 104px;
            font-size: 20px;
            color: #003C7A;
            font-weight: bold;
            padding-left: 20px;
            border-bottom: 1px solid #E0E0E0;
        }
        .writebtn{
            display: inline-block;
            position:absolute;
            width: 120px;
            height: 46px;
            right: 10px;
            top: 29px;
            vertical-align: middle;
            background: url(../assets/images/write_article.png) no-repeat center;
            cursor: pointer;
        }
        .panel__body{
            ._article{
                height: 100px;
                font-size: 20px;
                border-bottom: 1px solid #E0E0E0;
                cursor: pointer;
                transition: background 0.3s;
                &:hover{
                    background: #f7f7f7
                }
                >div{
                    display: inline-block;
                    vertical-align: top;
                }
                i{
                    font-style: normal!important;
                }
                .icon{
                    width: 16%;
                    height: 100%;
                    position: relative;
                    .bg{
                        // background: url(../assets/images/uns_article.png) no-repeat center;
                        display: inline-block;
                        width: 20px;
                        height: 16px;
                        position:absolute;
                        left: 50%;
                        top: 50%;
                        margin-top: -8px;
                        margin-left: -10px;
                        .paper{
                            font-size: 22px;          
                        }
                    }
                    .wordsNum{
                         position:absolute;
                         bottom:3px;
                         left: 3px;
                         font-size: 9px;
                    }
                }
                .desc{
                    width: 70%;
                    .title{
                        color: #003C7A;
                        font-size: 18px;
                        line-height: 60px;
                        height: 60px
                    }
                    .detail{
                        .num{
                            padding: 0  5px;
                            font-size: 12px;
                        }
                        .icon{
                            width: 16px;
                            height: 16px;
                            display: inline-block;
                        }
                        .fire_coin{
                            display: inline-block;
                            width: 13px;
                            height: 13px;
                            vertical-align: middle;
                        }
                        .iconfont{
                            color: #AEAEAE;
                        }
                    }
                }
                .setting{
                    position: absolute;
                    right: 3px;
                    .s_container{
                        width: 40px;
                        text-align: center;
                        position:relative;
                        .iconfont{
                            color: #666;
                            font-size: 20px;
                            line-height: 100px;
                        }
                        .menu{
                            position:absolute;
                            width: 100px;
                            left: -30px;
                            top: 38px;
                        }
                    }
                }
            }
            .a-selected{
                border-left: 4px solid #67CFFF;
                background: #f7f7f7;
                .setting{
                    .iconfont{
                        display: block;
                    }
                }
            }
        }
    }
    .write{
        width: 61%;
        background: #fff;
        .w-title{
            height: 100px;
            input{
                border: none;
                outline: none;
                width: 100%;
                height: 100px;
                font-size: 40px;
                text-indent: 20px;
            }
        }
    }
    
}
   
</style>
<template>
    <div class="writer-wrap" @click="frameClick">
        <div class="type wr-inline">
            <ul v-for="item in typeList" :key="item.id">
                <li :class="{'selected': item.selected}" @click="selecteActiveEle('typeList', 'name', item.name, 'currentTopic')" >{{item.name}}<span class="num">
                         <font>{{item.followCount}}</font>
                    </span>
                </li>
            </ul>
        </div>
        <div class="list wr-inline">
            <div class="header">
                <span>{{currentTopic}}</span>
                <span class="writebtn" @click="newArticle"></span>
            </div>
            <div class="panel__body">
                <draggable v-model="articleList" :move="checkMove">
                    <transition-group>
                        <div v-for="item in articleList" :key="item.id" >
                            <div :class="{'a-selected': item.selected, '_article': true}" @click="selecteActiveEle('articleList', 'id', item.id, 'currentArticleId')">
                                <div class="icon">
                                    <span class="bg"><i class="iconfont icon-paper paper" :style="{color: item.state === 'published' ? '#67CFFF' : '#ccc'}"></i></span>
                                    <span v-if="item.selected" class="wordsNum">字数:{{item.wordsCount}}</span>
                                </div>
                                <div class="desc">
                                    <div class="title">{{item.title}}</div>
                                    <div class="detail">
                                        <span><img class="fire_coin" src="../assets/images/fire_coin.png" alt=""></span><span class="num">{{item.coinCount}}</span>
                                        <span class="icon"><i class="iconfont icon-yiyue"></i></span><span class="num">{{item.readCount}}</span>
                                        <span class="icon"><i class="iconfont icon-xing"></i></span><span class="num">{{item.seqInTopic}}</span>
                                        <span class="icon"><i class="iconfont icon-cha"></i></span><span class="num">{{item.likesCount}}</span>
                                    </div>
                                </div>
                                <div class="setting" v-if="item.selected">
                                    <div class="s_container">
                                        <i class="iconfont icon-setting SEETING"></i>
                                        <div class="menu"><Menu :show="menuShow" :token="token" :id="item.id" :isPublished="item.state" :hideMenu="hideMenu" :typeList="typeList" :deleteArticle="deleteArticle"/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition-group>
                </draggable>
            </div>
        </div>
        <div class="write wr-inline">
            <div class="w-title"><input type="text" v-model="currentArticle" @blur="autosave"/></div>
            <Editor ref="Editor" :autosave="autosave"/>
        </div>
    </div>
</template>
<script>
  /**
  * @desc 写文章部分，包括 左侧话题列表， 中间文章列表， 右侧文章编辑器部分
  * @author lihongkai
  **/
  import Editor from '../components/write/Editor';
  import draggable from 'vuedraggable';
  import Menu from '../components/write/Menu';
  import {isnull} from '../assets/js/common';
  import { getTopics, getArticleList, getArticle, moveArticleUnderTopic, saveArticle} from '../service/write.js';
  import EVENT from '../components/EventBus.js';

  export default{
    layout: 'default',
    data(){
        return {
            typeList: [], // 话题列表
            currentTopic: '',  // 当前话题名称
            currentTopicId: '',  // 当前话题id
            currentArticle: '', // 当前文章标题
            currentArticleId: '', // 当前文章id
            timer: '',  // 拖拽文章避免向后台发送数据使用
            menuShow: false, // 是否显示菜单
            token: '', // 登录认证标识
            contentHTML: '', // 当前文章内容
            articleList: []  // 文章列表    
        }
    },
    beforeMount(){
      this.token = sessionStorage.getItem('rgtk');
      if (isnull(this.token)) {
        this.$router.push({name: 'login'});
      }else{
          // 获取左侧 话题列表
          getTopics(this.token).then(res=>{
              let temp = []
              res.data.data.map((e, i)=>{
                  if(i === 0){
                      this.currentTopic = e.name;
                      this.currentTopicId = e.id;
                      e.selected = true;

                      // 根据话题id 请求相应文章列表
                      this.getMiddlelist(e.id);

                  }else{
                      e.selected = false;
                  }
                  temp.push(e);
              });
              this.typeList = temp;
          }).catch(err=>{
              //
          });

      }
    },
    components: {
        Editor, draggable, Menu
    },
    methods:{

      // 显示/隐藏设置按钮
      frameClick(e){ 
          if(!e.target.className || e.target.className.indexOf('SEETING') === -1){
              this.menuShow = false;
          }else{
              this.menuShow = true;
          };
      },

      // 从子组件传过来隐藏菜单
      hideMenu(){ 
          this.menuShow = false;
      },

      // 选择话题/文章
      selecteActiveEle(list, key, value, currentV){
          this[list].forEach((e, i)=>{
              if(e[key] === value){
                  this[list][i]['selected'] = true;
                  this[currentV] = value;
                  
                  if(currentV === 'currentTopic'){ //  获取对应话题文章列表
                      this.getMiddlelist(e.id);
                  }else{
                      this.getCurrentArticle(e.id, e.title); //  获取对应文章内容
                  };
              }else{
                  this[list][i]['selected'] = false;
              }
          });
      },

      // 采用节流的思想，避免多次向后台发送数据请求
      checkMove(evt){  
          if(this.timer){
              return;
          }
          this.timer =  window.setTimeout(()=>{
              clearTimeout(this.timer);
              this.timer = null;
              let sendArr = this.articleList.map((e, i)=>{
                  return e.id;
              });
              
              // 移动文章列表
              moveArticleUnderTopic(sendArr, this.token).then(res=>{
                 // 移动成功，什么也不做~ 
              }).catch(err=>{
                  alert('移动失败!');
              });  
          }, 1400)
      },

      // 获取中间文章列表数据
      getMiddlelist(id){ 
        getArticleList(id, this.token).then(resp =>{
            let temp = [];
            // 重置右侧输入区域
            EVENT.$emit('CONTENT_HTML', '<h3></h3>');
            this.currentArticle = '';

            resp.data.data.forEach((e, i)=>{
                if(i === 0){
                    e.selected = true;
                    this.currentArticleId = e.id;

                    // 根据文章id 获取相应文章内容
                    this.getCurrentArticle(e.id, e.title);

                }else{
                    e.selected = false;
                }
                temp.push(e);
            });

            this.articleList = temp;   
        }).catch(err=>{
           //
        }); 
      },

      // 新建文章
      newArticle(){
        let newArticle = {
            topicId: this.currentTopicId,
            content: '<h3>欢迎！</h3>',
            title: '新建文章',
            id: null
        }
        this.save(newArticle);
      },

      // 获取当前文章
      getCurrentArticle(articleId, title){
          getArticle(articleId, this.token).then(res=>{
              this.currentArticle = title;
              // 使用事件班车传递文本数据到编辑器组件
              EVENT.$emit('CONTENT_HTML', res.data.data);
          })
      },

      // 自动保存文章
      autosave(){
        let data = {
            id: this.currentArticleId,
            title: this.currentArticle,
            topicId: this.currentTopicId,
            content: document.getElementsByClassName('w-e-text')[0].innerHTML
        };
        this.save(data);
      },

      // 向后台发送保存信息指令
      save(data){
        saveArticle(data, this.token).then(res=>{
            let index = this.articleList.findIndex((e, i)=> e.id === data.id);

            // 修改已有文章进行保存
            if(index > -1){ 
                this.articleList[index].title = data.title;

            }else{ // 新建文章进行保存

                // 更新文章列表，设置新建文章为当前选定文章，重置文章id 文章内容 文章标题
                let _new = Object.assign({}, res.data.data, {selected: true});
                this.articleList.forEach((e)=>{
                    e.selected = false;
                });
                this.currentArticle = _new.title;
                this.currentArticleId = _new.id;
                EVENT.$emit('CONTENT_HTML', '<h3>欢迎！</h3>');

                this.articleList.unshift(_new);
            }
        })
      },
      
      // 设置文章第一项被选择
      firstArticleSelected(){
          let len = this.articleList.length;
          if(len === 0){
               EVENT.$emit('CONTENT_HTML', '<h3></h3>');
               this.currentArticle = '';
          }else{
              this.articleList.forEach((e, i)=>{
                  if(i === 0){
                    e.selected = true;
                    this.currentArticleId = e.id;

                    // 根据文章id 获取相应文章内容
                    this.getCurrentArticle(e.id, e.title);

                  }else{
                    e.selected = false;
                 }
              })
          }
      },

      // 把删除文章从列表移除
      deleteArticle(articleId){ 
          let index = this.articleList.findIndex((e)=> e.id === articleId);
          if(index > -1){
              this.articleList.splice(index, 1);
              this.firstArticleSelected();
          }
      }
    }
  }
</script>