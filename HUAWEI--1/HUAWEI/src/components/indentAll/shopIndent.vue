<template>
	<div class="payment-details">
		<div class="payment-num">
			<h2>订单编号：{{data.orderNumber}} </h2>
			<h3>待支付<span id="payment-details-date">24:00:00</span></h3>
		</div>
		<div class="shop-details">
			<div class="intro">
				<img :src="data.pic" alt="">
				<div>
					<h3>{{data.title}}</h3>
					<h5>¥{{data.price}}</h5>
				</div>
			</div>
				<!-- 赠品 -->
			<div class="shop-gift">
				<h3>商品赠</h3>
				<div>
					<h4 v-for="(item,id) in data.gift" :key="id">{{item}}</h4>
				</div>
			</div>
			<div class="shop-details-footer">
				<h2>共一件商品，代付：<span>¥{{data.price}}</span></h2>
				<div>
					<button>修改订单</button>
					<button>去支付</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"shopIndent",
		props:["data"]
	}
</script>

<style>
</style>
