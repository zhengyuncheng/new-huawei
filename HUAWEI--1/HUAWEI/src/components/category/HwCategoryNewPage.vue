<template>
  <div>
    <hw-category-product-recommend :data="recommend"></hw-category-product-recommend>
    <hw-category-recommends v-if="data" v-for="(productsList, prolistid) in data" :key="prolistid" :prolistid= "prolistid" :data="productsList"></hw-category-recommends>
  </div>

</template>

<script>
    import HwCategoryProductRecommend from './HwCategoryProductRecommend'
    import HwCategoryRecommends from './HwCategoryRecommends'
    import api from "../../apis/api"

    export default {
        name: "hwCategoryNewPage",
        data(){
            return{
                data:{},
                recommend:{}
            }
        },
        components:{
            'hw-category-product-recommend':HwCategoryProductRecommend,
            'hw-category-recommends':HwCategoryRecommends
        },
      //获取数据
         created(){
          api.getRecommend((data)=>{
            this.recommend= data.recommend;
          }),
          api.getCategoryNew((data)=>{
              this.data= data.data.categoryList;
          })
        }
    }
</script>

<style scoped>

</style>
