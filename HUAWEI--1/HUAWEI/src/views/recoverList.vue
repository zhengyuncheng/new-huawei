<template>
  <div class="recoverList">
    <recover-header></recover-header>
    <recover-listcontent></recover-listcontent>
  </div>

</template>

<script>
 import recoverListHeader from "../components/emptyrecoverList/recoverListHeader.vue"
 import recoverListContent from "../components/emptyrecoverList/recoverListContent.vue"

 export default{
   components:{
     "recover-header":recoverListHeader,
     "recover-listcontent":recoverListContent
   }
 }
</script>

<style scoped="scoped">
</style>
