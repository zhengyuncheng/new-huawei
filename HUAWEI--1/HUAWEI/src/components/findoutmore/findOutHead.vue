<template>
	<div class="hardmore">
		<ul>
			<li>最新</li>
			<li>人气</li>
			<li>价格<img src="../../assets/img/ranks_v1.png"></li>
			<li>评价</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"findOutHead",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.hardmore{
		width: 100%;
		height: .41rem;
		display: flex;
	}
	.hardmore ul{
		width: 100%;
		height: .41rem;
		display: flex;
		justify-content: space-around;
	}
	.hardmore ul li{
		width: .88rem;
		height: .41rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: .15rem;
	}
	.hardmore img{
		width: .15rem;
		height: .15rem;
	}
</style>
