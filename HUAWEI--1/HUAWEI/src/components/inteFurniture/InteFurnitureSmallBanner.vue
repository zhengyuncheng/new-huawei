<template>
  <div class="smallBanner">
    <img src="../../assets/img/new-banner.png">
    <div class="advText">
      <h2>舒适环境   高质睡眠</h2>
      <p></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "InteFurnitureSmallBanner"
    }
</script>

<style scoped>
  img{
    border: none;
    display:block;
  }
  /* smallBanner */
  .smallBanner{
    width:100%;
    height:2rem;
    position:relative;
    font-size:.15rem;
    background:lightgreen;
  }
  .smallBanner img{
    width:100%;
    height:100%;
  }
  .advText{
    width:100%;
    height:100%;
    position:absolute;
    background:rgba(0,0,0,0);
    left:0;
    top:0;
  }
  .advText h2{
    font-size:.18rem;
    color:#6a5d66;
    width:1.77rem;
    text-align:center;
    margin:.38rem auto .11rem ;
  }
  .advText p{
    width:.54rem;
    height:.03rem;
    background:#6f616c;
    margin:0 auto;
  }
</style>
