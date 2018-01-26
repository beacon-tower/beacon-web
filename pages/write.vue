<style lang="less">
.writer-wrap{
    position: fixed;
    width: 100%;
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
            .vddl-list, .vddl-draggable {
                 position: relative;
            }
            .vddl-list {
                min-height: 44px;
            }
            .vddl-dragging{
                opacity: 0.9;
            }
            .vddl-dragging-source {
                display: none;
            }
            .placeMove{
                height: 100px;
                line-height: 100px;
                background: #eee
            }
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
                .icon{
                    width: 16%;
                    height: 100%;
                    position: relative;
                    .bg{
                        background: url(../assets/images/uns_article.png) no-repeat center;
                        display: inline-block;
                        width: 20px;
                        height: 16px;
                        position:absolute;
                        left: 20px;
                        top: 50%;
                        margin-top: -8px;
                    }
                }
                .desc{
                    width: 70%;
                    .title{
                        color: #003C7A;
                        font-size: 18px;
                        line-height: 60px;
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
                    width: 10%;
                    .iconfont{
                        display: none;
                        color: #666;
                        font-size: 30px;
                        line-height: 100px;
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
                font-size: 50px;
                text-indent: 20px;
            }
        }
    }
    
}
   
</style>
<template>
    <div class="writer-wrap" >
        <div class="type wr-inline">
            <ul v-for="item in typeList">
                <li :class="{'selected': item.selected}" @click="selecteActiveEle('typeList', 'topic', item.topic, 'currentTopic')">{{item.topic}}<span class="num">
                         <font>{{item.num}}</font>
                    </span>
                </li>
            </ul>
        </div>
        <div class="list wr-inline">
            <div class="header">
                <span>{{currentTopic}}</span>
                <span class="writebtn"></span>
            </div>
            <div class="panel__body">
                <vddl-list class="panel__body--list" :list="articleList" :horizontal="false">
                    <vddl-draggable class="panel__body--item" v-for="(item, index) in articleList" :key="item.id"
                        :draggable="item"
                        :index="index"
                        :wrapper="articleList"
                        :moved="handleMoved"
                        effect-allowed="move"
                    >
                    <div :class="{'a-selected': item.selected, '_article': true}" @click="selecteActiveEle('articleList', 'id', item.id, 'currentArticle')">
                        <div class="icon">
                            <span class="bg"></span>
                        </div>
                        <div class="desc">
                            <div class="title">{{item.title}}</div>
                            <div class="detail">
                                <span><img class="fire_coin" src="../assets/images/fire_coin.png" alt=""></span><span class="num">{{item.coin}}</span>
                                <span class="icon"><i class="iconfont icon-yiyue"></i></span><span class="num">{{item.focus}}</span>
                                <span class="icon"><i class="iconfont icon-xing"></i></span><span class="num">{{item.star}}</span>
                                <span class="icon"><i class="iconfont icon-cha"></i></span><span class="num">{{item.like}}</span>
                            </div>
                        </div>
                        <div class="setting"><i class="iconfont icon-yiyue"></i></div>
                    </div>
                    </vddl-draggable>
                    <vddl-placeholder class="placeMove"></vddl-placeholder>
                </vddl-list>
            </div>
        </div>
        <div class="write wr-inline">
            <div class="w-title"><input type="text" :value="currentArticle" /></div>
            <Editor />
        </div>
    </div>
</template>
<script>
  import Editor from '../components/Editor';

  export default{
    layout: 'default',
    data(){
        return {
            typeList: [
                {topic: '科技', num: 100, selected: false},
                {topic: '教育', num: 100, selected: false},
                {topic: '文艺', num: 100, selected: false},
                {topic: '社会', num: 100, selected: false},
                {topic: '理财', num: 100, selected: false},
                {topic: '生活', num: 100, selected: false}
            ],
            currentTopic: '',
            currentArticle: '',
            articleList: [
                    {
                        "id": '1',
                        "title": "花儿为什么这样红",
                        "selected": true,
                        "coin": 100,
                        "focus": 100,
                        "star": 100,
                        "like": 100
                    },
                    {
                        "id": '2',
                        "title": "幸福像花儿一样",
                        "selected": false,
                        "coin": 200,
                        "focus": 200,
                        "star": 200,
                        "like": 200
                    },
                    {
                        "id": '3',
                        "title": "花开半夏",
                        "selected": false,
                        "coin": 300,
                        "focus": 300,
                        "star": 300,
                        "like": 300
                    },
                    {
                        "id": '4',
                        "title": "花好月圆",
                        "selected": false,
                        "coin": 400,
                        "focus": 400,
                        "star": 400,
                        "like": 400
                    },
                    {
                        "id": '5',
                        "title": "花开半夏",
                        "selected": false,
                        "coin": 300,
                        "focus": 300,
                        "star": 300,
                        "like": 300
                    },
                    {
                        "id": '6',
                        "title": "花好月圆",
                        "selected": false,
                        "coin": 400,
                        "focus": 400,
                        "star": 400,
                        "like": 400
                    },
                    {
                        "id": '7',
                        "title": "花开半夏",
                        "selected": false,
                        "coin": 300,
                        "focus": 300,
                        "star": 300,
                        "like": 300
                    },
                    {
                        "id": '8',
                        "title": "花好月圆",
                        "selected": false,
                        "coin": 400,
                        "focus": 400,
                        "star": 400,
                        "like": 400
                    }
            ]
        }
    },
    created(){
        this.currentTopic = this.typeList[0]['topic'];
    },
    components: {
        Editor
    },
    methods:{
      selecteActiveEle(list, key, value, currentV){
          this[list].forEach((e, i)=>{
              if(e[key] === value){
                  this[list][i]['selected'] = true;
                  this[currentV] = value;
              }else{
                  this[list][i]['selected'] = false;
              }
          })
      },
      handleMoved (targetDraggable) {

        //删除元素操作, 解决拖动复制情况
        this.articleList.splice(targetDraggable.index, 1);

        let new_article_list = [];

        this.articleList.forEach(e=>{
            new_article_list.push({
                id: e.id,
                title: e.title
            });
        });
        console.log(new_article_list);
      }
    }
  }
</script>