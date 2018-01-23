<style>
    .VuePagination, .selectPage{
        display: inline-block;
        vertical-align: bottom;
    }
    .VuePagination__count{
        display: none
    }
    .toPage{
        width: 42px;
        height: 28px;
        border: 1px solid #dee2e6;
        margin-top: 2px;
    }
    .totalPage{
        display: inline-block;
        margin: 0 10px;
        margin-top: 2px;
    }
    .skipPage{
        width: 42px;
        height: 28px;
        border: 1px solid #dee2e6;
        background: #fff;
        margin-top: 2px;
    }
</style>
<template>
    <div class="paginationContainer">
        <Pagination :records="records" @paginate="callback" :per-page="perPage"  ref="PN"/>
        <div class="selectPage">
            <span class="totalPage">共{{Math.ceil(records / perPage)}}页</span>
            第 <input type="number" class="toPage"  v-model="inputPage"/> 页 <button class="skipPage" @click="skipPage">跳转</button>
         </div>
    </div>
</template>
<script>
import {Pagination} from 'vue-pagination-2';

  export default{
    data(){
      return {
        inputPage: 1,
        perPage: 12
      }
    },
    components: {
        Pagination
    },
    props: ['records', 'callback' ],
    beforeMount(){
         console.log(this.$props.records);
    },
    methods: {
        skipPage(){
            this.$refs.PN.setPage(this.inputPage);
        }
    }

  }
</script>
