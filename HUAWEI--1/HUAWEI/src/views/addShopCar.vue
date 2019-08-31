<template>
  <div>
    <addShopcar-header></addShopcar-header>
    <addShopcar-content v-if="cartInfo" :data="cartInfo.data" :pcheck="productSelectAll" :add="addnum" :minus="minusNum"></addShopcar-content>
    <addShopcar-footer @checkAll="cartCheckAll" v-if="cartInfo" :data="cartInfo"></addShopcar-footer>
    <add-footer></add-footer>

  </div>

</template>

<script>
  import addShopCarHeader from "../components/AddShopCar/addShopCarHeader"
  import addShopCarContent from "../components/AddShopCar/addShopCarContent"
  import addShopCarFooter from "../components/AddShopCar/addShopCarFooter"
  import addFooter from "../components/common/Footer"
  import api from "../apis/api"



  export default {
    name: "addShopCar",
    components: {
      "addShopcar-header": addShopCarHeader,
      "addShopcar-content": addShopCarContent,
      "addShopcar-footer": addShopCarFooter,
      "add-footer": addFooter
    },
    data() {
      return {
        cartInfo: {} //获取购物车页面的数据
      }
    },

    created() {
      this._initCarData();
    },
    methods: {
      // 给后端发起请求数据获取
      _initCarData() {
				console.log(1)
        api.getCartInfo(dataAll => {
          console.log(dataAll)
          this.cartInfo = dataAll; //获取的总数据
          console.log(this.cartInfo.data.carts)
        })
      },
       //全选反选
      cartCheckAll() {
        console.log(this.cartInfo.is_select);
        let checked = this.cartInfo.data.is_select; 
				console.log(checked)//购物车的总状态
        this.cartInfo.data.carts.forEach((products, pid) => {
          products.c_is_selected = checked;
          console.log(products.c_is_selected)
        })
      },
      //点击改变商品的数量
      addnum(pid) {
        console.log(pid)
        this.cartInfo.data.carts[pid].c_goods_num++
      },
      minusNum(pid) {
        if (this.cartInfo.data.carts[pid].c_goods_num <= 1) {
          this.cartInfo.data.carts[pid].c_goods_num = 1
        } else {
          this.cartInfo.data.carts[pid].c_goods_num--
        }
      },
      //商品选择全选
      productSelectAll(pid) {
        console.log(pid)
        // let isCheck =this.cartInfo.products[pid].checked
        let isCheck = this.cartInfo.data.carts.every((products, pid, arr) => {
          return products.c_is_selected == true
        })
        console.log(isCheck)
        this.cartInfo.data.is_select = isCheck
        console.log(isCheck)

      },
    }
  }
</script>

<style>

</style>
