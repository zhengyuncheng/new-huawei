<template>
	<div>
	<header>
		<div class="left">
			<img src="../../assets/images/icon03.png" alt="">
			<input type="button" value="返回" @click="togo">
		</div>
		
		<div class="underSide">
			<p>使用邮件地址注册</p>
		</div>
		
		<!-- information -->
		<div class="information">
			
				<input class="phoneNuum" type="text" placeholder="邮件地址">
				<input class="next" type="button" value="下一步" @click="totog">
			
		</div>
		</header>
		
		<!-- foorter -->
		<footer>
			<a @click="tophone">使用手机号注册</a>
		</footer>
		</div>
</template>

<script>
	export default{
		name:"mailBox",
		data(){
			return {
				
			}
		},
		methods:{
			tophone(){
				this.$router.push({
					name:"regiSter"
				})
			},
			togo(){
				this.$router.go(-1)
			},
			totog(){
				this.$router.push({
					name:"setPw"
				})
				console.log(a);
			}
		}
	}
</script>

<style scoped>
	header{
		width:100%;
		height:.52rem;
		margin-top: .2rem;
	}
	header .left{
		width:100%;
		height:.18rem;
	}
	.left img{
		width:.11rem;
		height:.18rem;
		float:left;
		margin-left: .2rem;
		margin-right: .1rem;
	}
	.left input{
		font-size:.14rem;
		color:#347cce;
		background: transparent;
		outline: none;
		border:0px;
		float:left;
		font-size: .18rem;
		line-height: .2rem;
	}
	header .underSide{
		width:100%;
		height:.34rem;
		font-size: .16rem;
		margin-bottom:.41rem;
	}
	.underSide p{
		font-size:.17rem;
		font-weight:400;
		line-height:.34rem;
		text-align: center;
		clear: both;
	}
	
	/* information */
	.information{
		width:100%;
		height:.73rem;
	}
	
	.information input{
		width:3.65rem;
		height:.27rem;
		margin-left:.22rem;
		display:block;
		border:0rem;
		background:transparent;
		outline:none;
		border-bottom:1px solid #cbcbcb; 
		
	}
	.information .next{
		width:3.25rem;
		height:.37rem;
		background:#b4d7ff;
		margin-left:.4rem;
		margin-bottom:.33rem;
		border-radius:.12rem;
		position:relative;
		top:.3rem;
		z-index: 9;
	}
	
	/* footer */
	footer{
		width:100%;
		height:.13rem;
		position:absolute;
		top:1.8rem;
	}
	footer a{
		font-size:.12rem;
		float:left;
		color: #3f80c4;
		line-height:.13rem;
		margin-left:1.46rem;
		margin-top:.5rem;
		font-size: .16rem;
	}
</style>
