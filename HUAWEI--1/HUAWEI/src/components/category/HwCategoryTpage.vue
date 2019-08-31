<template>
  <div>
    <hw-category-recommends v-if="data" v-for="(productsList, prolistid) in data" :key="productsList.recommedId" :recommedId= "productsList.recommedId" :data="productsList"></hw-category-recommends>
  </div>
</template>

<script>
    import api from "../../apis/api"
    import HwCategoryRecommends from './HwCategoryRecommends'

    export default {
        name: "HwCategoryTpage",
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
            // api.getCategoryUrl2((data)=>{
            //     this.data= data.productsList;
            // }),
                // this.getCategoryPageId(this.$route.params.pageId)

                // api.getCategoryUrl1((data)=>{
                //     this.data= data.productsList;
                // }),

                api.getCategoryByCates((data)=>{
                    this.data= data.data.categoryList;
                })
        },
        methods:{
            getCategoryPageId(pageId){
              console.log(pageId)
        //         switch(pageId){
        //             case '1':
        //                 return {api.getCategoryUrl1((data)=>{this.data= data.productsList})};
        //             case '2':
        //                 return{api.getCategoryUrl2((data)=>{this.data= data.productsList})};
        //
        //             case '3':
        //                 return {
        //
        //                 }
        //
        //         }
            }
        },
        // created(){
        //     this.getCategoryPageId(this.$route.params.pageId)
        //     // this.detail= this.getCategoryPageId(this.$route.params.pageId)
        // }
        // beforeRouteUpdate(to,from,next){
        //     this.detail= this.getCategoryPageId(to.params.pageId)
        //     next();
        // }
    }
</script>

<style scoped>

</style>
