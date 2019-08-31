<template>
  <div class="inteFurniture">
    <!-- header -->
    <div class="inteHeader">
     <router-link to="/index"><img src="../../assets/img/goleft.png" alt="返回上一层"></router-link>
      <span>华为HiLink智慧生活馆一站式体验</span>
    </div>
    <!-- banner -->
    <div class="banner">
      <img src="../../assets/img/banner.png" alt="banner">
    </div>
    <div class="recommendForHotPro">
      <h3>爆款推荐</h3>
      <div class="runningBan">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../assets/img/lGonsXHprqjJtVvwbEjB.png"></div>
                <div class="swiper-slide"><img src="../../assets/img/j9jHiWc3rTIGzxG4CtmF.png"></div>
                <div class="swiper-slide"><img src="../../assets/img/dBEuOg82o8br9mLXmtHS.png"></div>
              </div>
          </div>

      </div>
      <hw-inte-furniture-goodslist></hw-inte-furniture-goodslist>
    </div>

    <hw-inte-furniture-nav></hw-inte-furniture-nav>
    <hw-inte-furniture-single-product-display></hw-inte-furniture-single-product-display>
    <hw-inte-furniture-goodslist></hw-inte-furniture-goodslist>
    <hw-inte-furniture-small-banner></hw-inte-furniture-small-banner>

    <div class="lookForMore">
      <p>点击了解更多产品 > </p>
    </div>

    <hw-inte-furniture-footer></hw-inte-furniture-footer>

  </div>
</template>

<script>
    import Swiper from 'swiper';
    import InteFurnitureGoodslist from './InteFurnitureGoodslist'
    import InteFurnitureNav from './InteFurnitureNav'
    import InteFurnitureSingleProductDisplay from './InteFurnitureSingleProductDisplay'
    import InteFurnitureSmallBanner from './InteFurnitureSmallBanner'
    import InteFurnitureFooter from './InteFurnitureFooter'


    export default {
        name: "InteFurniture",
        components:{
            'hwInteFurnitureFooter':InteFurnitureFooter,
            'hwInteFurnitureGoodslist':InteFurnitureGoodslist,
            'hwInteFurnitureNav':InteFurnitureNav,
            'hwInteFurnitureSingleProductDisplay':InteFurnitureSingleProductDisplay,
           'hwInteFurnitureSmallBanner':InteFurnitureSmallBanner
        },
        mounted(){
          var mySwiper = new Swiper('.swiper-container',{
                  autoplay : 3000,
                  speed:300
                  })
        }
    }
</script>

<style scoped>
@import '../../assets/css/swiper.min.css';
  img{
    border: none;
    display:block;
  }
.inteFurniture{
  background:#f1f1f1;
}
/* header */
.inteHeader{
  width:100%;
  height:.41rem;
  display:flex;
}
.inteHeader img{
  width:.12rem;
  height:.2rem;
  margin-top:.1rem;
  margin-left:.2rem;
  cursor:pointer;
}
.inteHeader span{
  display:block;
  font-size:.15rem;
  font-weight:600;
  margin-top:.14rem;
  margin-left:.66rem;
	line-height: .15rem;
}
/* banner */
.banner{
  width:100%;
  height:3.18rem;
}
.banner img{
  width:100%;
  height:100%;
}
/* recommendForHotPro */
.recommendForHotPro{
  width:100%;
}
.recommendForHotPro h3{
  font-size:.14rem;
  text-align:center;
  height:.47rem;
  line-height:.47rem;
  position:relative;
}
.recommendForHotPro h3::before{
  display:block;
  content:"";
  width:.3rem;
  height:.02rem;
  background:#ababab;
  position:absolute;
  left:32%;
  bottom:50%;
}
.recommendForHotPro h3::after{
  display:block;
  content:"";
  width:.3rem;
  height:.02rem;
  background:#ababab;
  position:absolute;
  left:60%;
  bottom:50%;
}
.runningBan{
  width:100%;
  height:1rem;
  font-size:.14rem;
}
.runningBan img{
  width:100%;
  height:1rem;
}
.lookForMore{
  background:#f1f1f1;
  width:100%;
  height:.65rem;
  padding-top:.15rem;
}
.lookForMore p{
  width:2.12rem;
  height:.34rem;
  font-size:.12rem;
  color:#998083;
  font-weight:900;
  text-align:center;
  line-height:.34rem;
  border:.02rem solid #bebabb;
  border-radius:.17rem;
  margin:0 auto .35rem;
}
</style>
