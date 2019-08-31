<template>
  <div class="RefundHeader">
    <Refund-header></Refund-header>
    <transition name="fade"> <router-view></router-view> </transition>
    <Refund-content></Refund-content>
  </div>
</template>

<script>
  import RefundHeader from "../components/Refund/RefundHeader.vue"
  import Refundcontent from "../components/Refund/Refundcontent.vue"

  export default {
    components: {
      "Refund-header": RefundHeader,
      "Refund-content": Refundcontent,
    }

  }
</script>

<style scoped="scoped">
  .RefundHeader{
    background:#f1f1f1;
  }

  /* 设置路由动画 */
   .fade-enter-active,
    .fade-leave-avtive {
      transition: all 1s
    }

    .fade-enter,
    .fade-leave-to {
      opacity: 0
    }
</style>
