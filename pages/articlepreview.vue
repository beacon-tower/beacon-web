<style lang="less" >
.Preview{
        position: fixed;
        margin-top: 50px;
        min-width: 100%;
        left: 0;
        top: 0;
        z-index: 10002;
        border-top: 1px solid #eee;
        height: 100%;
        background: #fff;
        overflow-y: auto;
        .content{
            width: 1100px;
            padding: 50px;
            margin: 0px auto;
            margin-bottom: 100px;
            min-height: 1100px;
            background: #fff;
        }
        h1{
            font-size: 32px;
            line-height: 48px!important
        }
        h2{
            font-size: 24px;
            line-height: 36px!important;
        }
        h3{
            font-size: 18px;
            line-height: 29px!important;
        }
        h4{
            font-size: 16px;
            line-height: 24px!important;
        }
        p{
            font-size: 16px;
            line-height: 24px!important;
        }
        h5{
            font-size: 14px;
            line-height: 21px!important;
        }
        h6{
            font-size: 12px;
            line-height: 18px!important;
        }
        b, strong{
            font-weight: bolder!important;
        }
        i{
            font-style: italic!important;
        }
        s, strike, del {
            text-decoration: line-through!important;
        }
    }
</style>
<template>
    <div class="Preview">
         <div class="content" v-html="contentHTML"></div>
    </div>
</template>
<script>
  export default{
    layout: 'default',
    data(){
        return {
           contentHTML: ''
        }
    },
    mounted(){
       this.contentHTML = window.localStorage.getItem('previewContent');
    },
    components: {
      
    },
    methods:{
    
    }
  }
</script>