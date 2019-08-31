<template>
	<div class="Fintegral">
		<div class="vipFloorOne">
			<img src="../../assets/img/e378a.png">
		</div>
		<div class="vipFloorTwo">
			<p class="Twopri">飞常准200元机场贵宾厅</p>
			<div class="twott">
				<p>888 积分</p>
				 <span>￥200</span>
			</div>
		</div>
		<div class="vipFloorThe">
			<div class="theOne">兑换</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"vipAnchorMsg",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.Fintegral{
		width: 3.78rem;
		height: 1.2rem;
		background: #f4f4fc;
		border-radius: .09rem;
		margin: 0 auto .12rem;
		display: flex;
		justify-content: space-between;
	}
	.vipFloorOne{
		width: 1.3rem;
		height: 1.2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.vipFloorOne img{
		width: .92rem;
		height: .92rem;
	}
	.vipFloorTwo{
		width: 1.6rem;
		height: 1.2rem;
		margin-top: .25rem;
	}
	.Twopri{
		width: 1.23rem;
		font-size: .15rem;
	}
	.twott{
		width: 1.2rem;
		display: flex;
		margin-top: .1rem;
	}
	.twott p{
		color: #dc735e;
		font-size: .15rem;
		font-weight: 550;
		margin-bottom: .2rem;
	}
	.twott span{
		font-size: .08rem;
		text-decoration: line-through;
		color: #a1a0a5;
	}
	
	
	
	.vipFloorThe{
		width: 1.05rem;
		height: .92rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 5px;
	}
	.theOne{
		width: .62rem;
		height: .32rem;
		border: 1px solid #e06b62;
		border-radius: .2rem;
		font-size: .15rem;
		color: #e06b62;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
