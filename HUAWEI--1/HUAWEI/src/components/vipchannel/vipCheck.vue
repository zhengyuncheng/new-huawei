<template>
	<div class="vipFloorSan">
		<p class="floorsanOne">- 赚积分 抵现金 -</p>
		<div class="checkDays">
			<ul>
				<li>
					<div class="checkBut checkB"></div>
					<p class="checkButop">1 天</p>
				</li>
				<li>
					<div class="checkBut checkB"></div>
					<p class="checkButop">2 天</p>
				</li>
				<li>
					<div class="checkBut checkB"></div>
					<p class="checkButop">3 天</p>
				</li>
				<li>
					<div class="checkBut checkB"></div>
					<p class="checkButop">4 天</p>
				</li>
				<li>
					<div class="checkBut checkB"></div>
					<p class="checkButop">5 天</p>
				</li>
				<li>
					<div class="checkBut checkB"></div>
					<p class="checkButop">6 天</p>
				</li>
				<li>
					<div class="checkBut"></div>
					<p class="checkButop">7 天</p>
				</li>
			</ul>
		</div>
		<div class="signinBut">签到</div>
	</div>
</template>

<script>
	export default{
		name:"vipCheck",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.vipFloorSan{
		width: 3.78rem;
		height: 1.81rem;
		background: #f4f4fc;
		border-radius: .17rem;
		position: relative;
		margin: .14rem auto .35rem;
	}
	.floorsanOne{
		font-size: .18rem;
		color: #333333;
		text-align: center;
		padding-top: .24rem;
	}
	.checkDays{
		width: 3.22rem;
		height: .51rem;
		margin: .37rem auto 0;
	}
	.checkDays ul{
		width: 3.22rem;
		height: .51rem;
		display: flex;
		justify-content: space-between;
	}
	.checkDays ul li{
		width: .25rem;
		height: .51rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.checkBut{
		width: .25rem;
		height: .25rem;
		border-radius: 50%;
		background: #d3d8eb;
		position:relative;
	}
	.checkB::after{
		display:block;
		content:"";
		width:.25rem;
		height:.03rem;
		background:#d3d8eb;
		position:absolute;
		left:.25rem;
		top:.1rem;
	}
	.checkButop{
		font-size: .12rem;
	}
	.signinBut{
		width: 2.8rem;
		position: absolute;
		left: 13%;
		bottom: -.2rem;
		height: .39rem;
		background: #e16b61;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: .16rem;
		border-radius: .18rem;
	}
	
</style>
