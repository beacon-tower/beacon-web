<style lang="less">
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
           contentHTML: 'qwe'
        }
    },
    created(){
        this.contentHTML = this.$store.commit('article/getHTML'); 
    },
    components: {
      
    },
    methods:{
    
    }
  }
</script>