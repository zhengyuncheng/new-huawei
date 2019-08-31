<template>
<div>
  <shop-cart-header></shop-cart-header>
  <empty-shopCar></empty-shopCar>
  <hot-prouduct></hot-prouduct>
  <hw-footer></hw-footer>
</div>
</template>

<script>
   import Header from "../components/emptyShopCar/Header"
   import hotProuduct from "../components/emptyShopCar/hotProuduct"
   import emptyshopCar from "../components/emptyShopCar/emptyshopCar"
   import Footer from '../components/common/Footer'

  export default{
    components:{ 
      "hwFooter":Footer,
      "shop-cart-header":Header,
      "hot-prouduct":hotProuduct,
     "empty-shopCar":emptyshopCar
    }
  }
</script>

<style>
</style>
