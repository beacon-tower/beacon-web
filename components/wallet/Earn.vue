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
             <div class="e-Items">
                <div class="e-num">1</div>
                <div class="e-article">我的校园生活</div>
                <div class="e-words">2017</div>
                <div class="e-time">20171312</div>
                <div class="e-money">2010<span class="e-arrow-right"></span></div>
            </div>
            <div class="e-Items">
                <div class="e-num">2</div>
                <div class="e-article">艺术之旅</div>
                <div class="e-words">2017</div>
                <div class="e-time">20171312</div>
                <div class="e-money">2010<span class="e-arrow-right"></span></div>
                <div class="e-detail">
                    <div class="hd">
                        <div class="d-desc hd">获币说明</div>
                        <div class="d-time hd">获币时间</div>
                        <div class="d-money hd">获币数量</div>
                    </div>
                    <div>
                        <div class="d-desc">获得5000个赞</div>
                        <div class="d-time">2017-10-2</div>
                        <div class="d-money">8</div>
                    </div>
                    <div>
                        <div class="d-desc">获得3000个赞</div>
                        <div class="d-time">2017-10-3</div>
                        <div class="d-money">12</div>
                    </div>
                </div>
            </div>
            <div class="e-Items">
                <div class="e-num">3</div>
                <div class="e-article">设计是什么</div>
                <div class="e-words">1111</div>
                <div class="e-time">20171312</div>
                <div class="e-money">2010<span class="e-arrow-right"></span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>