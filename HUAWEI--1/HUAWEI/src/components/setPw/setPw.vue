<template>
	<div>
		<header>
			<div class="left">
				<img src="../../assets/images/icon03.png" alt="">
				<input type="button" value="返回" @click="togogo">
			</div>
			
			<div class="underSide">
				<p class="setPwd">设置密码</p>
				<p class="claim">密码由8-12位字符组成，需至少包含一个大写字母，一个小写字母和一个数字，建议不与其它密码相同</p>
			</div>
			</header>
			
			<!-- cipher -->
			<div class="cipher">
				<form action="">
					<input class="firPwd" type="password" placeholder="密码">
					<input type="password" placeholder="确认密码">
					<input class="finish" type="button" value="完成" @click="toSiGnIn">
				</form>
			</div>
	</div>
</template>

<script>
	export default{
		name:"setPw",
		data(){
			return {
				
			}
		},
		methods:{
			toSiGnIn(){
				this.$router.push({
					name:"SiGnIn"
				})
			},
			togogo(){
				this.$router.go(-1)
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
		margin-right:.1rem;
	}
	.left input{
		font-size:.18rem;
		color:#347cce;
		background: transparent;
		outline: none;
		border:0px;
		float:left;
		line-height: .2rem;
	}
	header .underSide{
		width:100%;
		height:.34rem;
		margin-bottom:.41rem;
	}
	.underSide .setPwd{
		font-size:.19rem;
		color:black;
		font-weight:400;
		line-height:.34rem;
		clear: both;
	}
	.underSide p{
		font-size:.15rem;
		color:#828282;
		text-align:center;
	}
	.underSide .claim{
		margin-bottom:.5rem;
		width:3.9rem;
		margin: .05rem auto 0;
	}
	
	/* cipher */
	.cipher{
		width:100%;
		position:absolute;
		top:1.2rem;
	}
	.cipher input{
		width:3.9rem;
		height:.3rem;
		display:block;
		margin: auto;
		margin-top: .12rem;
		border:0rem;
		background:transparent;
		outline:none;
		font-size: .16rem;
		border-bottom:1px solid #cbcbcb; 
	}
	.cipher .firPwd{
		margin-top:.28rem;
	}
	.cipher .finish{
		width:3.9rem;
		height:.37rem;
		background:#b4d7ff;
		color:white;
		margin-top:.2rem;
		border-radius:.12rem;
	}
</style>
