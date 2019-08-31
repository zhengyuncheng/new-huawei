<template>
	<div>
		<header>
			<div class="left">
				<img src="../../assets/images/icon03.png" alt="">
				<input type="button" value="返回" @click="toback">
				<p class="findPwd">找回密码</p>
			</div>
			
			<div class="underSide">
				<p class="setPwd">输入华为账号</p>
				<p class="claim">输入注册华为账号的手机号或邮件地址</p>
			</div>
		</header>
			
			
			<div class="information">
		
					<input class="phoneNuum" type="text" placeholder="  手机号/邮件地址/华为号">
					<p>输入手机号时，请填写正确的区域前缀，如：</p>
					<p>1.不加前缀：135********</p>
					<p>2.加前缀+86：+86135********</p>
					<p>3.加前缀0086：<span class="nuumSp">0086135</span>********</p>
					<input class="next" type="button" value="下一步">
	
			</div>
			
			
			<div class="pwdFoot">手机号或邮箱地址无法使用？<span>账号申诉</span></div>
	</div>
</template>

<script>
	export default{
		name:"retPw",
		data(){
			return {
				
			}
		},
		methods:{
			toback(){
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
	header .findPwd{
		font-size:.18rem;
		margin-left: 1.7rem;
		font-weight: 400;
		line-height: .18rem;
	}
	header .left{
		width:100%;
		height:.18rem;
		border-bottom:1px solid #d5d5d5;
		padding-bottom: .1rem;
	}
	.left img{
		width:.11rem;
		height:.18rem;
		float:left;
		margin-left: .2rem;
		margin-right: .1rem;
	}
	.left input{
		font-size:.17rem;
		color:#347cce;
		background: transparent;
		outline: none;
		border:0px;
		float:left;
		line-height: .18rem;
	}
	header .underSide{
		width:100%;
		height:.34rem;
		margin-bottom:.41rem;
	}
	.underSide .setPwd{
		font-size:.22rem;
		color:black;
		line-height:.34rem;
		text-align: center;
		clear: both;
		font-weight:400;
		margin-top: .6rem;
	}
	.underSide p{
		font-size:.15rem;
		padding-top: .1rem;
		color:black;
		text-align:center;
	}
	.underSide .claim{
		margin-bottom:.5rem;
	}
	.nuumSp{
		color: blue;
	}
	
	/* information */
	.information{
		width:100%;
		height:.73rem;
	}
	.information input{
		width:3.7rem;
		height:.27rem;
		margin-left:.22rem;
		margin-top: 1.5rem;
		display:block;
		border:0rem;
		background:transparent;
		outline:none;
		border-bottom:1px solid #cbcbcb; 
		
	}
	.information .phoneNuum{
		margin-bottom: .14rem;
		height: .4rem;
		font-size: .15rem;
	}
	.information .next{
		width:1.88rem;
		height:.37rem;
		background:#f5f5f5;
		color: #a9cce8;
		border:none;
		margin-left:1.1rem;
		border-radius:.12rem;
		position: absolute;
		top: 2.4rem;
	}
	.information p{
		font-size: .15rem;
		text-align:left;
		height: .22rem;
		text-indent:.2rem;
		color:#7f7f7f;
	}
	
	.pwdFoot{
		font-size: .15rem;
		margin-top: 4.1rem;
		text-align: center;
	}
	.pwdFoot span{
		color: blue;
	}
</style>
