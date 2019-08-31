<template>
  <div class="digHeader">
    <mt-header fixed title="【数码惠】华为商城">
      <router-link to="/index" slot="left">
         <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
</script>

<style scoped="scoped">
  .digHeader{
    width: 100%;
  }
 .digHeader .mint-header{
    height:0.5rem;
    font-size: .17rem;
    background-color: #ffffff;
    color: #030303;
		line-height: .17rem;
  }
 .digHeader .mint-header img{
    width: .2rem;
    height: .2rem;
  }

</style>
