<template>
<div class="recoverListHeader">
<mt-header fixed  title="我的回收单">
      <router-link to="/myPage" slot="left">
        <mt-button ><img src="../../assets/images/img/back.png" alt="" class="OrderCenterHeaderImg"></mt-button>
      </router-link>
    </mt-header>
</div>
</template>

<script>
</script>

<style scoped="scoped">
.recoverListHeader .mint-header {
    background: #FFFFFF;
    color: #191919;
    font-size:0.21rem;
    height: 0.46rem;
    padding: 0 0.2rem;
    line-height: 0.46rem;
  }
 .recoverListHeader img{
    width:0.27rem;
    margin-top: 0.1rem;
    height: 0.27rem;
  }
</style>
