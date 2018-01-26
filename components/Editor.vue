<style lang="less">
    #editorElem{
        height: 100%;
        .w-e-menu{
            vertical-align: middle;
            padding: 14px 15px;
            i{
                font-size: 18px;
            }
        }
    }
    .publish{
        width: 100px;
        text-align: center;
        line-height: 50px;
        top: 0;
        right: 30px;
        position: absolute;
        font-size: 18px;
        color: #999;
        cursor: pointer;
        &:hover{
            color: #fff;
            background: #333
        }
    }
</style>
<template>
    <div style="position: relative">
        <div id="editorElem" style="text-align:left,"></div>
        <div class="publish" @click="getContent">发布文章</div>
    </div>
</template>

<script>
    export default {
      data () {
        return { 
          editorContent: '',  // 输入栏里的内容
          Editor: ''  // 编辑器缓存对象
        }
      },
      methods: {
          getContent: function () {  // 查看内容
            console.log(this.Editor.txt.html());
            console.log(this.Editor.txt.text());
        }
      },
      mounted(){
          var E = require('wangeditor');
          var editor = new E('#editorElem');

          // 自定义菜单配置
          editor.customConfig.uploadImgServer = '/upload'; // 上传图片到服务器
          editor.customConfig.menus = [
                'head',
                'bold',
                'italic',
                'underline',
                'strikeThrough',  // 删除线
                'link',  // 插入链接
                'justify',  // 对齐方式
                'quote',  // 引用
                'image',  // 插入图片
                'code',  // 插入代码
                'undo',  // 撤销
                'redo'  // 重复
          ];

          editor.customConfig.onchange = (html) => {
            this.editorContent = html
          };

          editor.create();
          this.Editor = editor;  // 缓存对象

          // 初始化样式
          let height = $(window).height() - 200;
          $('.w-e-text-container').css('height', height + "px").css('border', 'none');
          $('.w-e-toolbar').css('height', '50px').css('border', 'none').css('background', '#d9d9d9').css('border-bottom', '1px solid #ccc');
      }
    }
</script>
