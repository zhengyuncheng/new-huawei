<template>
	<div class="MemberHead">
		<div class="MemberHeadmsg">
			<div class="viphead">
				<img src="../../assets/images/img/back.png" class="vipheadimg" @click="toindex">
				会员频道
				</div>
			<div class="msgPersonal">
				<img src="../../assets/img/defaultIcon.png">
				<p class="msgPone">登录 | 注册</p>
				<p class="msgPtwo">可用积分<span>--</span></p>
				<div class="msgDiv"></div>
				<div class="msgDivTwo">
					<p class="msgPth">可用积分<span>--</span></p>
					<p class="msgPth">可用积分<span>--</span></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"vipHeader",
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
	.MemberHead{
		width: 100%;
		height: 2.1rem;
		background: url(../../assets/img/big_bg.png) no-repeat;
		background-size: 4.14rem 1.69rem;
		font-family: HYQiHei-FZS;
		margin-top: .4rem;
	}
	.MemberHeadmsg{
		width: 100%;
		height: 1.96rem;
		position: absolute;
		z-index: 1;
		margin-top: .17rem;
		text-align: center;
	}
	.viphead{
		width: 100%;
		height: .4rem;
		background: white;
		position: absolute;
		font-weight: 500;
		top: -.57rem;
		font-size: .17rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.vipheadimg{
		display: block;
		position: absolute;
		width: .25rem;
		height: .25rem;
		left: .1rem;
	}
	.msgPersonal{
		width: 3.77rem;
		height: 1.57rem;
		background: #332a21;
		margin: 0 auto;
		margin-top: .39rem;
		border-radius: .18rem;
		position: relative;
	}
	.msgPersonal img{
		position: absolute;
		width: .7rem;
		height: .7rem;
		top: -.4rem;
		left: 1.54rem;
	}
	.msgPone{
		font-size: .17rem;
		position: absolute;
		z-index: 9;
		color: #fff;
		top: 27%;
		left: 39.5%;
	}
	.msgPtwo{
		font-size: .15rem;
		position: absolute;
		z-index: 9;
		color: #fff;
		top: 45%;
		left: 41%;
	}
	.msgDiv{
		position: absolute;
		width: 3.28rem;
		height: .07rem;
		background: #554635;
		border-radius: .05rem;
		top: 70%;
		left: 6.5%;
	}
	.msgDivTwo{
		position: absolute;
		width: 3.28rem;
		left: 6.5%;
		top: 80%;
		display: flex;
		justify-content: space-between;
	}
	.msgPth{
		font-size: .15rem;
		color: #fff;
	}
</style>
