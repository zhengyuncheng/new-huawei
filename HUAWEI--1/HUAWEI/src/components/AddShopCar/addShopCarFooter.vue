<template>
  <div class="addShopFooter">
    <div><input @change="checkalls" type="checkbox" v-model="data.data.is_select"  class="checkboxOne check goods-check goodsCheck" />

      <span>全选</span></div>
    <div>
      <p>总计: <em>￥</em><span>{{data |countTotalPrice}}</span><b @click="commit">结算({{data |countNum }})</b></p>
    </div>
  </div>
</template>

<script>
  export default {
	
    name: "shopCarfooter",
    props: ["data","pid"], //cartinfon 所有的数据；
    // 设置一个用来计算总价格的过滤器
    filters: {
      countTotalPrice(cartInfo) {
        let total = 0;
        cartInfo.data.carts.forEach((products, pid) => {
          if (products.c_is_selected) {
            total+= parseInt(products.c_goods.goods_price * products.c_goods_num);
						
          }
        })
        return total
      },
      // 设置一个用来计算总数的过滤器
      countNum(cartInfo) {
        let count = 0;
          cartInfo.data.carts.forEach((products, pid) => {
          if (products.c_is_selected) {
            count += products.c_goods_num
          }
        })
        return count
        console.log(count)
      }
    },
    methods: {
      // 像父组件发起请求
      checkalls(){
        this.$emit("checkAll")
      },
			commit(){
				this.$router.push({name:"paydesk"})
			}
    }
  }
</script>

<style scoped="scoped">
  /* 设置最外层样式 */
  .addShopFooter {
    width: 100%;
    display: flex;
    position: fixed;
    height: 0.6rem;
    bottom: 0.41rem;
    background-color: #ffffff;
    line-height: 0.6rem;
  }

  /* 设置左右info的样式 */
  /* 左 */
  .addShopFooter div:first-child {
    width: 41%;
  }

  .addShopFooter div:last-child {
    flex: 1;
  }

  .addShopFooter div:first-child span {
    font-size: 0.14rem;
    display: block;
    margin-left: 0.55rem;
    color: #999999;
  }

  /* 右 */
  .addShopFooter div:last-child p {
    font-size: 0.17rem;
  }

  .addShopFooter div:last-child em {
    font-style: normal;
    color: #d4141d;
  }

  .addShopFooter div:last-child span {
    color: #d4141d;
    display: inline-block;
    font-size: 0.18rem;
    font-weight: 800;
   min-width: 0.61rem;
  }

  .addShopFooter div:last-child b {
    font-size: 0.17rem;
    display: inline-block;
    height: 0.42rem;
    width: 1.02rem;
    background-color: #e33c2c;
    line-height: 0.42rem;
    text-align: center;
    border-radius: 0.2rem;
    margin-left: 0.07rem;
    color: #ffffff;
    font-weight: normal;
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
    left: 0.24rem;
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
    left: 15px;
    margin-top: -0.18rem;
    width: 0.2rem;
    height: 0.35rem;
  }

  .unchecked {
    background: url(../../assets/images/icon_radio3.png) no-repeat left center;
    background-size: 20px 20px;
    position: absolute;
    top: 50%;
    left: 15px;
    margin-top: -0.18rem;
    width: 0.2rem;
    height: 0.35rem;
  }
</style>
