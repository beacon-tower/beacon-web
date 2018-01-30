<style lang="less">
.articleList-menu{
  width: 100px;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
  .menu{
    position: relative;
    li{
      color: #333!important;
      &:hover{
        color: #fff!important;
        background: #333;
      }
      .menuItem{
        position: relative;
        .subMenu{
          border-radius: 8px;
          position: absolute;
          left: 100%;
          top: 0px;
          width: 100px;
          background: #fff;
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
    <div class="articleList-menu">
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
    props: ['isPublished'],
    methods: {
       showSubMenu: function(index){
         this.menuList[index]['selected'] = true;
       },
       hideSubMenu: function(index){
         this.menuList[index]['selected'] = false;
       }
    }

  }
</script>