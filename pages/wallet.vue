<style lang="less">
.writer-wrap{
    margin-top: 40px;
    background: #fff;
    padding: 20px 20px;
    .top{
        position: relative;
        .icon{
            display:inline-block;
            width: 16px;
            height: 16px;
            margin-right: 10px;
            background: yellow;
            vertical-align: middle;
        }
        span{
            font-size: 14px;
            color: #666;
            text-indent: 40px;
            font{
                color: #004178;
                font-size: 20px;
            }
        }
        .historyEarn{
            position: absolute;
            right: 20px;
        }
    }
    .address{
        margin-top: 60px;
        color: #666666;
        font-size: 14px;
    }
}
   
</style>
<template>
    <div class="writer-wrap" style="height: 420px;">
        <div class="top">
            <div class="icon"></div>
            <span>我的烽火币 <font>500</font>枚</span>
            <span class="historyEarn">历史总计赚取100枚</span>
        </div>
        <div class="address">我的钱包：abcdefghijkfgdsifgifgdisufdisgfdilmn</div>
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