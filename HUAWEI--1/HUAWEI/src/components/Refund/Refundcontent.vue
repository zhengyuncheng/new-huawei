<template>
  <div class="Refundcontent">
   <router-link to='/Refund' tag="div"> <div>退换货申请</div></router-link>
    <router-link to='/RefundReturnSchedule' tag="div"><div>退换货进度</div></router-link>
    <router-link to='/RefundDrawb' tag="div"><div>退款进度</div></router-link>
  </div>
</template>

<script>
</script>

<style scoped="scoped">
.Refundcontent{
  display: flex;
  margin-top: 0.46rem;
  position: fixed;
  top: 0;
  width: 100%;
}
.Refundcontent div{
  flex: 1;
  font-size: 0.16rem;
  height: 0.46rem;
  background-color: #FFFFFF;
  text-align: center;
  line-height: 0.46rem;
}


</style>
