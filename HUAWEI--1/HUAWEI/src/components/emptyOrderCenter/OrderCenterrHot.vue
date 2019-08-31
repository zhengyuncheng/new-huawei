<template>
  <div>
    <h1>搭配推荐</h1>
    <div class="prouduct-list">
      <div class="prouduct-item">
     <router-link to='/shopCart'>  <img src="https://res.vmallres.com/pimages/product/6901443293513//428_428_1555464685019mp.png" alt=""></router-link>
        <div class="prouduct-info">
          <h3>HUAWEI P30 Pro</h3>
          <p>￥4988</p>

        </div>
      </div>
      <div class="prouduct-item">
        <img src="https://res.vmallres.com/pimages/product/6901443304349//428_428_1558245073712mp.png" alt="">
        <div class="prouduct-info">
           <h3>荣耀20</h3>
          <p>￥2699</p>

        </div>
      </div>
      <div class="prouduct-item">
        <img src="https://res.vmallres.com/pimages/product/6901443261611//428_428_1542771943501mp.png" alt="">
       <div class="prouduct-info">
         <h3>HUAWEI P30 Pro</h3>
         <p>￥4988</p>

       </div>
      </div>
      <div class="prouduct-item">
        <img src="https://res.vmallres.com/pimages/product/6901443304349//428_428_1558245073712mp.png" alt="">
       <div class="prouduct-info">
         <h3>HUAWEI P30 Pro</h3>
         <p>￥4988</p>

       </div>
      </div>
      <div class="prouduct-item">
        <img src="https://res.vmallres.com/pimages/product/6901443293513//428_428_1555464685019mp.png" alt="">
       <div class="prouduct-info">
         <h3>HUAWEI P30 Pro</h3>
         <p>￥4988</p>

       </div>
      </div>
    </div>
  </div>

</template>

<script>
</script>

<style scoped="scoped">
  /* 设置字体大小 */
  h1 {
    font-size: 0.18rem;
    font-weight: 800;
    text-align: center;
  }

  h3 {
    font-size: 0.1rem;
    font-weight: normal;
    line-height: 0.26rem;
  }

  p {
    font-size: 0.14rem;
    font-weight: 700;
    color: #ca141d;
  }

  /* 设置两列布局 */
  .prouduct-list{
    display: flex;
   flex-wrap: wrap;
    padding:  0.1rem;
    margin-top: 0.2rem;
    background-color: #f9f9f9;
    justify-content: space-between;
  }
  .prouduct-item{
    position: relative;
    width: 49%;
    background-color: #fff;
    text-align: center;
    margin-bottom: 0.06rem;
    padding-bottom: 0.3rem;
    padding-top: 0.2rem;
border-radius: 0.08rem ;
  }
   .prouduct-item img{
     width: 78%;
		 display: inline-block;
   }
</style>
