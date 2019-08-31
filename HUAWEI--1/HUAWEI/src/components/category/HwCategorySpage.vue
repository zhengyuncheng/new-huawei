<template>
  <div>
    <hw-category-recommends v-if="data" v-for="(productsList, prolistid) in data" :key="prolistid" :prolistid= "prolistid" :data="productsList"></hw-category-recommends>
  </div>
</template>

<script>
    import api from "../../apis/api"
    import HwCategoryRecommends from './HwCategoryRecommends'
    export default {
        name: "HwCategorySpage",
        data(){
            return{
                data:{},
                detail:{}
            }
        },
        components:{
            'hw-category-recommends':HwCategoryRecommends
        },
        created(){
            // api.getCategoryUrl1((data)=>{
            //     this.data= data.productsList;
            // }),
            api.getCategoryByCate((data)=>{
                this.data= data.data.categoryList;
            })
        //api.getCategoryUrl2((data)=>{
        // this.data= data.productsList;
          // })
        }

    }
</script>

<style scoped>

</style>
