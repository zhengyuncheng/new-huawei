<template>
	
	<header>
		<img src="../../assets/images/icon05.png" @click="togo">
		<p>添加收货地址</p>
	</header>
	
</template>

<script>
	export default{
		name:"addAdressHead",
		data(){
			return {
				
			}
		},
		methods:{
			togo(){
				this.$router.go(-1)
			}
		}
	}
	
</script>

<style scoped>
	header{
		width:100%;
		height:.17rem;
		/* background: yellow; */
		margin-top:.2rem;
		margin-bottom:.29rem;
	}
	header img{
		margin-left:.3rem;
		height:.17rem;
		float:left;
		width: .14rem;
		height: .17rem;
	}
	header p{
		font-size: .18rem;
		font-weight:400;
		float:left;
		position:absolute;
		left:1.56rem;
		line-height:.17rem;
	}
</style>
