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
        width: 16%;
        background: #373C3E;
        ul{
            li{
                color: #fff;
                line-height: 40px;
                text-indent: 40px;
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
        width: 30%;
        background: #fff;
        overflow-y: scroll;
        position:relative;
        .header{
            line-height: 104px;
            font-size: 20px;
            color: #003C7A;
            font-weight: bold;
            padding-left: 50px;
            border-bottom: 1px solid #E0E0E0;
        }
        .writebtn{
            display: inline-block;
            position:absolute;
            width: 120px;
            height: 46px;
            right: 60px;
            top: 29px;
            vertical-align: middle;
            background: url(../assets/images/write_article.png) no-repeat center;
            cursor: pointer;
        }
    }
    .write{
        width: 54%;
    }
}
   
</style>
<template>
    <div class="writer-wrap" >
        <div class="type wr-inline">
            <ul v-for="item in typeList">
                <li :class="{'selected': item.selected}" @click="selectedTopic(item.topic)">{{item.topic}}<span class="num">
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
            currentTopic: ''
        }
    },
    created(){
        this.currentTopic = this.typeList[0]['topic'];
    },
    methods:{
      selectedTopic(topic){
          this.typeList.forEach((e, i)=>{
              if(e.topic === topic){
                  this.typeList[i]['selected'] = true;
                  this.currentTopic = e.topic;
              }else{
                  this.typeList[i]['selected'] = false;
              }
          })
      },
    }
  }
</script>