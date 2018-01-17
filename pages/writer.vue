<style lang="less">
.writer-wrap{

}
   
</style>
<template>
    <div class="writer-wrap" style="height: 420px;">
        这是写文章
    </div>
</template>
<script>
  export default{
    layout: 'default',
    data(){
        return {
            items: 123
        }
    },
    methods:{
      changeInterest(type){
           this.items.forEach((e, i)=>{
              if(type === e.type){
                  e['follow']  = !e['follow'];
              }   
          });
      }
    }
  }
</script>