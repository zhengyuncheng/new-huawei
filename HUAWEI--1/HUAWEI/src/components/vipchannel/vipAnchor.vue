<template>
	<div class="vipFloorFour ">
		<div class="point pointRed">出行旅行</div>
		<div class="point">居家生活</div>
		<div class="point">美食酒饮</div>
	</div>
</template>

<script>
	export default{
		name:"vipAnchor",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.vipFloorFour{
		width: 100%;
		height: .34rem;
		background: #f4f4fc;
		display: flex;
		margin-top: .13rem;
	}
	.point{
		width: .6rem;
		height: .34rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: .14rem;
		color: #333;
		font-weight: 500;
		flex: 1;
	}
	.pointRed{
		background: #e06b61;
		color: #fff;
	}
</style>
