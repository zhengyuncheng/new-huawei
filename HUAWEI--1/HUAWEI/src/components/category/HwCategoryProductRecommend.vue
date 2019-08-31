<template>
  <div>
    <div>
      <img v-for="(item,imgid) in data.advBanner" :src="item.advBurl" :key="imgid" alt="adv" class="recBanner">
    </div>
    <div class="phoneType">
      <img v-for="(item,imgid) in data.mobilebyfun" :key="imgid" :src="item.phoneType">
    </div>
  </div>
</template>

<script>

    export default {
        name: "ProductRecommend",
        props:["data"],  //advbanner, 5张图片
    }
</script>

<style scoped>
  img{
    border: none;
    display:block;
  }
  .recBanner{
    width:100%;
    height:.73rem;
    margin-bottom:.04rem;
		border-radius: .065rem;
  }
  .phoneType{
    width: 100%;
    display:flex;
    justify-content:space-between;
    overflow-x: auto;
  }
  .phoneType img{
    width:.72rem;
    margin-right:.07rem;
		border-radius: .055rem;
    flex-shrink:0;
    height:.36rem;
  }

</style>
