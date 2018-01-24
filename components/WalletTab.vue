<style lang="less" >
.walletTab{
    .tab-content{
        margin-top: 40px;
        .select-option{
            color: #666;
            .textInput{
                margin-left: 5px;
                height: 30px;
            }
            
        }
        ._time{
           display: inline-block;
           margin-left: 350px;
           margin-right: 3px;
        }
        .datePicker{
            display: inline-block;
            width: 200px;
            height: 34px;
            border: 1px solid #eee;
            vertical-align: top;
            margin-left: 3px;
        }
        .search{
            display: inline-block;
            width: 64px;
            line-height: 32px;
            text-align:center;
            font-size: 14px;
            color: #3BEDF4;
            border: 1px solid #3BEDF4;
            border-radius: 4px;
            cursor: pointer;
            margin-left: 15px;
        }
        .tableList{
            margin-top: 40px;
            text-align: left;
            color: #666;
            table{
            width: 100%;
            .header{
                width: 100%;
                line-height: 30px;
                color: #0B4480;
                border-bottom: 1px solid #E0E0E0
            }
            td{
                line-height: 30px;
            }
            .type{
                width: 15%;
            }
            .target{
                width: 25%;
            }
            .time{
                width: 15%;
            }
            .money{
                width: 15%;
            }
            .desc{
                width: 25%;
            }
            }
        }
        .pagination{
            margin-top: 20px;
        }
    }
}
</style>
<template>
    <div class="walletTab">
        <div class="tab-content">
            <div class="select-option">
                <span>文章:</span><input type="text" class="textInput" placeholder="根据文章标题搜索"/>
                <span class="_time">发表日期:</span> <div class="datePicker"><DatePicker /></div>
                <div class="search">搜索</div>
            </div>
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
                    <tr>
                    <td class="type">{{this.$props.type}}</td>
                    <td class="target">qweqwewqewqewqeqqweq</td>
                    <td class="time">2017-12-12</td>
                    <td class="money">20171312</td>
                    <td lass="desc">转给苏老板</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div class="pagination">
                <Pagination :callback="changePage" :records="items" />
            </div>
        </div>   
    </div>
</template>
<script>
  import DatePicker from './DatePicker';
  import Pagination from './Pagination';

  export default{
    data(){
      return {
        items: 123,
        time: new Date()
      }
    },
    beforeMount(){
      console.log(this.$props.type);
    },
    props: ['type'],
    components: {
        Pagination, DatePicker
    },
    methods: {
        changePage(page){ // 翻页
            console.log(page);
        }
    }

  }
</script>
