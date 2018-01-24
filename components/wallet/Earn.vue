<style lang="less" >
.tableList{
    margin-top: 40px;
    text-align: left;
    color: #666;
    table{
        width: 100%;
        .header{
            width: 100%;
            line-height: 40px;
            color: #0B4480;
            border-bottom: 1px solid #E0E0E0
        }
        td{
            line-height: 40px;
        }
        .e-num{
            width: 15%;
        }
        .e-article{
            width: 30%;
        }
        .e-words{
            width: 15%;
        }
        .e-time{
            width: 20%;
        }
        .e-money{
            width: 15%;
            position: relative;
            span{
                position: absolute;
                display: inline-block;
                margin-top: -4px;
                width: 0px;
                height: 0px;
                right: 10px;
                top: 50%;
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
    }
}
</style>

<template>
    <div class="tableList">
        <table >
        <tr class="header">
            <th class="e-num">序号</th>
            <th class="e-article">文章</th>
            <th class="e-words">字数</th>
            <th class="e-time">发表时间</th>
            <th class="e-money">获币数量</th>
        </tr>
        <tbody>
            <tr>
                <td class="e-num">1</td>
                <td class="e-article">我的校园生活</td>
                <td class="e-words">2017</td>
                <td class="e-time">20171312</td>
                <td class="e-money">2010<span class="e-arrow-bottom"></span></td>
            </tr>
        </tbody>
        </table>
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