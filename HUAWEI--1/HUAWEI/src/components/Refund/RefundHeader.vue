<template>
  <div class="RefundHeader">
      <mt-header fixed  title="退货/退款">
      <router-link to="/myPage" slot="left">
        <mt-button ><img src="../../assets/images/img/back.png" alt="" class="OrderCenterHeaderImg"></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>

</script>

<style scoped="scoped">

 .RefundHeader .mint-header {
      background: #FFFFFF;
      color: #191919;
      font-size:0.21rem;
      height: 0.46rem;
      padding: 0 0.2rem;
      line-height: 0.46rem;
    }
   .RefundHeader img{
      width:0.27rem;
      margin-top: 0.1rem;
      height: 0.27rem;
    }
</style>
