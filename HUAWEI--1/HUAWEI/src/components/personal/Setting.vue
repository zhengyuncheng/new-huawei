<template>
<div class="hwSetting">
  <header>
   <router-link to="/myPage"> <img src="../../assets/img/goleft.png" alt="goleft"></router-link>
    <p>设置</p>
  </header>
  <div class="accountCenter">
    <div class="settings">
      <p>账号中心</p>
      <img src="../../assets/img/jt.png" class="pic2">
    </div>
    <div class="settings">
      <p>实名认证</p>
      <img src="../../assets/img/jt.png" class="pic2">
    </div>
    <div class="settings">
      <p>收货地址</p>
      <img src="../../assets/img/jt.png" class="pic2">
    </div>
  </div>
  <div class="accountCenter">
    <div class="settings">
      <p>消息通知设置</p>
      <img src="../../assets/img/jt.png" class="pic2">
    </div>
    <div class="settings">
      <p>营销消息订阅</p>
      <img src="../../assets/img/jt.png" class="pic2">
    </div>
  </div>
  <div class="accountCenter">
    <div class="settings">
      <p>意见反馈</p>
      <img src="../../assets/img/jt.png" class="pic2">
    </div>
    <div class="settings">
      <p>关于商城</p>
      <img src="../../assets/img/jt.png" class="pic2">
    </div>
  </div>
  <div class="exit" @click="exit">
    退出登录
  </div>
</div>
</template>

<script>
    export default {
        name: "setting",
				methods:{
				  exit(){
				     let a = window.sessionStorage
				     a.removeItem("data")
				     a.removeItem("uphone")
				     this.$router.push({
				       name:"myPage"
				     })
				  }
				}
    }
</script>

<style scoped>
  img{
    border: none;
    display:block;
  }
  .hwSetting{
    height:100%;
    background:#f1f1f1;
  }
  header{
    width:100%;
    position:relative;
    background:white;
  }
  header img{
    width:.09rem;
    height:.15rem;
    position:absolute;
    margin-top:.14rem;
    margin-left:.21rem;
  }
  header p{
    font-size:.14rem;
    font-weight:600;
    text-align:center;
    line-height:.41rem;
  }
  .accountCenter{
    margin-top:.07rem;
  }
  .settings{
    font-size:.12rem;
    display:flex;
    justify-content:space-between;
    padding:.13rem .15rem;
    background:white;
    border-bottom:2px solid #f3f3f3;
  }
  .settings img{
    width: .1rem;
    height:.15rem;
  }
  .exit{
    font-size:.12rem;
    background:white;
    text-align:center;
    margin-top:.14rem;
    line-height:.38rem;
    color:#4c4c4c;
  }
</style>
