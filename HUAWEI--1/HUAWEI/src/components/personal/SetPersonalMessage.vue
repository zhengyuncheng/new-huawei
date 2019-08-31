<template>
<div class="SetPersonalMessage">
  <header>
    <router-link to="/"><img src="../../assets/img/goleft1.png" alt="goleft"></router-link>
    <div class="figer">
      <img src="../../assets/img/figer.png" alt="头像">
      <p>未设置昵称 > </p>
      <span>189****9909</span>
    </div>
  </header>
  <!-- settings -->
  <div class="accountCenter accoutCenterT">
    <h3 class="chooseTitle">账号与安全</h3>
    <div class="settings">
      <p>账号</p>
      <img src="../../assets/img/jt.png" class="pic2">
    </div>
    <div class="settings set">
      <p>账号保护</p>
      <span>已关闭</span>
      <img src="../../assets/img/jt.png" class="pic2">
    </div>
    <div class="settings">
      <p>修改密码</p>
      <img src="../../assets/img/jt.png" class="pic2">
    </div>
  </div>
  <div class="accountCenter   accoutCenterT">
    <h3 class="chooseTitle">设置</h3>
    <router-link to="/setting">
      <div class="settings">
        <p>设置</p>
        <img src="../../assets/img/jt.png" class="pic2">
      </div>
    </router-link>
  </div>
  <div class="accountCenter">
    <h3 class="chooseTitle"></h3>
    <div class="exit">
      退出账号
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "SetPersonalMessage"
    }
</script>

<style scoped>
  /* header */
  img{
    border: none;
    display:block;
  }
  .SetPersonalMessage{
    height:100%;
    background:#f1f1f1;
  }
  header{
    width:100%;
    height:2.46rem;
    background:#6096dc;
    padding-top:.25rem;
  }
  header img{
    width:.1rem;
    height:.15rem;
    margin-left:.17rem;
  }
  .figer{
    width:1.05rem;
    height:1.06rem;
    margin:.55rem auto;
    text-align:center;
  }
  .figer img{
    width:.68rem;
    height:.68rem;
    border-radius:50%;
  }
  .figer p{
    font-size:.15rem;
    color:#f6fecb;
  }
  .figer span{
    display:block;
    font-size:.09rem;
    color:#a1c5f9;
  }
  .accountCenter{
    border-top:1px solid #cecdd2;
  }
  .accoutCenterT{
    background:white;
  }
  .accountCenter .chooseTitle{
    width:100%;
    height:.38rem;
    font-size:.13rem;
    color:#7f7e83;
    line-height:.38rem;
    padding-left:.15rem;
    background:#f1f1f1;
    border-bottom:1px solid #cecdd2;
  }
  .settings{
    font-size:.12rem;
    display:flex;
    justify-content:space-between;
    padding:.13rem .15rem .13rem 0;
    background:white;
    margin-left:.15rem;
    color:black;
  }
  .accountCenter .set{
    border-top:1px solid #cecdd2;
    border-bottom:1px solid #cecdd2;
    position:relative;
  }
  .settings span{
    color:#8d8d8d;
    position:absolute;
    left:80%;
  }
  .settings img{
    width: .1rem;
    height:.15rem;
  }
  .exit{
    font-size:.12rem;
    background:white;
    text-align:center;
    height:.38rem;
    line-height:.38rem;
    color:#fe3b00;
    border-bottom:1px solid #d2d2d4;
  }
</style>
