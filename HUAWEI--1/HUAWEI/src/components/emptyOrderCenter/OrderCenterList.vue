<template>
<div class="OrderCenterList">
 <router-link to='' tag="div"><div>全部</div></router-link>
 <router-link to='' tag="div"><div>待付款</div></router-link>
 <router-link to='' tag="div"><div>待收货</div></router-link>
 <router-link to='' tag="div"><div>已完成</div></router-link>
</div>

</template>

<script>
</script>

<style scoped="scoped">
.OrderCenterList{
  display: flex;
  font-size: 0.16rem;
  margin-top: 0.46rem;
  text-align: center;
  background: #FFFFFF;
  height: 0.46rem;
  line-height: 0.46rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}
.OrderCenterList div{
  flex:1;
}

</style>
