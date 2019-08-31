<template>
	<div class="hardWareHead">
		<img src="../../assets/img/back_v1.png" @click="toindex">
		<h1>手机</h1>
	</div>
</template>

<script>
	export default{
		name:"findOutHeader",
		data(){
			return {
				
			}
		},
		methods:{
			toindex(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.hardWareHead{
		width: 100%;
		height: .42rem;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.hardWareHead img{
		width: .22rem;
		height: .22rem;
		position: absolute;
		left: .25rem;
	}
	.hardWareHead h1{
		font-size: .2rem;
		font-weight: 500;
	}
</style>
