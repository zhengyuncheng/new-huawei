<template>
  <div class="addShopCarHeader">
    <mt-header fixed  title="购物车">
      <router-link to="/" slot="right">
        <mt-button class="addHeaderText">编辑</mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
</script>
<!-- .mint-header使用会重名 -->
<style scoped="scoped">
 .addShopCarHeader .mint-header{
    height: 0.46rem;
    width:100%;
    background-color: #ffffff;
    color: #631919;
    font-size: 0.21rem;
    padding: 0 0.16rem;
    text-align: center;
    line-height: 0.46rem;
  }
  .addHeaderText{
     color: #888888;
     font-size: 0.17rem;
  }
</style>
