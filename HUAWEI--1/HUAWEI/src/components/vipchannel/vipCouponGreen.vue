<template>
	<div class="vipfloor1">
		<div class="floorOne"><img src="../../assets/img/LC7320c3.png"></div>
		<div class="floorTwo">
			<div class="floorPrice">
				<div>￥<span>20</span></div>
				<div class="priceCan">v0-v5</div>
			</div>
			<p class="pricePone">限华为配件类 （除华为FreeLace无线耳机系列、HUAWEI FreeBuds）</p>
			<p class="pricePtwo">2019.08.01-2019.08.15</p>
		</div>
		<div class="floorThe">
			<p><span>20</span>积分</p>
			<div class="floorTheBut">兑换</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"vipCouponGreen",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.vipfloor1{
		width: 3.76rem;
		height: .97rem;
		background: url(../../assets/img/2.png) no-repeat;
		background-size: 100%;
		margin: .14rem auto;
		display: flex;
		justify-content: space-between;
	}
	.floorOne{
		width: 1.03rem;
		height: .97rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.floorOne img{
		width: .8rem;
		height: .8rem;
	}
	
	.floorTwo{
		width: 1.9rem;
		height: .97rem;
	}
	.floorPrice{
		font-size: .11rem;
		color: #de6958;
		display: flex;
		width: .8rem;
		justify-content: space-between;
		align-items: center;
		margin-top: .18rem;
		margin-bottom: .02rem;
	}
	.floorPrice span{
		font-size: .17rem;
	}
	.priceCan{
		width: .44rem;
		height: .15rem;
		background: #ddbfbd;
		color: #fffefa;
		text-align: center;
		font-size: .08rem;
		border-radius: .08rem;
		line-height: .15rem;
	}
	.pricePone{
		width: 1.9rem;
		font-size: .11rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-bottom: .06rem;
	}
	.pricePtwo{
		font-size: .09rem;
		color: #777777;
	}
	
	
	.floorThe{
		width: .84rem;
		height: .97rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	
	.floorThe p{
		font-size: .13rem;
		font-weight: 800;
		margin-bottom: .12rem;
	}
	.floorTheBut{
		width: .55rem;
		height: .26rem;
		border: 2px solid #e46961;
		text-align: center;
		font-size: .13rem;
		line-height: .26rem;
		border-radius: .14rem;
		color:  #e46961;
	}
</style>
