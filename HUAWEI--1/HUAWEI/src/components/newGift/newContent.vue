<template>
	<div class="content">
	<!-- banner -->
	<div class="banner">
		<div>
			<span>登录</span>
			<span>|</span>
			<span>注册</span>
		</div>
	</div>
	<!-- 新人送好礼 -->
	<div class="new-common-1">
		<h2 class="new-h2">新人领好礼</h2>
		<h3 class="new-h3">好礼100%送，动动手好礼就到手</h3>
		<div class="big-new-common-box">
			<div class="new-common-box">
				<h4>
					赢积分，抵现金，100%有礼
					<span>抽奖</span>
				</h4>
				<div >
					<h5>新</h5>
					<h5>人</h5>
					<h5>见</h5>
					<h5>面</h5>
					<h5>礼</h5>
				</div>
			</div>
		</div>
	</div>
	<!-- 新人礼券 -->
	<div class="new-common-2">
		<h2 class="new-h2">新人礼券</h2>
		<h3 class="new-h3">新人专享优惠券</h3>
		<div class="new-common-2-box" v-for="(newUserGift,newUserGiftId) in data.newUserGifts" :key="newUserGiftId">
			<div class="newUserGift-big">
				<div class="newUserGift">
					<div>
						<h4><i>¥ </i>{{newUserGift.price}}</h4>
						<h5>{{newUserGift.discountShop}}</h5>
						<h6>{{newUserGift.validTime}}</h6>
						<span>新人券</span>
					</div>
					<p>
						立即领取
					</p>
				</div>
			</div>
		</div>
		
		
		<h3 class="new-h3 new-common-2-h3">更多好券</h3>
		<div>
			<div class="new-common-2-box" v-for="(moreGift,moreGiftId) in data.moreGifts" :key="moreGiftId">
				<div class="newUserGift-big">
					<div class="newUserGift">
						<div>
							<h4><i>¥ </i>{{moreGift.price}}</h4>
							<h5>{{moreGift.discountShop}}</h5>
							<h6>{{moreGift.validTime}}</h6>
							<span>新人券</span>
						</div>
						<p>
							立即领取
						</p>
					</div>
				</div>
			</div>
			
		</div>
	</div>
	<!-- 新人赚福利 -->
	<div class="new-common-3">
		<h2 class="new-h2">新人赚福利</h2>
		<div v-for="(newWelfare,newWelfareId) in data.newWelfare" :key="newWelfareId">
			<img src="../../assets/img/chou.png" alt="">
			<h4>{{newWelfare.title}}</h4>
			<h5>￥{{newWelfare.price}}<span>单买价￥{{newWelfare.original}}</span></h5>
			<h6>去开团</h6>
		</div>
		
	</div>
	<!-- 升级礼包 -->
	<div class="new-common-4">
		<h2 class="new-h2">升级礼包</h2>
		<h3 class="new-h3">升级最高领1000积分</h3>
		<div class="big-new-common-box">
			<div class="new-common-box new-common-4-box">
			</div>
		</div>
	</div>
	<!-- 新人享免息 -->
	<div class="new-common-5">
		<h2 class="new-h2">新人享免息</h2>
		<h3 class="new-h3">购物分期可免息</h3>
		<img src="../../assets/img/pic.png" alt="">
		<img src="../../assets/img/pic.png" alt="">
		<img src="../../assets/img/pic.png" alt="">
	</div>
	<!-- 购物赚积分 -->
	<div class="new-common-6">
		<h2 class="new-h2">购物赚积分</h2>
		<h3 class="new-h3">下单返积分 积分可抵现</h3>
		<div v-for="(shopingInvoice,shopingInvoiceId) in data.shopingInvoice" :key="shopingInvoiceId">
			<img src="../../assets/img/pic2.png" alt="">
			<h4>{{shopingInvoice.title}}</h4>
			<h5>{{shopingInvoice.intro}}</h5>
			<h6>￥{{shopingInvoice.price}} <span> > </span></h6>
		</div>
		
	</div>
	<div class="footer-pic">
		<img src="../../assets/img/pic3.png" alt="">
		<img src="../../assets/img/pic4.png" alt="">
	</div>
</div>
</template>

<script>
	export default{
		name:"newContent",
		props:["data"]
	}
</script>

<style>
</style>
