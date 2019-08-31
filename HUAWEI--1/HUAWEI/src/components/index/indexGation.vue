<template>
		<div class="headNaviGation">
			<div class="headSudoku">
				<div class="headSwiper">
					<router-link to="/digitalBenefit">
					<img src="../../assets/img/NavOne.png">
					<p>数码惠</p>
					</router-link>
				</div>
					<div class="headSwiper">
						<router-link to="/vipchannel">
						<img src="../../assets/img/lggE0dvyR.png">
						<p>会员领券</p>
						</router-link>
					</div>
				<div class="headSwiper">
					<router-link to="/InteFurniture">
						<img src="../../assets/img/lhggEB4mp.png">
						<p>智能家居</p>
					</router-link>
				</div>
				<div class="headSwiper">
					<router-link to="/changeOld">
					<img src="../../assets/img/JGGZOMY.png">
					<p>以旧换新</p>
					</router-link>
				</div>
				<div class="headSwiper">
					<router-link to="/newGift">
					<img src="../../assets/img/lggMtFbQYg.png">
					<p>新人礼包</p>
					</router-link>
				</div>
			</div>
		</div>
</template>

<script>
	export default{
		name:"indexGation",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.headNaviGation{
		padding: 0 .06rem;
		background-image: url(../../assets/img/headNav.png);
		background-color: #fff;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		height: 1.4rem;
	}
	.headSudoku{
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 1;
		box-sizing: content-box;
		display: flex;
	}
	.headSwiper{
		width: 20%;
		height: 100%;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.headSwiper img {
		display: block;
		width: .5rem;
		height: .5rem;
		margin-bottom: .06rem;
		margin-top: .3rem;
	}
	.headSwiper p {
		font-size: .11rem;
		color: #646464;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
</style>
