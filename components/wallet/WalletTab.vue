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
           margin-left: 150px;
           margin-right: 3px;
        }
        ._datePicker{
            display: inline-block;
            height: 34px;
            vertical-align: top;
            margin-left: 3px;
            width: 420px;
            .datepicker-range .datepicker-popup{
                width: 420px
            }
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
        .wallet-tab-card{
            width: 100%;
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
                <span class="_time">发表日期:</span>
                <div class="_datePicker">
                    <VueDatepickerLocal v-model="range" range-separator="至" />
                </div>
                <div class="search">搜索</div>
            </div>
            <div class="wallet-tab-card" v-if="this.$props.type === '赚取'"> <EarnTab /></div>
            <div class="wallet-tab-card" v-else><TransTab /></div>
            <div class="pagination">
                <Pagination :callback="changePage" :records="items" />
            </div>
        </div>   
    </div>
</template>
<script>
  import Pagination from '../Pagination';
  import VueDatepickerLocal  from 'vue-datePicker-Local';
  import TransTab from './Trans.vue';
  import EarnTab from './Earn.vue';

  export default{
    data(){
      return {
        items: 123,
        range: [new Date(), new Date()],
      }
    },
    beforeMount(){
      console.log(this.$props.type);
    },
    props: ['type'],
    components: {
        Pagination, VueDatepickerLocal, TransTab, EarnTab
    },
    methods: {
        changePage(page){ // 翻页
            console.log(page);
        }
    }

  }
</script>
