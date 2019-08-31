<template>
  <div class="goods">
    <h4>海雀AJ全景摄像头</h4>
    <p class="advertisement">华为智选生态产品/360°AJ 全景</p>
    <img src="../../assets/img/picg.png" alt="商品图片">
    <p class="price">￥<span>299</span>></p>
  </div>
</template>

<script>
    export default {
        name: "InteFurnitureGoods"
    }
</script>

<style scoped>
  img{
    border: none;
    display:block;
  }
  .goods{
    width:40%;
    padding: .21rem .16rem .08rem;
    margin-right:.05rem;
    margin-bottom:.05rem;
  }
  .goods h4{
    font-size:.11rem;
    text-align:center;
  }
  .advertisement{
    font-size:.1rem;
    color:#979797;
    width:100%;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    margin-top:.05rem;
    margin-bottom:.17rem;
    text-align:center;
  }
  .goods img{
    width:.75rem;
    height:1.22rem;
    margin:0 auto .09rem;
  }
  .goods .price{
    font-size:.15rem;
    text-align:center;
    background:darkred;
    height:.23rem;
		line-height: .23rem;
    color:white;
  }
  .goods .price span{
    font-size:.15rem;
    text-align:center;
    color:white;
    margin:0 .01rem;
  }
</style>
