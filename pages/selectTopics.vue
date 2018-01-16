<style lang="less">
.interest-wrap{
     h2{
        padding-top: 48px;
        text-align: center;
        font-size: 30px;
        color: #003C7A;
    }
    h3{
        font-size: 16px;
        line-height: 50px;
        margin-bottom: 10px;
        color: #AEAEAE;
        text-align: center;
    }
    #interest-1ist{
        width: 100%;
        margin: 1.25%;
        li{
            display: inline-block;
            vertical-align: top;
            background: #fff;
            margin: 1.25%;
            width: 30%;
            height: 140px;
            position: relative;
            cursor: pointer;
            div{
                line-height: 140px;
                text-indent: 20px;
                font-size: 18px;
                color: #003C7A;
                font{
                    color: #666
                }
            }
            .icon{
                width: 24px;
                height: 24px;             
                position: absolute;
                right: 20px;
                top: calc(50% - 12px);
            }
            .selected{
                background: url(../static/selected.png) no-repeat center
            }
            .unselected{
                background: url(../static/unselected.png) no-repeat center
            }
        }
    }
    .BACK{
        text-align: center;
    }  
}
   
</style>
<template>
    <div class="interest-wrap" style="height: 420px;">
      <h2>请选择你关注的话题</h2>
      <h3>让我们知道你更关注的话题</h3>
      <ul id="interest-1ist">
        <li v-for="item in items" @click='changeInterest(item.type)'>
            <div class="type">{{item.type}}, <font>{{item.text}}</font></div>
            <div :class="{'icon': true, 'selected': item.follow, 'unselected': !item.follow}" ></div>
        </li>
      </ul>
      <div class="BACK">
        <nuxt-link :to="{name:'index'}" class="back">立即前往 >>></nuxt-link>
       </div>
    </div>
</template>
<script>
  export default{
    layout: 'default',
    data(){
        return {
            items: [
                { type: '科技', text: '改变生活，改变你我', follow: true},
                { type: '金融', text: '让屌丝去哭', follow: true},
                { type: '创业', text: '为了小秘而奋斗', follow: true},
                { type: '运动', text: '生命在于运动', follow: true},
                { type: '情感', text: '爱你恨你，说出来', follow: true},
                { type: '上班', text: '升职加薪，二货同事', follow: true},
                { type: '校园', text: '那些一起捣蛋的日子', follow: true},
                { type: '读书', text: '做个文艺青年', follow: true},
                { type: '文艺', text: '做个文艺青年', follow: true},
                { type: '艺术', text: '品味人生', follow: true},
                { type: '历史', text: '以史为镜', follow: true},
                { type: '想法', text: '灵感来源', follow: true},
                { type: '娱乐', text: '那家伙又出轨了', follow: true},
                { type: '小说', text: '江湖恩怨情仇', follow: true},
                { type: '社会', text: '大千世界，了解你我', follow: false}
            ]
        }
    },
    methods:{
      changeInterest(type){
          console.log(666);
           this.items.forEach((e, i)=>{
              if(type === e.type){
                  e['follow']  = !e['follow'];
              }   
          });
      }
    }
  }
</script>