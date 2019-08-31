<template>
	<footer>
		<input class="no" type="button" value="取消" @click="togo">
		<input class="yes" type="button" value="确认" @click="togone">
	</footer>
</template>

<script>
	export default{
		name:"addAdressFoot",
		data(){
			return {
				
			}
		},
		methods:{
			togo(){
				this.$router.go(-1)
			},
			togone(){
				this.$router.push({
					name:"confirmAdress"
				})
			}
		}
	}
</script>

<style scoped>
	footer{
		width:100%;
		height:.33rem;
		margin-top:.1rem;
		/* background: yellow; */
	}
	footer input{
		width:1.59rem;
		height:.32rem;
		display:block;
		border-radius:.2rem;
		border:0rem;
		outline:none;
		border:1px solid #cbcbcb;
	}
	footer .no{
		background:#f8f8f8;
		float:left;
		margin-left:.3rem;
	}
	footer .yes{
		color:#f8f8f8;
		background:#ca2826;
		margin-left:2.2rem;
	}
</style>
