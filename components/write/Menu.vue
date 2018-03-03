<style lang="less" scoped>
.articleList-menu{
  width: 100px;
  cursor: pointer;
  z-index: 100000;
  .menu{
    position: relative;
    // border-radius: 6px!important;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;
    .iconfont{
      display: inline-block!important;
      line-height: 36px!important;
      font-size: 16px!important;
    }
    li{
      color: #333!important;
      background: #fff;
      font-size: 14px!important;
      line-height: 36px;
      text-align: center;
      &:hover{
        color: #eee!important;
        background: #333;
        .iconfont{
          color: #eee!important;
        }
      }
      .menuItem{
        position: relative;
        z-index: 100000;
        .subMenu{
          // border-radius: 6px!important;
          overflow-y: scroll;
          position: absolute;
          max-height: 300px;
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
          <li v-for="(item, index) in menuList" class="itemli" @mouseover="showSubMenu(index, $event)" :key="item.text" @mouseout="hideSubMenu(index)">
            <div class="menuItem" @click="item.fn()">
              <i :class="item.icon"></i>
                {{item.text }}
                <ul class="subMenu" v-show="item.selected">
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
import {showMessager} from '../../plugins/messager.js';

export default{
    data(){
      return {
        menuList: [
          {
            text: `${this.isPublished === 'published' ? '已发布' : '发布文章'}`,
            fn: this.isPublished === 'published' ? ()=>{} : ()=>this.publish(this),
            subMenu:[],
            icon: 'iconfont icon-aui-icon-paper',
            selected: false
          },
          {
            text: '移动文章',
            fn: ()=>{}, subMenu: this.typeList,
            subFun: this.move,
            icon: 'iconfont icon-yidong',
            selected: false
          },
          {
            text: '删除文章',
            fn: this.remove,
            subMenu:[],
            icon: 'iconfont icon-shanchu',
            selected: false
          }
        ]
      }
    },
    props: ['isPublished', 'id', 'show' , 'hideMenu', "typeList", "token", "deleteArticle", "publishSuccessCallback"],
    methods: {

       // 阻止冒泡
       stopPropagation: function(e){
         this.hideMenu();
         e.stopPropagation();
       },

        // 显示菜单按钮
       showSubMenu: function(index, event){

         // 子菜单排列次序（朝上/朝下）
         if(event.target.className === 'menuItem'){
            if(event.pageY && event.pageY + 300 > $(window).height()){
              $('.subMenu').css('top', '-264px');
            }else{
                $('.subMenu').css('top', '0px');
            };
         };

         this.menuList[index]['selected'] = true;
       },

       // 隐藏菜单按钮
       hideSubMenu: function(index){
         this.menuList[index]['selected'] = false;
       },

       // 移动文章到其他话题
       move: function(topicId){
         moveArticle(topicId, this.id, this.token).then(res=>{
           this.deleteArticle(this.id);
           showMessager.call(this, '移动成功！');
         }).catch(err=>{
           showMessager.call(this, '移动失败！', 'error');
         })
       },

        // 删除文章
       remove: function(){
         removeArticle(this.id, this.token).then(res=>{
           this.deleteArticle(this.id);
           showMessager.call(this, '删除成功！');
         }).catch(err=>{
           showMessager.call(this, '删除失败！', 'error');
         })
       },

       // 发布文章
       publish: (THIS)=>{
         publishArticle(THIS.id, THIS.token).then(res=>{
           THIS.publishSuccessCallback(THIS.id);
           showMessager.call(THIS, '发布成功！', 'error');
         }).catch(err=>{
           showMessager.call(THIS, '发布失败！', 'error');
         })
       }
    },
  }
</script>
