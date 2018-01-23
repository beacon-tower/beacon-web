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
    .popup{
        position:fixed;
        width: 100%;
        height: 100%;
        overflow-y:auto;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.45);
        z-index: 666;
        .content{
          position: relative;
          width: 868px;
          height: 780px;
          margin: 50px auto;
          color: rgba(0, 0, 0, 0.870588);
          transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
          box-sizing: border-box;
          font-family: Roboto, sans-serif;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
          border-radius: 2px;
          text-align: center;
          background-color: rgb(255, 255, 255);
          padding: 30px 10%;
          h5{
            text-align:center;
            line-height: 80px;
            color: #003C7A
          }
          .close{
            position: absolute;
            right: 40px;
            top: 20px;
            font-size: 20px;
            cursor:pointer;
          }
          .inputContainer{
            min-height: 60px;
            span{
              display: inline-block;
              width: 10%;
              text-align: left;
            }
            .walletIput{
              width: 90%;
            }
            .tip{
              text-align:left;
              color: #AEAEAE;
              line-height: 40px;
              text-indent: 10%;
            }
          }
          .tradeButton{
            width: 240px;
            height: 60px;
            margin: 40px auto;
            cursor: pointer;
            background: url('../assets/images/trade.png') center no-repeat
          }
        }
    }
}

</style>
<template>
    <div class="writer-wrap" style="height: 420px;">
        <div class="top">
            <div class="icon"></div>
            <span>我的烽火币 <font>500</font>枚</span>
            <span class="historyEarn">历史总计赚取100枚</span>
            <i class="button" @click="toggleTradeCard">转出</i>
        </div>
        <div class="address">我的钱包：abcdefghijkfgdsifgifgdisufdisgfdilmn</div>
        <div>

        <tabs :options ="{useUrlFragment:false}">

            <!-- 转账记录 -->
            <tab prefix='<i class="iconfont">&#xe6e7;</i>' name='<span>赚取记录</span>' >
                <div class="tab-content">赚取记录</div>
                <Pagination :callback="changePage" :records="items"/>
            </tab>

            <!-- 转账记录 -->
            <tab prefix='<i class="iconfont">&#xe6e7;</i>' name='<span>转账记录</span>'>
                <div class="tab-content">
                    <div class="select-option">
                        <span>文章:</span><input type="text" id="searchArticle" class="textInput" placeholder="根据文章标题搜索"/>
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
                            <td class="type">转账</td>
                            <td class="target">qweqwewqewqewqeqqweq</td>
                            <td class="time">2017-12-12</td>
                            <td class="money">20171312</td>
                            <td lass="desc">转给苏老板</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="pagination">
                      <Pagination :callback="changePage" :records="items"/>
                    </div>
                </div>
            </tab>
        </tabs>

        <!-- 弹出框，转账 -->
        <div class="popup" v-if="tradeShow">
          <div class="content">
            <h5>资产转出</h5>
            <div class="close" @click="toggleTradeCard">X</div>
            <div class="inputContainer">
              <span>发送者</span>
              <input type="text" id="sendPerson" class="textInput walletIput" style="color:#AEAEAE "/>
            </div>
            <div class="inputContainer">
              <span>接受者</span>
              <input type="text" id="sendPerson" class="textInput walletIput" style="color:#AEAEAE "/>
            </div>
            <div class="inputContainer">
              <span>金额</span>
              <input type="text" id="sendPerson" class="textInput walletIput" style="color: #129EFD"/>
            </div>
            <div class="inputContainer">
              <span>费用</span>
              <input type="text" id="sendPerson" class="textInput walletIput"　style="color: #129EFD "/>
            </div>
            <div class="inputContainer">
              <span>备注</span>
              <textarea id="sendPerson" class="textInput walletIput"　style="color: #AEAEAE; height: 170px "/>
              <div class="tip">请确保您正在发送XAS给正确地址,该操作无法撤销</div>
            </div>
            <div class="tradeButton"></div>
          </div>
        </div>
</div>
    </div>
</template>
<script>
  import {Tabs, Tab} from 'vue-tabs-component';
  import DatePicker from '../components/DatePicker';
  import Pagination from '../components/Pagination';

  export default{
    layout: 'default',
    data(){
        return {
            items: 123,
            tab1: 1,
            tabs: 2,
            tradeShow: false
        }
    },
    components: {
        Tabs, Tab, DatePicker, Pagination
    },
    methods:{
      toggleTradeCard(){
        this.tradeShow = !this.tradeShow;
      },
      changePage(e){
        console.log('father', e);
      }
    }
  }
</script>
