<template>
	<footer>
		<div class="addlocation" @click="togoadd">
			<p>+  新增收货地址</p>
		</div>
	</footer>
</template>

<script>
	export default{
		name:"confirmAdressFoot",
		data(){
			return {
				
			}
		},
		methods:{
			togoadd(){
				this.$router.push({
					name:"addAdress"
				})
			}
		}
	}
</script>

<style scoped>
	footer{
		width:100%;
		height:.33rem;
	}
	 footer .addlocation{
		width:3.33rem;
		height:.33rem;
		background:#d93830;
		border-radius:.15rem;
		margin-left:.4rem;
		margin-top: .6rem;
	}
	.addlocation p{
		font-size:.12rem;
		line-height:.33rem;
		text-align: center;
		color:#c8f5fb;
	}
</style>
