<style lang="less" scoped>
.articleList-menu{
  width: 100px;
  cursor: pointer;
  z-index: 100000;
  .menu{
    position: relative;
    // border-radius: 6px!important;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;
    li{
      color: #333!important;
      background: #fff;
      font-size: 14px!important;
      line-height: 36px;
      text-align: center;
      &:hover{
        color: #eee!important;
        background: #333;
      }
      .menuItem{
        position: relative;
        z-index: 100000;
        .subMenu{
          // border-radius: 6px!important;
          overflow: hidden;
          position: absolute;
          right: 100%;
          top: 0px;
          width: 100px;
          background: #fff;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;
        }
      }
    }
    &:before{
          content: "";
          position: absolute;
          display: inline-block;
          right: 12px;
          top: -9px;
          border-left: 9px solid transparent;
          border-right: 9px solid transparent;
          border-bottom: 9px solid #fff;        
    }
  }
}
</style>

<template>
    <div class="articleList-menu" @click="stopPropagation" v-show="show">
       <ul class="menu">
          <li v-for="(item, index) in menuList" class="itemli" @mouseover="showSubMenu(index)" :key="item.text" @mouseout="hideSubMenu(index)">
            <div class="menuItem">
                {{item.text }}
                <ul class="subMenu" v-if="item.selected">
                  <li class="subItemLi" v-for="subItem in item.subMenu">{{subItem}}</li>
                </ul>
            </div>
          </li>
        </ul>
    </div>
</template>

<script>
/**
@desc 文章显示列表组件，这里对菜单组件进行了二级拓展，供后续添加新功能使用
@author lihongkai
**/
export default{
    data(){
      return {
        menuList: [
          {text: '发布文章', fn: 'fn', subMenu:[], selected: false},
          {text: '移动文章', fn: 'fn', subMenu:['科技', '社会'], subFun: 'subFN', selected: false},
          {text: '删除文章', fn: 'fn', subMenu:[], selected: false}
        ]
      }
    },
    props: ['isPublished', 'id', 'show' , 'hideMenu'],
    methods: {
       stopPropagation: function(e){  // 阻止冒泡
         this.hideMenu();
         e.stopPropagation();
       },
       showSubMenu: function(index){ 
         this.menuList[index]['selected'] = true;
       },
       hideSubMenu: function(index){
         this.menuList[index]['selected'] = false;
       }
    },
  }
</script>