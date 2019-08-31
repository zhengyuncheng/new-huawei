<template>
  <div class="recommendProList">
    <ul class="listName">
      <li>休闲娱乐</li>
      <li>舒适环境</li>
      <li>健康美食</li>
      <li>卫浴清洁</li>
      <li>新品抢鲜</li>
      <li>精品路由</li>
    </ul>
    <img src="../../assets/img/zBqIwVdo9m1WB44HxFwN.jpg">
  </div>
</template>

<script>
    export default {
        name: "InteFurnitureNav"
    }
</script>

<style scoped>
  img{
    border: none;
    display:block;
  }
  .recommendProList{
    width:100%;
  }
  .listName{
    display:flex;
    width:100%;
    height:.3rem;
    line-height:.3rem;
    font-size:.11rem;
    color:#644543;
  }
  .listName li{
    text-align:center;
    background-color:#d8d3d0;
    flex:1;
  }
  .listName li:hover{
    background:#7c5649;
    color:#ffffff;
  }
  .recommendProList img{
    width:100%;
    height:2rem;
    background:red;
    font-size:.11rem;
  }
</style>
