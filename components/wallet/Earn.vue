<style lang="less" >
.tableList{
    margin-top: 40px;
    text-align: left;
    color: #666;
    .e-table{
        width: 100%;
        line-height: 40px;
        .header{
            width: 100%;
            line-height: 40px;
            color: #0B4480;
            border-bottom: 1px solid #E0E0E0
        }
        .hd{
            font-weight: bold;
            color: #0B4480;
        }
        .e-num{
            width: 15%;
            display:inline-block;
        }
        .e-article{
            width: 30%;
             display:inline-block;
        }
        .e-words{
            width: 15%;
             display:inline-block;
        }
        .e-time{
            width: 25%;
            display:inline-block;
        }
        .e-money{
            width: 10%;
            position: relative;
            display:inline-block;
            span{
                position: absolute;
                display: inline-block;
                margin-top: -4px;
                width: 0px;
                height: 0px;
                right: -20px;
                top: 50%;
                cursor: pointer;
            }
            .e-arrow-bottom{             
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 6px solid #969696;
             }
            .e-arrow-right{             
                border-bottom: 6px solid transparent;
                border-top: 6px solid transparent;
                border-left: 6px solid #969696;
             }
        }
        .e-detail{
            border-top: 1px solid #E0E0E0;
            border-bottom: 1px solid #E0E0E0;
            width: 100%;
            background: #efefef;  
            transition: all 0.5s;
            .d-desc{
                width: 42.5%;
                display:inline-block;
                text-align: center;
            }
            .d-time{
                width: 42.5%;
                display:inline-block;
                text-align: center;
            }
            .d-money{
                width: 15%;
                display:inline-block;
            }
        }
    }
}
</style>

<template>
    <div class="tableList">
        <div class="e-table">
            <div class="header hd">
                <div class="e-num">序号</div>
                <div class="e-article">文章</div>
                <div class="e-words">字数</div>
                <div class="e-time">发表时间</div>
                <div class="e-money">获币数量</div>
            </div>
             <div class="e-Items" v-for="data in listData">
                <div class="e-num">{{data.id}}</div>
                <div class="e-article">{{data.article}}</div>
                <div class="e-words">{{data.words}}</div>
                <div class="e-time">{{data.publishTime}}</div>
                <div class="e-money">{{data.totalCoin}}<span :class="{'e-arrow-right': !data.show, 'e-arrow-bottom': data.show}" @click="toggleDesc(data.article)"></span></div>
                <div class="e-detail" v-show="data.show">
                    <div class="hd">
                        <div class="d-desc hd">获币说明</div>
                        <div class="d-time hd">获币时间</div>
                        <div class="d-money hd">获币数量</div>
                    </div>
                    <div v-for="item in data.detail">
                        <div class="d-desc">{{item.desc}}</div>
                        <div class="d-time">{{item.time}}</div>
                        <div class="d-money">{{item.coinCount}}</div>
                    </div>
                </div>
             </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            listData: [
                {
                    id: 1, article: '我的校园生活', words: 2017, publishTime: '2017-10-2', totalCoin: 2010, show: false,
                    detail: [
                        {desc: '获得3000个赞', time: '2017-10-5', coinCount: 8},
                        {desc: '获得3000个赞', time: '2017-10-5', coinCount: 9}
                    ]
                },
                {
                    id: 2, article: '艺术之旅1', words: 2323, publishTime: '2017-10-5', totalCoin: 3000, show: false,
                    detail: [
                        {desc: '获得3000个赞', time: '2017-10-5', coinCount: 2}
                    ]
                },
                {
                    id: 3, article: '艺术之旅2', words: 2323, publishTime: '2017-10-5', totalCoin: 3000, show: false,
                    detail: [
                        {desc: '获得3000个赞', time: '2017-10-5', coinCount: 2}
                    ]
                }
            ]
        }
    },
    methods: {
        toggleDesc(article){ // 翻页
           this.listData.forEach((e, i)=>{
               if(e.article === article){
                   this.listData[i]['show'] = !this.listData[i]['show'];
                   return;
               }
           });
        }
    }
}
</script>