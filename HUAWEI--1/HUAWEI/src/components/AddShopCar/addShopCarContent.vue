<template>
  <div class="addShopContent">
    <div class="addShopContent-info" v-for="(item ,pid) in data.carts"  :key="pid">
      <div class="addShopContent-infoLeft">
        <input type="checkbox" @change="pcheck(pid)" v-model="item.c_is_selected" class="checkboxOne check goods-check goodsCheck" />
        <img :src="item.c_goods.goodscimg" alt="">
      </div>

      <div class="addShopContent-infoRight">
        <p>
          {{item.c_goods.goods_name}}
        </p>
        <p class="infoP"> <span class="infoPrice"><small>￥</small>{{item.c_goods.goods_price}}</small></span>
        <span class="infoSpan">
          <img src="../../assets/images/img/jian.png" alt="" @click="minus(pid)"><em>{{item.c_goods_num}}</em><img src="../../assets/images/img/jia.png" alt="" @click="add(pid)">
        </span>
         </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"product",
    props:["data","add","minus","pcheck" ],//商品信息列表

  }
</script>

<style scoped="scoped">
  /* 设置最外层样式 */
  .addShopContent {
    padding: 0.1rem 0.1rem 0 0.1rem;
    background-color: #f8f8f8;
    margin-top: 0.55rem;
    position: relative;
    min-height:5.67rem;
    padding-bottom: 1.03rem;
  }

  /* 设置购物车信息样式 */

  .addShopContent-info {
    padding: 0 0.1rem;
    border-radius: 0.07rem;
    background-color: #ffffff;
    position: relative;
    display: flex;
    margin-top: 0.1rem;

  }

  .addShopContent-info img {
    height: 0.92rem;
    width: 0.92rem;
    margin-left: 0.3rem;
  }

  /* 设置checkbox的样式 */
  .checkboxOne {
    appearance: none;
    background: url(../../assets/images/icon_radio3.png) no-repeat center left;
    background-size: 0.2rem 0.2rem;
    outline: none;
    float: left;
  }

  input.check {
    background: url(../../assets/images/icon_radio3.png) no-repeat center left;
    background-size: 0.2rem 0.2rem;
    position: absolute;
    top: 50%;
    left: 0.1rem;
    margin-top: -0.18rem;
    width: 0.2rem;
    height: 0.35rem;
  }

  input.check:checked {
    background: url(../../assets/images/icon_radio4.png) no-repeat center left;
    background-size: 0.2rem 0.2rem;
  }

  input.goodsCheck:checked {
    background: url(../../assets/images/icon_radio4.png) no-repeat center left;
    background-size: 0.2rem 0.2rem;
  }

  input.check:checked {
    background: url(../../assets/images/icon_radio4.png) no-repeat center left;
    background-size: 0.2rem 0.2rem;
  }

  .checked {
    background: url(../../assets/images/icon_radio4.png) no-repeat left center;
    background-size: 0.2rem 0.2rem;
    position: absolute;
    top: 50%;
    left:0.15rem;
    margin-top: -0.18rem;
   width: 0.2rem;
   height: 0.35rem;
  }

  .unchecked {
    background: url(../../assets/images/icon_radio3.png) no-repeat left center;
    background-size: 20px 20px;
    position: absolute;
    top: 50%;
    left:0.15rem;
    margin-top: -0.18rem;
   width: 0.2rem;
   height: 0.35rem;
  }

  /* 设置右侧文字描述样式 */
  .addShopContent-infoRight p:first-child{
     font-size: 0.15rem;
     margin-top: 0.16rem;
     height:0.4rem;
    overflow:hidden;

  }
   .addShopContent-infoRight p:last-child{
     font-size: 0.17rem;
  }

  .addShopContent-infoLeft{
    width: 35%;
    height: 100%;
    padding-top: .16rem;

  }
   .addShopContent-infoRight{
   flex: 1;
   position: relative;
  }
  /* 设置右下样式 */
  .infoP{
    display:flex;
    justify-content: space-between;
    margin-top: 0.28rem;
    color: #ca141d;
    position: relative;
  }
  .infoSpan img{
    width: 0.3rem;
    height: 0.3rem;
		display: inline-block;
  }
  .infoSpan em{
    font-style: normal;
    font-size:0.11rem;
    position: absolute;
    bottom: 0.12rem;
    right: 0.41rem;
  }
  .infoPrice{
    margin-top:0.07rem ;
    font-weight: 700;
  }
</style>
