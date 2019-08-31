<template>
	<div class="advertisingTwo">
		<div class="navTwo">
			
			<div class="navTwoSlide" v-for="(item,id) in data" :key="id">
					<div class="imgArea">
						<p><img :src="item.img_src_info"></p>
						<p class="imgAreaP">{{item.goods_free}}</p>
					</div>
					<p class="pName">{{item.goods_name}}</p>
					<p class="Pprice">
						<b><em>￥</em>{{item.goods_price}}</b>
					</p>
				</a>
			</div>

		</div>
	</div>
</template>
	
<script>
	export default{
		props:["data"],
		name:"indexAdverttwo",
			data(){
				return {
					
				}
			}
		}
</script>

<style scoped>
	.advertisingTwo{
		padding: 0;
		background-color: #fff;
		text-align: center;
		margin-bottom: .25rem;
		margin-top: .2rem;
	}
	.navTwo{
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		box-sizing: content-box;
		overflow-x: scroll;
		white-space: normal;
	}
	.navTwoSlide{
		margin-left: .1rem;
		width: 1.43rem;
		flex-shrink: 0;
		height: 100%;
		position: relative;
	}
	.imgArea{
		height: 1.2rem;
		background: #f9f9f9;
		border-radius: .09rem;
		position: relative;
		overflow: hidden;
		width: 100%;
	}
	.imgArea img{
		width: 70%;
		height: 70%;
	}
	.imgAreaP{
		line-height: 2;
		color: #9b9b9b;
		background: #eeeeee;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		box-sizing: border-box;
		font-size: .1rem;
	}
	.pName{
		padding: .09rem .13rem 0;
		height: .27rem;
		text-overflow: ellipsis;
		color: #333;
		font-size: .13rem;
		white-space: normal;
		max-height: initial;
	}
	.Pprice{
		font-size: .14rem;
		color: #b72b2c;
		padding: .0rem 0 .2rem;
	}
</style>
