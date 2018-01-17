<style lang="less">
.writer-wrap{
    margin-top: 40px;
    background: #fff;
    padding: 20px 20px;
    .top{
        position: relative;
        .icon{
            display:inline-block;
            width: 20px;
            height: 20px;
            margin-right: 10px;
            background: url(../assets/images/fire_coin.png) center;
            vertical-align: middle;
        }
        span{
            font-size: 14px;
            margin-top: 4px;
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
        .button{
            display: inline-block;
            width: 60px;
            line-height: 28px;
            text-align:center;
            font-size: 14px;
            color: #3BEDF4;
            border: 1px solid #3BEDF4;
            border-radius: 4px;
            cursor: pointer;
            margin-left: 15px;
        }
    }
    .address{
        margin-top: 60px;
        color: #666666;
        font-size: 14px;
    }
    .tabs-component-tabs{
        border-bottom: 1px solid #E0E0E0;
    }
    li.tabs-component-tab{
        display: inline-block;
        margin-top: 30px;
        width: 162px;
        text-align: center;
        line-height: 40px;
        i{
            color: #666;
            padding-right: 4px;
        }
       span{
           color: #666;
           text-indent: 50px;
       }
       &.is-active{
           border-bottom: 2px solid  #003C7A;
          span{
           color: #003C7A;
          }
          i{
              color: #003C7A;
          }
       }
    }
    .tab-content{
        margin-top: 40px;
        .select-option{
            color: #666;
            #searchArticle{
                margin-left: 5px;
                height: 30px;
            }
        }
    }
    .popup{
        position:absolute;
        width: 100%;
        height: 100%;
        left: -100%;
        height: -5
    }
}
   
</style>
<template>
    <div class="writer-wrap" style="height: 420px;">
        <div class="top">
            <div class="icon"></div>
            <span>我的烽火币 <font>500</font>枚</span>
            <span class="historyEarn">历史总计赚取100枚</span>
            <i class="button">转出</i>
        </div>
        <div class="address">我的钱包：abcdefghijkfgdsifgifgdisufdisgfdilmn</div>
        <div>
    
        <tabs :options ="{useUrlFragment:false}">
            <tab prefix='<i class="iconfont">&#xe6e7;</i>' name='<span>赚取记录</span>' >
                <div class="tab-content">赚取记录</div>
            </tab>
            <tab prefix='<i class="iconfont">&#xe6e7;</i>' name='<span>转账记录</span>'>
                <div class="tab-content">
                    <div class="select-option">
                        <span>文章:</span><input type="text" id="searchArticle" class="textInput"/>
                    </div>
                </div>
            </tab>
        </tabs>

        <div class="popup">弹出层</div>
</div>
    </div>
</template>
<script>
  import {Tabs, Tab} from 'vue-tabs-component';
  export default{
    layout: 'default',
    data(){
        return {
            items: 123,
            tab1: 1,
            tabs: 2
        }
    },
    components: {
        Tabs, Tab
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