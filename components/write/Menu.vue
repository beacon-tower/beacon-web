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
            <div class="menuItem" @click="item.fn()">
                {{item.text }}
                <ul class="subMenu" v-if="item.selected">
                  <li class="subItemLi" v-for="subItem in item.subMenu" @click="item.subFun(subItem.id)">{{subItem.name}}</li>
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
import { moveArticle, removeArticle, publishArticle}from '../../service/write.js';

export default{
    data(){
      return {
        menuList: [
          {text: `${this.isPublished ? '已发布' : '发布文章'}`, fn: `${this.isPublished ? ()=>{} : this.publish}`, subMenu:[], selected: false},
          {text: '移动文章', fn: ()=>{}, subMenu: this.typeList, subFun: this.move, selected: false},
          {text: '删除文章', fn: this.remove, subMenu:[], selected: false}
        ]
      }
    },
    props: ['isPublished', 'id', 'show' , 'hideMenu', "typeList", "token", "deleteArticle"],
    methods: {
       stopPropagation: function(e){  // 阻止冒泡
         this.hideMenu();
         e.stopPropagation();
       },
       showSubMenu: function(index){ // 显示菜单按钮
         this.menuList[index]['selected'] = true;
       },
       hideSubMenu: function(index){ // 隐藏菜单按钮
         this.menuList[index]['selected'] = false;
       },
       move: function(topicId){ // 移动文章到其他话题
         moveArticle(topicId, this.id, this.token).then(res=>{
           this.deleteArticle(this.id);
         })
       },
       remove: function(){ // 删除文章
         removeArticle(this.id, this.token).then(res=>{
           this.deleteArticle(this.id);
         })
       },
       publish: ()=>{ // 发布文章
         publishArticle(this.id, this.token).then(res=>{
           console.log(res.data); 
         })
       }
    },
  }
</script>