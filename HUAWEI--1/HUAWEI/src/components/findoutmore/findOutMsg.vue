<template>

	<div class="moreDetails">
		<div class="detailsImg">
			<div class="detailsOne">新品</div>
			<img src="../../assets/img/65294mp.png">
		</div>
		<div class="detailsMsg">
			<p class="msgOne">HUAWEI nova 5i Pro</p>
			<p class="msgTwo">￥<span>2199</span></p>
			<p class="msgThe">2658人评价  99%好评</p>
		</div>
	</div>
	
</template>

<script>
	export default{
		name:"findOutMsg",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.moreDetails{
		width: 3.9rem;
		height: 1.7rem;
		margin: .05rem auto;
		display: flex;
	}
	.detailsImg{
		width: 1.61rem;
		height: 1.7rem;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		background: #f8f8f8;
	}
	.detailsImg img{
		width: 1.21rem;
		height: 1.22rem;
	}
	.detailsOne{
		width: .3rem;
		height: .2rem;
		font-size: .07rem;
		background: #78baff;
		color: #fff;
		text-align: center;
		position: absolute;
		z-index: 9;
		top: 0;
	}
	.detailsMsg{
		width: 2.25rem;
		height: 1.7rem;
		margin-left: .13rem;
	}
	.msgOne{
		font-size: .1rem;
		font-weight: 600;
		padding-top: .2rem;
	}
	.msgTwo{
		font-size: .06rem;
		color: #c12234;
		font-weight: 600;
		padding-top: .6rem;
	}
	.msgTwo span{
		font-size: .18rem;
		font-weight: 600;
	}
	.msgThe{
		font-size: .06rem;
		color: #979797;
		padding-top: .05rem;
	}
</style>
