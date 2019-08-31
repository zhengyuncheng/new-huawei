<template>
  <ul class="classification">
          <router-link :to="{name:'HwCategoryNewPage',params:{type_id:0}}"><li>新品</li></router-link>
          <router-link :to="{name:'HwCategorySpage',params:{pageId:1}}"><li>华为手机</li></router-link>
          <router-link to="HwCategoryTpage"><li>荣耀手机</li></router-link>
          <li @click="goTwo">智慧屏</li>
          <li @click="goThree">笔记本&电脑</li>
          <li @click="goTwo">智能穿戴</li>
          <li @click="goThree">智能家居</li>
          <li @click="goTwo">专属配件</li>
          <li @click="goThree">通用配件</li>
          <router-link :to="{name:'HwCategoryTpage',params:{pageId:1}}"><li>生态产品</li></router-link>
          <router-link :to="{name:'HwCategoryTpage',params:{pageId:2}}"><li>智能计算</li></router-link>
  </ul>
</template>

<script>
    export default {
        name: "CategoryClassification",
        methods:{
            goNew(){
                this.$router.push({name:"HwCategoryNewPage",params:{id:"9023323"}});
            },
            goTwo(){
                this.$router.push({name:"HwCategorySpage",params:{id:"9023"}});
            },
            goThree(){
                this.$router.push({name:"HwCategoryTpage",params:{id:"9023"}});
            }
        }
    }
</script>

<style scoped>
  .classification{
    padding: .11rem .07rem 0 .13rem;
    font-size:.136rem;
	font-weight: 550;
    width:26%;
    position:fixed;
  }
  li{
    color:#6a6a6a;
    line-height:.17rem;
    height:.17rem;
    margin-bottom:.27rem;
    cursor:pointer;
    color:#6a6a6a;
  }
  li:hover{
    color:red;
    border-right:.02rem solid red;
  }

</style>
