<template>
	<div class="headAdvertising">
		<div class="advertisingOne">
			<!-- 第一个Ul -->
			<ul>
				<li>
					
					<img :src="data.main_advertisements[0].img_src">
				
				</li>
				<li>
		
					<img :src="data.main_advertisements[1].img_src">
					
			
					<img :src="data.main_advertisements[2].img_src">
		
				</li>
			
				<li>
				
					<img :src="data.main_advertisements[3].img_src">
				
				</li>
				<li>
					
					<img :src="data.main_advertisements[4].img_src">
			
				</li>
			
				<li>
			
					<img :src="data.main_advertisements[5].img_src">
				
				</li>
				<li>
					
					<img :src="data.main_advertisements[6].img_src">
	
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		props:["data"],
		name:"indexAdvert",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.headAdvertising{
		margin-bottom: .1rem;
		padding-bottom: .5rem;
		padding-top: .2rem;
		background-color: #fff;
		text-align: center;
		padding: 0 .06rem;
		min-height: 20px;
	}
	.advertisingOne{
		border-top-left-radius: .25rem;
		border-top-right-radius: .25rem;
	}
	.advertisingOne ul{
		margin-top: .01rem;
		width: 100%;
		display: flex;
		box-sizing: border-box;
		flex-wrap: wrap;
		margin-top: .02rem;
	}
	.advertisingOne li{
		width: 49%;
		margin-right: .03rem;
	}
	.advertisingOne li img{
		display: block;
		border: 0;
		max-width: 100%;
		height: auto;
		vertical-align: top;
	}
	.advertisingOne li:nth-child(2n){
		margin-top: .02rem;
	}
</style>
