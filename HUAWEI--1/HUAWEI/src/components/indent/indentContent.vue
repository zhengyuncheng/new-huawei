<template>
	<div class="indent-content">
	<!-- 提示信息 -->
	<div class="message">
		<span>订单含付款减库存商品，支付完成才会为您预留库存，库存不足时系统将自动取消未支付的订单。</span>
		<button>X</button>
	</div>
	<!-- 用户地址 -->
	<div class="user-url">
		<h2>辛</h2>
		<h2>11809273817</h2>
		<span class="common-1">默认</span>
		<em class="dots">···</em>

		<p>陕西西安市雁塔区 电子城街道 梦想城</p>
	</div>
	<!-- 商品详情 -->
	<div class="shop-details">
		<div class="shop-details-intro">
		<h1>华为商城</h1>
		<h2>今天<b>19:00</b>前付款，预计<b>8月17日（<b>周六</b>）送达</b></h2>
		<div class="intro">
			<img :src="initImg[0]" alt="">
			<div>
				<h3>{{data[0].goods_name}}</h3>
				<h4>{{data[0].goods_black_discount}}</h4>
				<h5>¥{{data[0].goods_price}}</h5>
				<span class="common-1">分期免息</span>
			</div>
		</div>
		<!-- 赠品 -->
		<div class="shop-gift">
			<h3>[赠品]</h3>
			<div>
				<h4>【华为】满200元减20元配件叠加券</h4>
				<h4>【华为】满100元减10元配件叠加券</h4>
				<h4>【华为】满50元减5元配件叠加券</h4>
				
			</div>
		</div>
		</div>
		<!-- 发票 -->
		<div class="shop-common invoice">
			<h3>优惠券</h3>
			
			<h4>无可用优惠券<em class="dots">···</em></h4>
		</div>
		<!-- 优惠券 -->
		<div class="shop-common">
			<h3>发票</h3>
			
			<h4><span>电子</span>普通发票-个人<em class="dots">···</em></h4>
		</div>
		<!-- 积分 -->
		<div class="shop-common">
			<h3>积分</h3>
			
			<h4>7积分，不足100不可使用</h4>
		</div>
		<!-- 商品总价 -->
		<div class="shop-common shop-all-price">
			<h3>商品总价</h3>
			
			<h4>¥{{data[0].goods_price}}</h4>
		</div>
		<!-- 发票 -->
		<div class="shop-common fee">
			<h3>配送费</h3>
			
			<h4>+ ¥0</h4>
		</div>
	</div>
	<div class="shop-to-url">
		配送至：陕西西安市雁塔区 电子城街道 梦想城
	</div>
</div>
</template>

<script>
	export default{
		name:"indentContent",
		props:["data"],
		data(){
			return {
				initImg:{}
			}
		},
		created(){
			this.initImg = this.data[0].img_src.split("#")
		}
	}
</script>

<style scoped="scoped">
	.message{
		padding:.1rem .2rem;
		background:#fff2e2;
		position: relative;
	}
	.message span{
		display: block;
		background: url(../../assets/img/message.png) no-repeat left top;
		background-size:.13rem .13rem;
		font-size:.13rem;
		line-height:.17rem;
		text-indent:.13rem;
		color:#ad695c;
		padding-right: .2rem;
	}
	.message button{
		position:absolute;
		right:.1rem;
		top:.1rem;
		background:#fff2e2;
		border:none;
		color:#ad695c;
	}
	/*用户地址*/
	.user-url{
		padding:.2rem;
		background:#fff url(../../assets/img/line.png) repeat-x left bottom;
		background-size:.31rem .04rem;
		position: relative;
	}
	.user-url h2{
		float: left;
		font-size:.18rem;
		font-weight:bolder;
		margin-right:.1rem;
		line-height:.16rem;
		
	}
	.common-1{
		float:left;
		font-size:.12rem;
		border:1px solid #9c5563;
		line-height:.14rem;
		text-align:center;
		border-radius:.14rem;
		color:#9c5563;
		padding:.01rem .04rem;
	}
	.user-url p{
		font-size:.14rem;
		clear:both;
		line-height: .14rem;
		margin-top:.2rem;
	}
	.dots{
		float: right;
		color:#979797;
		font-size:.18rem;
	}
	/*商品详情*/
	.shop-details{
		padding:.2rem;
		background: #fff;
	}
	.shop-details h1{
		font-size:.18rem;
		text-indent: .24rem;
		background:url(../../assets/img/logo.png) no-repeat left center;
		background-size:.23rem .17rem;
		line-height:.18rem;
	}
	.shop-details h2{
		font-size:.14rem;
		line-height:.42rem;
		margin-bottom:.1rem;
	}
	.intro img{
		width:.66rem;
		height:.77rem;
		margin:0 3%;
		float:left;
	}
	.intro div{
		float: left;
		width:70%;
	}
	.indent-content .intro h3{
		width:100%;
		font-size:.16rem;
		font-weight: bold;
		text-overflow:ellipsis;
		white-space: nowrap;
		overflow: hidden;
		line-height: .16rem;
	}
	.intro h4{
		font-size:.12rem;
		line-height:.3rem;
		clear:both;
		margin-bottom: .05rem;
		text-overflow: ellipsis;
		white-space:nowrap;
		overflow: hidden;
		
	}
	.intro h5{
		font-size: .16rem;
		font-weight:bolder;
		color:#b03023;
		margin-right:.1rem;
		float: left;
		position: relative;
		line-height:.16rem;
	}
	/*赠品*/
	.shop-gift{
		margin-top:.15rem;
		clear: both;
	}
	.shop-gift h3{
		font-size:.14rem;
		color:#5c5c5c;
		float: left;
		width:15%;
		clear:both;
		line-height: .3rem;
		margin-right:2%;
	}
	.shop-gift div{
		float: left;
		width:70%;
		padding-bottom:.15rem;
	}
	.shop-gift h4{
		background:url(../../assets/img/gift.png) no-repeat left center;
		background-size:.16rem .11rem;
		text-indent:.2rem;
		line-height:.3rem;
		font-size:.14rem;
		color:#ba3121;
	}
	/*发票*/
	.shop-common{
		font-size:.14rem;
		color:#5c5c5c;
		clear: both;
		line-height: .3rem;
		background:#fff;
		overflow: hidden;
	}
	.shop-common h3{
		float:left;
	}
	.shop-common h4{
		float: right;
		font-weight: bolder;
	}
	.invoice h4 span{
		color:#ba3121;
	}
	.invoice{
		border-top:1px solid #f1f1f1;
		margin-bottom:.2rem;
	}
	.shop-all-price{margin-top:.2rem;}
	.fee h4{color:#ba3121;}
	
	.shop-to-url{
		height:.3rem;
		line-height:.3rem;
		font-size:.14rem;
		color:#e36b52;
		background:#fcebd8;
		text-indent:.2rem;
		margin-bottom:.6rem;
	}
</style>
