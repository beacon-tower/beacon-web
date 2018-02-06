<style lang="less">
    h1{
        font-size: 32px;
        line-height: 48px!important
    }
    h2{
        font-size: 24px;
        line-height: 36px!important;
    }
    h3{
        font-size: 18px;
        line-height: 29px!important;
    }
    h4{
        font-size: 16px;
        line-height: 24px!important;
    }
    p{
        font-size: 16px;
        line-height: 24px!important;
    }
    h5{
        font-size: 14px;
        line-height: 21px!important;
    }
    h6{
        font-size: 12px;
        line-height: 18px!important;
    }
    b, strong{
        font-weight: bolder!important;
    }
    i{
        font-style: italic!important;
    }
    s, strike, del {
        text-decoration: line-through!important;
    }
    #editorElem{
        height: 100%;
        .w-e-menu{
            vertical-align: middle;
            padding: 14px 15px;
            i{
                color: #333;
                font-size: 18px;
            }
        }
        .w-e-menu:hover{
            i{
                color: #fff;
            }
            background: #333
        }
    }
    .publish{
        width: 70px;
        text-align: center;
        line-height: 50px;
        top: 0;
        right: 30px;
        position: absolute;
        font-size: 18px;
        color: #333;
        font-weight: normal;
        cursor: pointer;
        &:hover{
            color: #fff;
            background: #333
        }
    }
    .preview{
         right: 100px;
    }
    .autosave{
        right: 170px;
    }
    .Preview{
        position: fixed;
        margin-top: 50px;
        min-width: 100%;
        left: 0;
        top: 0;
        z-index: 10002;
        border-top: 1px solid #eee;
        height: 100%;
        background: #fff;
        overflow-y: auto;
        .menu{
            height: 50px;
            margin-left: 100px;
            >div{
                display: inline-block;
                vertical-align: top;
                line-height: 30px;
                padding: 10px;
                text-decoration:underline;
                cursor: pointer;
                &:hover{
                    color: #67CFFF;
                }
            }
        }
        .content{
            width: 900px;
            padding: 20px;
            margin: 0px auto;
            margin-bottom: 100px;
            min-height: 1100px;
            background: #fff;
        }
    }
</style>
<template>
    <div style="position: relative">
        <div id="editorElem" style="text-align:left,"></div>
        <div class="publish" @click="publishPaper">发布</div>
        <div class="publish preview" @click="preview">预览</div>
        <div class="publish autosave" @click="autosave">保存</div>
        <div class="Preview" v-if="previewShow">
            <div class="menu">
                <div @click="toggleShow">返回</div>
                <div>发布文章</div>
            </div>
            <div class="content" v-html="contentHTML"></div>
        </div>
    </div>
</template>

<script>
    /*
    * @desc 编辑器内容输入模块 -- 单独提出来
    * @author lihongkai
    */
    import EVENT from '../EventBus.js';

    export default {
      data () {
        return { 
          contentHTML: '',  // 输入栏里的内容
          Editor: '' , // 编辑器缓存对象
          previewShow: false, // 预览
        }
      },
      props: ['autosave'],
      methods: {
          // 发布文章
          publishPaper: function () {  
            // window.localStorage.setItem('previewContent', this.contentHTML);
            // window.open('/articlepreview');
         },
         preview: function() { // 预览
            window.localStorage.setItem('previewContent', this.contentHTML);
            this.toggleShow();
         },
         // 显示/隐藏 预览
         toggleShow: function(){ 
            this.previewShow = !this.previewShow;
         }
      },
      destroyed(){
           window.localStorage.setItem('previewContent', '');
           // EVENT.off('CONTENT_HTML');
      },
      mounted(){
          var E = require('wangeditor');
          var editor = new E('#editorElem');

          // 自定义菜单配置
          editor.customConfig.uploadImgShowBase64 = true;   // 使用 base64 保存图片

          editor.customConfig.menus = [
                'head',
                'bold',
                'italic',
                'strikeThrough',  // 删除线
                'link',  // 插入链接
                'justify',  // 对齐方式
                'quote',  // 引用
                'image',  // 插入图片
                'undo',  // 撤销
                'redo'  // 重复
          ];
          editor.customConfig.onchange = (html) => {
            this.contentHTML = html;
            setTimeout(()=>{
                if(html === this.contentHTML){
                    this.autosave();
                }
            }, 5000);
          };

          editor.customConfig.onblur = () =>{
              this.autosave();
          };

          editor.create();
          this.Editor = editor;  // 缓存对象

          // 初始化样式
          let height = $(window).height() - 200;
          $('.w-e-text-container').css('height', height + "px").css('border', 'none');
          $('.w-e-toolbar').css('height', '50px').css('border', 'none').css('background', '#d9d9d9').css('border-bottom', '1px solid #ccc');

          // 接收文本信息 填入编辑器
          EVENT.$on('CONTENT_HTML', function(data){
            editor.txt.html(data);
          });
      }
    }
</script>
