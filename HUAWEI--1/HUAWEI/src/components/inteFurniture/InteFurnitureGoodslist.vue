<template>
  <div class="goodslist">
    <hw-inte-furniture-goods></hw-inte-furniture-goods>
    <hw-inte-furniture-goods></hw-inte-furniture-goods>

  </div>
</template>

<script>
    import InteFurnitureGoods from './InteFurnitureGoods'
    export default {
        name: "InteFurnitureGoodslist",
        components:{
            'hwInteFurnitureGoods':InteFurnitureGoods
        }
    }
</script>

<style scoped>
  .goodslist{
    width:100%;
    display:flex;
    flex-wrap:wrap;
		justify-content: center;
		align-items: center;
		margin-left: .025rem;
		margin-top: .05rem;
  }
</style>
