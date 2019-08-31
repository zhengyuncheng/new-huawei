<template>
  <div class="OrderCenterHeader">
    <mt-header fixed  title="订单中心">
      <router-link to="/myPage" slot="left">
        <mt-button ><img src="../../assets/images/img/back.png" alt="" class="OrderCenterHeaderImg"></mt-button>
      </router-link>
   <mt-button icon="cart" slot="right"><img src="../../assets/images/img/4.png" class="OrderCenterHeaderImg"></mt-button>
    </mt-header>
  </div>

</template>

<script>
</script>

<style scoped="scoped">
  .OrderCenterHeader .mint-header {
    background: #FFFFFF;
    color: #191919;
    font-size:0.21rem;
    height: 0.46rem;
    padding: 0 0.2rem;
  }
  .OrderCenterHeaderImg{
    width:0.27rem;
    height: 0.27rem;
		display: inline-block;
  }


</style>
