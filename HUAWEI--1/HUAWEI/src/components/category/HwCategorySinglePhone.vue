<template>
  <router-link class="singlePhone" :to="'/shopDetails/'+data.goods_id">
    <img :src="data.goods_src">
    <p>{{data.goods_name}}</p>
  </router-link>

</template>

<script>
    export default {
        name: "HwCategorySinglePhone",
        props:["data","recommedId","goodId"],//每一个single,
				created(){
				}
    }
</script>

<style scoped>
  img{
    border: none;
    display:block;
  }
  .singlePhone{
    display:block;
    width:33.3%;
    padding:.125rem 0 .225rem;
  }
  .singlePhone img{
    width:.55rem;
    height:.51rem;
    margin:0 auto .19rem;
  }
  .singlePhone p{
    font-size:.1rem;
    width:95%;
    color:#878787;
    text-align: center;
    margin:0 auto;
  }
</style>
