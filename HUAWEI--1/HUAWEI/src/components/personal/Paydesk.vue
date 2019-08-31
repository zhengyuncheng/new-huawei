<template>
  <div class="paydeskcom">
    <header>
      <img src="../../assets/img/goleft.png" alt="goleft" @click="goback">
      <p>华为收银台</p>
    </header>
    <div class="countDown">
      <p>请您在<span>29</span>分<span>30</span>秒内完成支付</p>
      <span class="countDownMsg">订单含付款减库存商品，支付完成才会为您预留库存，库存不足时系统将自动取消未支付的订单。</span>
    </div>
    <!-- totalprice -->
    <div class="orderPrice">
      <div class="orderPriceTitle">
        <h3>订单金额</h3>
        <h3>￥<span>2699.00</span></h3>
      </div>
      <div class="addrMessage">
        <span>收货信息:</span>
        <span>&nbsp;&nbsp;xx,陕西省XXXXXXXXXXXXXXXXXXX,1832300303</span>
      </div>
      <div class="addrMessage">
        <span>送货说明:</span>
        <span class="whenReason">&nbsp;&nbsp;今天19：00前付款，预计8月17日(周六)送达(受付款完成时等因素可能发生变化)</span>
      </div>
    </div>
    <!-- choosePayTool -->
    <div class="choosePayTool">
      <h3 class="chooseTitle">请选择方式支付</h3>
      <hw-choose-pay-tool></hw-choose-pay-tool>
      <hw-choose-pay-tool></hw-choose-pay-tool>
      <div class="settings">
        <div>
          <p>花呗</p>
          <span>6期0费率</span>
        </div>
        <img src="../../assets/img/jt.png" class="pic2">
      </div>
    </div>
  </div>
</template>

<script>
  import ChoosePayTool from './ChoosePayTool'
    export default {
        name: "PayDesk",
        components:{
            "hwChoosePayTool":ChoosePayTool,
        },
				methods:{
					goback(){
						this.$router.go(-1)
					}
				}
    }
</script>

<style scoped>
  .paydeskcom{
    margin-bottom:.45rem;
  }
  img{
    border: none;
    display:block;
  }
  header{
    width:100%;
    position:relative;
    background:white;
  }
  header img{
    width:.09rem;
    height:.15rem;
    position:absolute;
    margin-top:.14rem;
    margin-left:.21rem;
  }
  header p{
    font-size:.14rem;
    font-weight:600;
    text-align:center;
    line-height:.41rem;
  }
  .countDown{
    padding:.11rem .15rem;
    background:#fef9db;
  }
  .countDown p{
    font-size:.12rem;
    color:#9a929d;
    text-align:center;
  }
  .countDown span{
    font-size:.1rem;
    text-align:center;
    color:#dd4157;
  }
  .countDownMsg{
    display:block;
  }
  /* orderPrice */
  .orderPrice{
    padding:.11rem .15rem;
    background:white;
  }
  .orderPriceTitle{
    display:flex;
    font-size:.12rem;
    justify-content:space-between;
    margin-bottom:.13rem;
  }
  .orderPriceTitle h3:last-child{
    color:#dd2b39;
  }
  .addrMessage{
    font-size:.11rem;
    color:#828282;
    line-height:.22rem;
  }
  .whenReason{
    color:#dd4157;
  }
  /* choosePayTool */
  .chooseTitle{
    font-size:.13rem;
    color:#7f7e83;
    line-height:.35rem;
    padding-left:.15rem;
    text-align:left;
  }
  .settings{
    font-size:.13rem;
    display:flex;
    justify-content:space-between;
    padding:.31rem .15rem .31rem .55rem;
    background:white url(../../assets/img/zfb.png) no-repeat .15rem center;
    background-size:.34rem .34rem;
    border-bottom:2px solid #f3f3f3;
  }
  .pic2{
    width: .1rem;
    height:.15rem;
  }
  .settings span{
    color:#d3345a;
  }
</style>
