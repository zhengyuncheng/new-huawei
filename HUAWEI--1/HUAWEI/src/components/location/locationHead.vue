<template>
	<header>
		<img src="../../assets/images/icon05.png" alt="" @click="tomyPage">
		<p>管理收货地址</p>
	</header>
</template>

<script>
	export default{
		name:"locationHead",
		data(){
			return {
				
			}
		},
		methods:{
			tomyPage(){
				this.$router.push({
					name:"myPage"
				})
			}
		}
	}
</script>

<style scoped>
	header{
		width:100%;
		height:.17rem;
		margin-top:.2rem;
		margin-bottom:.29rem;
		background: #ffffff;
	}
	header img{
		margin-left:.28rem;
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
