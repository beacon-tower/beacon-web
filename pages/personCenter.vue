<style lang="less">
  @import "../assets/less/style_variable";
  .person-center-wrap {
    .line-title {
       color: @graycolor;
       padding-bottom: 10px;
       border-bottom:1px solid @linecolor;
       margin-bottom: 20px;
    }
    .line-hr{
      border: none;
      border-bottom:1px solid @linecolor;
      margin:20px 0;
    }
    .person-img{
      width: 75px;
      display: block;
      margin-bottom: 15px;
    }
    .choose-btn{
      width: 73px;
      height: 30px;
      line-height: 30px;
      background-color: #fff;
      .boder_radius(18px);
    }
    .person-form{
      color: @graycolor;
      .form-icon-group {
         margin-bottom: 30px;
      }
      .form-label{
         width: 83px;
         display: inline-block;
      }
      .input-text{
        width: 280px;
      }
      .imme_update{
        width: 270px;
        margin-left: -25px;
        margin-bottom: 150px;
      }
    }
  }
</style>
<template>
  <div class="main-wrap person-center-wrap">
    <h4 class="line-title"><i class="iconfont icon-jieyibiaozhi1"></i> 基本资料</h4>
    <img src="../assets/images/person-center-pic.png" class="person-img" alt="">
    <button type="button" class="primary-btn choose-btn">选择</button>
    <hr class="line-hr">
    <form action="" class="person-form">
      <div class="form-icon-group">
        <label for="" class="form-label">昵称</label>
        <input type="text" class="input-style input-text">
      </div>
      <div class="form-icon-group">
        <label for="" class="form-label">性别</label>
        <input type="radio">男    <input type="radio" style="margin-left: 90px">女
      </div>
      <div class="form-icon-group">
        <label for="" class="form-label">出生日期</label>
        <input type="text" class="input-style input-text">
      </div>
      <div class="form-icon-group">
        <label for="" class="form-label" style="vertical-align: top">个人简介</label>
        <textarea class="input-style" style="width: 430px;height: 150px;"></textarea>
      </div>
      <h4 class="line-title"><i class="iconfont icon-web-icon-"></i> 电话号码</h4>
      <div class="form-icon-group">
        <label for="" class="form-label">手机</label>
        <input type="text" class="input-style input-text">
      </div>
      <div class="form-icon-group">
        <label for="" class="form-label">邮箱</label>
        <input type="text" class="input-style input-text">
      </div>
      <img src="../assets/images/imme_update.png" class="imme_update">
    </form>
  </div>
</template>
<script>
  export default{}
</script>
