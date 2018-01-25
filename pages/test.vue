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
                line-height: 100px;
                font-size: 20px;
                border-bottom: 1px solid #E0E0E0;
                text-indent: 60px;
                cursor: pointer;
                &:hover{
                    background: #E0E0E0
                }
            }
            .a-selected{
                border-left: 4px solid #67CFFF;
                background: #E0E0E0
            }
        }
    }
    .write{
        width: 61%;
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
                        :index="index"
                        :wrapper="articleList"
                        :moved="dragMove"
                        effect-allowed="move"
                    >
                    <div :class="{'a-selected': item.selected, '_article': true}" @click="selecteActiveEle('articleList', 'id', item.id, 'currentArticle')">{{item.label}}</div>
                    </vddl-draggable>
                    <vddl-placeholder class="placeMove"></vddl-placeholder>
                </vddl-list>
            </div>
        </div>
        <div class="write wr-inline">
            <span>789</span>
        </div>
    </div>
</template>
<script>
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
                        "label": "花儿为什么这样红",
                        "selected": false
                    },
                    {
                        "id": '2',
                        "label": "幸福像花儿一样",
                         "selected": false
                    },
                    {
                        "id": '3',
                        "label": "花开半夏",
                         "selected": true
                    },
                    {
                        "id": '4',
                        "label": "花好月圆",
                        "selected": false
                    }
            ]
        }
    },
    created(){
        this.currentTopic = this.typeList[0]['topic'];
    },
    components: {
        
    },
    methods:{
      selecteActiveEle(list, key, value, currentV){
          this[list].forEach((e, i)=>{
              if(e[key] === value){
                  this[list][i]['selected'] = true;
                  this[currentV] = e[value];
              }else{
                  this[list][i]['selected'] = false;
              }
          })
      },
      dragMove(a, b, c){
          debugger;
          console.log(a, b, c);
      }
    }
  }
</script>