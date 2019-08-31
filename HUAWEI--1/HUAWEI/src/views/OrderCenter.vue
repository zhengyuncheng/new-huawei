<template>
  <div>
    <Ordercenter-header></Ordercenter-header>
     <Ordercenter-list></Ordercenter-list>
    <router-view></router-view>
    <Ordercenterr-hot></Ordercenterr-hot>

  </div>
</template>

<script>
import OrderCenterHeader from "../components/emptyOrderCenter/OrderCenterHeader.vue"
import OrderCenterContent from "../components/emptyOrderCenter/OrderCenterContent.vue"
import OrderCenterrHot from "../components/emptyOrderCenter/OrderCenterrHot.vue"
import OrderCenterList from "../components/emptyOrderCenter/OrderCenterList.vue"



export default{
components:{
  "Ordercenter-header":OrderCenterHeader,
  "Ordercenter-content":OrderCenterContent,
  "Ordercenterr-hot":OrderCenterrHot,
  "Ordercenter-list":OrderCenterList
}
}
</script>

<style>

</style>
