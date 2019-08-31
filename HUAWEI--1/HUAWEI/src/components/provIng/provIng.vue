<template>
	<div>
	<header>
		<div class="left">
			<img src="../../assets/images/icon03.png" alt="">
			<input type="button" value="返回">
		</div>
		
		<div class="underSide">
			<p class="setPwd">验证码已发送至 13289337827</p>
		</div>
		</header>
		
		<!-- information -->
		<div class="information">
			<form action="">
				<input class="phoneNuum" type="text" placeholder="输入验证码">
				<input class="next" type="button" value="下一步">
			</form>
		</div>
		
		<!-- foorter -->
		<footer>
			<input class="again" type="button" value="重新发送">
		</footer>
		</div>
</template>

<script>
	export default{
		name:"provIng",
		data(){
			return {
				
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
		height:.18rem;
		margin-left: .2rem;
	}
	.left img{
		width:.11rem;
		height:.18rem;
		float:left;
		margin-right: .1rem;
	}
	.left input{
		font-size:.16rem;
		color:#347cce;
		background: transparent;
		outline: none;
		border:0px;
		float:left;
	}
	header .underSide{
		width:100%;
		height:.34rem;
		margin-bottom:.41rem;
	}
	.underSide .setPwd{
		font-size:.17rem;
		color:black;
		line-height:.34rem;
		text-align: center;
		clear: both;	
		padding-top: .1rem;
	}
	/* information */
	.information{
		width:100%;
		height:.73rem;
		position:absolute;
	}
	.information .phoneNuum{
		width:3.7rem;
		height:.27rem;
		margin-left:.2rem;
		margin-top: .4rem;
		display:block;
		border:0rem;
		background:transparent;
		outline:none;
		border-bottom:1px solid #cbcbcb; 
		font-size: .17rem;
	}
	.information .next{
		width:3.25rem;
		height:.37rem;
		margin-left:.43rem;
		border-radius:.12rem;
		background:#b4d7ff;;
		outline:none;
		border:0rem;
		position: absolute;
		top: .9rem;
	}
	
	/* footer */
	footer{
		width:100%;
		height:.13rem;
		position:absolute;
		top:2rem; 
	}
	footer .again{
		width:.52rem;
		height:.2rem;
		background:transparent;
		outline:none;
		border:0rem;
		color: #3f80c4;
		margin-left:1.78rem;
		margin-bottom:.33rem;
		position: absolute;
		top: .2rem;
	}
	
</style>
