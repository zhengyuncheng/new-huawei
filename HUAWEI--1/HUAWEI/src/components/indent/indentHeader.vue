<template>
	<header>
		<span @click="goback"> < </span>
		订单支付跳转
	</header>
</template>

<script>
	export default{
		methods:{
			goback(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	header{
		font-size:.18rem;
		line-height:.4rem;
		color:#000;
		text-align:center;
		font-weight:bolder;
		height:.4rem;
	}
	header span{
		float: left;
		margin-left:.2rem;
	}
</style>
