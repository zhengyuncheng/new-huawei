<template>
	<selector>
		<img src="../../assets/images/location.png" alt="">
		<p>收货地址为空</p>
	</selector>
</template>

<script>
	export default{
		name:"locationMsg",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	selector{
	width:100%;
	height:5.47rem;
	text-align: center;
	background: #f8f8f8;
}
selector img{
	display: block;
	width:.73rem;
	height:.77rem;
	margin: 2.7rem auto 0;
}
selector p{
	font-size:.11rem;
	color:#878787;
	margin-top:.22rem;
}
</style>
