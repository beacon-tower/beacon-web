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
            font-weight: bold;
            border-bottom: 1px solid #E0E0E0
        }
        td{
            line-height: 40px;
        }
        .type{
            width: 15%;
        }
        .target{
            width: 25%;
        }
        .time{
            width: 25%;
        }
        .money{
            width: 15%;
        }
        .desc{
            width: 15%;
        }
    }
}
</style>

<template>
    <div class="tableList">
        <table >
        <tr class="header">
            <th class="type">交易类型</th>
            <th class="target">交易方地址</th>
            <th class="time">交易时间</th>
            <th class="money">交易金额</th>
            <th class="desc">交易说明</th>
        </tr>
        <tbody>
            <tr v-for="item in dataList">
                <td class="type">{{item.type}}</td>
                <td class="target">{{item.target}}</td>
                <td class="time">{{item.time}}</td>
                <td class="money">{{item.coin}}</td>
                <td lass="desc">{{item.desc}}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dataList: [
                {type: "转账", target: "qweqweqewq", time: "2017-10-20", coin: 200, desc: "转给苏老板"},
                {type: "转账", target: "qweqweqewq", time: "2017-10-20", coin: 200, desc: "转给王老板"},
                {type: "转账", target: "qweqweqewq", time: "2017-10-20", coin: 200, desc: "转给苏老板"},
                {type: "转账", target: "qweqweqewq", time: "2017-10-20", coin: 200, desc: "转给王老板"},
                {type: "转账", target: "qweqweqewq", time: "2017-10-20", coin: 200, desc: "转给苏老板"},
                {type: "转账", target: "qweqweqewq", time: "2017-10-20", coin: 200, desc: "转给王老板"},
                {type: "转账", target: "qweqweqewq", time: "2017-10-20", coin: 200, desc: "转给苏老板"},
                {type: "转账", target: "qweqweqewq", time: "2017-10-20", coin: 200, desc: "转给王老板"},
                {type: "转账", target: "qweqweqewq", time: "2017-10-20", coin: 200, desc: "转给苏老板"},
                {type: "转账", target: "qweqweqewq", time: "2017-10-20", coin: 200, desc: "转给王老板"},
                {type: "转账", target: "qweqweqewq", time: "2017-10-20", coin: 200, desc: "转给李老板"}
            ]
        }
    }
}
</script>