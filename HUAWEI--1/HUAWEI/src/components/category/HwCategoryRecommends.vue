<template>
  <div class="recommends" >
    <div>
      <h3 class="recommendFirst">{{data.recommedTitle}}</h3>
      <div class="hotPhones">
        <hw-category-single-phone v-for="(product, proid) in data.goods_list" :recommedId="recommedId" :key="product.goods_id" :goodId="product.goods_id" :data="product"></hw-category-single-phone>
      </div>
    </div>
  </div>
</template>

<script>
    import HwCategorySinglePhone from './HwCategorySinglePhone'
    export default {
        name: "HwCategoryRecommends",
        components:{
            'hw-category-single-phone':HwCategorySinglePhone
        },
        props:["data","recommedId"]
    }
</script>

<style scoped>
  .recommends h3{
    font-size:.13rem;
    text-align:center;
    padding-top:.2rem;
		font-weight: 400;
    padding-bottom:.15rem;
  }
  .hotPhones{
    display:flex;
    flex-wrap:wrap;
  }
</style>
