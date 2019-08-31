<template>
	<div class="gatherInformation">
		<form action="">
			<input class="personName" type="text" placeholder="请输入收货人名称"><p>收货人</p>
			<input type="text" placeholder="请输入11位手机号码"><p class="phoneNum">手机号码</p>
			<input type="text" placeholder="固话或其它手机号码"><p class="altNum">备选号码</p>
			<input type="text" placeholder="点击此处选择地区"><p class="yourArea">所在地区</p>
			<input type="text" placeholder="小区、门牌号等"><p class="fullAdd">详细地址</p>
			<p class="deAddress">设置为默认地址</p>
			<div class="choose">
				<img src="img/icon08.png" alt="">
			</div>
			<!-- <input class="defaultAdress" type="button" value="设置为默认地址"> -->
		</form>
	</div>
</template>

<script>
	export default{
		name:"addAdressMsg",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.gatherInformation{
		width:100%;
		height:2.9rem;
		/* background: yellow; */
	}
	.gatherInformation input{
		display:block;
		width:90%;
		height:.3rem;
		border:0rem;
		background:transparent;
		outline:none;
		border-bottom:1px solid #cbcbcb;
		margin-bottom: .15rem;
		text-indent:.7rem;
		margin-left: .1rem;
		font-size: .14rem;
	}
	.gatherInformation .defaultAdress{
		margin-top:.3rem;
	}
	.gatherInformation .personName{
		margin-top:.3rem;
	}
	.gatherInformation p{
		font-weight:bold;
		font-size: .14rem;
		position:absolute;
		top:.7rem;
		left:.14rem;
		color:#535353;
	}
	.gatherInformation .phoneNum{
		top:1.17rem;
	}
	.gatherInformation .altNum{
		top:1.63rem;
	}
	.gatherInformation .yourArea{
		top:2.08rem;
	}
	.gatherInformation .fullAdd{
		top:2.55rem;
	}
	.gatherInformation .deAddress{
		top:3.01rem;
	}
	.gatherInformation .choose{
		width:.28rem;
		height:.15rem;
		background:#acacac;
		position:absolute;
		top:3.06rem;
		left:3.55rem;
		border-radius:.06rem;
		margin-bottom:.25rem;
	}
	.choose img{
		width:.28rem;
		height:.15rem;
	}
</style>
