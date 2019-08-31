<template>
    <footer>
      <h3>HUAWEI HiLink智能家居产品特色</h3>
      <div class="advantage">
        <div class="brandMachine">
          <h4>品牌家电</h4>
          <p>大多来自行业知名品牌值得依赖</p>
        </div>
        <div class="brandMachine">
          <h4>品牌家电</h4>
          <p>大多来自行业知名品牌值得依赖</p>
        </div>
        <div class="brandMachine">
          <h4>品牌家电</h4>
          <p>大多来自行业知名品牌值得依赖</p>
        </div>
        <div class="brandMachine">
          <h4>品牌家电</h4>
          <p>大多来自行业知名品牌值得依赖</p>
        </div>
      </div>
      <div class="footer">
        <p>*因为可能存在HUAWEI HiLink智能家居产品特色为可能存</p>
        <div class="goTop">
          <img src="../../assets/img/gotop.png" alt="返回顶部">
          <b>返回顶部</b>
        </div>
      </div>
    </footer>
</template>

<script>
    export default {
        name: "InteFurnitureFooter"
    }
</script>

<style scoped>
  img{
    border: none;
    display:block;
  }
  footer{
    padding:.48rem .25rem .39rem;
    background:#666e7b;
  }
  footer h3{
    font-size:.19rem;
    color:white;
    text-align:center;
    margin-bottom:.24rem;
  }
  .advantage{
    display:flex;
    flex-wrap:wrap;
    border-bottom:1px solid #8f97a4;
  }
  .brandMachine{
    width:50%;
    text-align:center;
    margin-bottom:.24rem;
  }
  .brandMachine h4{
    width:1rem;
    height:.21rem;
    background:url(../../assets/img/sign.png) no-repeat left center;
    background-size:.25rem .21rem;
    font-size:.11rem;
    color:white;
    text-indent:.32rem;
    text-align:center;
    margin:0 auto .08rem;
  }
  .brandMachine p{
    width:1.09rem;
    font-size:.09rem;
    color:#cfd7db;
    margin:0 auto;
  }
  .footer{
    display:flex;
    color:#c4c8d2;
    justify-content:space-around;
    margin-top:.17rem;
  }
  .footer p{
    font-size:.07rem;
    width:65%;
    padding-left: 5%;
  }
  .goTop{
    width:30%;
    height:.28rem;
    font-size:.06rem;
    text-align:center;
  }
  .goTop img{
    width:.16rem;
    height:.16rem;
    border-radius:50%;
    margin:0 auto .04rem;
  }
</style>
