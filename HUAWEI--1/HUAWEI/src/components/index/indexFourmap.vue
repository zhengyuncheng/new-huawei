<template>
	
	<div class="navFour">
		<div class="navFourPicture" v-for="(item,id) in data.slice(5,9)" :key="id">
			<div class="fourImg">
			<img :src="item.img_src_info">
			</div>
			<div class="fourOne">{{item.goods_free}}</div>
			<p class="fourP1">{{item.goods_name}}</p>
			<p class="fourP2"><em>￥</em>{{item.goods_price}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		props:["data"],
		name:"indexFourmap",
			data(){
				return {
					
				}
			}
		}
</script>

<style scoped>
	.navFour{
		width: 100%;
		min-height: 50px;
		display: flex;
		box-sizing: border-box;
		flex-wrap: wrap;
	}
	.navFourPicture{
		width: 45%;
		text-align: center;
		position: relative;
		margin: 0 .1rem;
	}
	.fourImg{
		width: 100%;
		height: 1.93rem;
		background-color: #f9f9f9;
		border-radius: .1rem;
		
	}
	.navFourPicture img{
		width: 100%;
		height: 100%;
		border-radius: .1rem;
	}
	.fourOne{
		width: 100%;
		height: .26rem;
		text-align: center;
		font-size: .1rem;
		color: #ffffff;
		position: absolute;
		background: #c7c7c7;
		border-bottom-left-radius: .1rem;
		border-bottom-right-radius: .1rem;
		line-height: .26rem;
		opacity: 0.8;
		top: 1.67rem;
	}
	.fourP1{
		width: 1.6rem;
		font-size: .138rem;
		color: #333;
		display: flex;
		flex-wrap: wrap;
		margin-top: .09rem;
		padding-top: .09rem;
		margin: auto;
		justify-content: center;
		align-items: center;
	}
	.fourP2{
		color: #c9202b;
		font-size: .14rem;
		margin-top: .06rem;
		margin-bottom: .09rem;
		margin: auto;
	}
</style>
