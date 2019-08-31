<template>
	<div class="personAddress">
		<p class="nameAndnum">张三丰   18866887889</p>
		<p class="peopleAdress">陕西  西安市  雁塔区  电子城街道  梦想城</p>
		<img class="checkmark" src="../../assets/images/icon09.png" alt="">
		<p class="peoAdress">默认地址</p>
		<img class="bianji" src="../../assets/images/icon10.png" alt="">
		<p class="compile">编辑</p>
		<img class="shanchu" src="../../assets/images/icon11.png" alt="">
		<p class="cutOff">删除</p>
		<img class="rightDown" src="../../assets/images/icon12.png" alt="">
	</div>
</template>

<script>
	export default{
		name:"confirmAdressMsg",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.personAddress{
		height:.91rem;
	 	border-top:2px solid red;
		border-bottom:2px solid red;
		margin-bottom:5.2rem;
	}
	.personAddress p{
		font-size:.12rem;
	}
	.personAddress .nameAndnum{
		font-size:.15rem;
		font-weight:normal;
		margin-left: .12rem;
		margin-top: .1rem;
	}
	.personAddress .peopleAdress{
		color: #7e7e7e;
		margin-left: .12rem;
	}
	.personAddress .peoAdress{
		color:#7e7e7e;
		font-size:.13rem;
		float:left;
		margin-top: .2rem;
		margin-left: .1rem;
	}
	.personAddress .compile{
		color:#7e7e7e;
		font-size:.13rem;
		float:left;
		margin-top: .2rem;
		margin-left:1.55rem;
	}
	 .personAddress .cutOff{
		color:#7e7e7e;
		font-size:.13rem;
		float:left;
		margin-top: .2rem;
		margin-left:.5rem;
	}
	.personAddress img{
		float:left;
		width:.16rem;
		height:.16rem;
	}
	.checkmark{
		margin-top: .2rem;
		margin-left: .1rem;
	}
	.personAddress .rightDown{
		position:absolute;
		top:1.43rem;
		right: 0rem;
	} 
	.personAddress .bianji{
		position:absolute;
		left:2.2rem;
		top:1.33rem;
	}
	.personAddress .shanchu{
		position:absolute;
		left:2.97rem;
		top:1.33rem;
	} 
</style>
