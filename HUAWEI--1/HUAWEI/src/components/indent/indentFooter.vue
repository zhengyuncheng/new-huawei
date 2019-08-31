<template>
	<footer>
		<h3>¥{{data[0].goods_price}}</h3>
		<h4 @click="sendData">提交订单</h4>
	</footer>
</template>

<script>
	export default{
		name:"indentFooter",
		props:["data","sendData"]
	}
</script>

<style scoped="scoped">
	footer{
		height:.4rem;
		padding:0 .2rem .15rem;
	}
	footer h3{
		font-size:.2rem;
		color:#c92b44;
		line-height: .4rem;
		float:left;
		font-weight:bolder;
	}
	footer h4{
		width:1.4rem;
		height:.3rem;
		line-height:.3rem;
		color:#fff;
		background:#d82c2a;
		float:right;
		text-align:center;
		border-radius:.34rem;
		margin-top:.02rem;
	}
</style>
