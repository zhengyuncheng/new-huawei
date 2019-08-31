<template>
  <div class="singleProductDisplay">
    <div class="singleProduct">
      <h4>莱克智能循环扇</h4>
      <p class="advertisement">华为智能生态产品/流动健康风</p>
      <span>￥<b class="price">999</b></span>
      <p class="buyNow">立即购买></p>
    </div>
    <div class="singleProduct">
      <img src="../../assets/img/fan.png" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "InteFurnitureSingleProductDisplay"
    }
</script>

<style scoped>
  img{
    border: none;
    display:block;
  }
  .singleProductDisplay{
    width:100%;
    padding:.05rem;
    display:flex;
    background:white;
  }
  .singleProduct{
    width:40%;
    padding: .21rem .16rem .17rem;
    margin-right:.05rem;
  }
  .singleProduct h4{
    font-size:.15rem;
  }
  .singleProduct .advertisement{
    font-size:.08rem;
    text-align:left;
    color:#979797;
    margin-top:.06rem;
    margin-bottom:.41rem;
  }
  .singleProduct span{
    font-size:.08rem;
    color:#b82d28;
    text-align:left;
    display:block;
  }
  .singleProduct .price{
    font-size:.15rem;;
    color:#b82d28;
    text-align:left;
  }
  .buyNow{
    font-size:.07rem;
    text-align:center;
    background:darkred;
    height:.23rem;
    color:white;
		margin-top: .1rem;
  }
  .singleProductDisplay img{
    width:.41rem;
    height:1.22rem;
    margin:0 auto;
  }
</style>
