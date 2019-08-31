<template>
	<div>
		<div class="headNaviGation">
			<div class="headSudoku">
				<div class="headSwiper">
					<img src="../../assets/img/NavOne.png">
					<p>每日抽奖</p>
				</div>
				<div class="headSwiper">
					<img src="../../assets/img/lggE0dvyR.png">
					<p>积分抵现</p>
				</div>
				<div class="headSwiper">
					<img src="../../assets/img/lhggEB4mp.png">
					<p>升级礼包</p>
				</div>
				<div class="headSwiper">
					<img src="../../assets/img/JGGZOMY.png">
					<p>优先发货</p>
				</div>
				<div class="headSwiper">
					<img src="../../assets/img/lggMtFbQYg.png">
					<p>免运费退换货</p>
				</div>
				<div class="headSwiper">
					<img src="../../assets/img/JGGZOMY.png">
					<p>以旧换新</p>
				</div>
				<div class="headSwiper">
					<img src="../../assets/img/lggMtFbQYg.png">
					<p>新人礼包</p>
				</div>
			</div>
		</div>
		<!-- 九宫格导航 end -->
		
		<!-- 箭头  start -->
		<div class="headNavBut">
			<img src="../../assets/img/arrow_shang.png">
		</div>
	</div>
</template>

<script>
	export default{
		name:"vipNav",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.headNaviGation{
		padding: .18rem .06rem 0;
		background-color: #fff;
	}
	.headSudoku{
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 1;
		box-sizing: content-box;
		display: flex;
		flex-wrap: wrap;
	}
	.headSwiper{
		width: 20%;
		height: 75%;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: .15rem;
	}
	.headSwiper img {
		display: block;
		width: .5rem;
		height: .5rem;
		margin-bottom: .06rem;
	}
	.headSwiper p {
		font-size: .11rem;
		width: .4rem;
		text-align: center;
		color: #646464;
		text-overflow: ellipsis;
	}
	.headNavBut{
		width: 100%;
		height: .23rem;
		display: flex;
		justify-content: center;
	}
	.headNavBut img{
		display: block;
	}
</style>
