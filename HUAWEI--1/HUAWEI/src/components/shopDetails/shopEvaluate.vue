<template>
	<div class="evaluate">
		<div class="evaluate-nav">
			<h2>最热门</h2>
			<h2>有图</h2>
			<h2>全部</h2>
		</div>
		<div class="user-eva">
			<div class="eva-top">
				<img src="../../assets/img/head.png" alt="">
				<div>
					<h4>{{data[0].g_name}}</h4>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<p>
					{{data[0].g_good_info}}
				</p>
				
			</div>
			<div class="photo">
					<img src="../../assets/img/eva1.png" alt="">
					<img src="../../assets/img/eva1.png" alt="">
					<img src="../../assets/img/eva1.png" alt="">
					<img src="../../assets/img/eva1.png" alt="">
					<img src="../../assets/img/eva1.png" alt="">
			</div>
			<div class="eva-bottom">
				<span>2018-08-13</span>
				<div>
					<img src="../../assets/img/zan.png" alt="">
					<i>0</i>
				</div>
			</div>
			<div class="service eva-bottom">
				<p>
					<span>华为商城客服：</span>
					万里河山风景好，华为手机不能少；花儿枝头开正闹，快用手机把它照！
				</p>
				<div>
					<img src="../../assets/img/zan.png" alt="">
					<i>赞客服0</i>
				</div>
			</div>
			
		</div>
		<div class="user-eva">
			<div class="eva-top">
				<img src="../../assets/img/head.png" alt="">
				<div>
					<h4>福****</h4>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<p>
					台风利奇马的速度没有耽误我收单的速度，不两天就到了。这是第四部华为手机，替朋友买的。感觉棒棒哒
				</p>
				
			</div>
			<div class="photo">
					<img src="../../assets/img/eva1.png" alt="">
					<img src="../../assets/img/eva1.png" alt="">
					<img src="../../assets/img/eva1.png" alt="">
					<img src="../../assets/img/eva1.png" alt="">
					<img src="../../assets/img/eva1.png" alt="">
			</div>
			<div class="eva-bottom">
				<span>2018-08-13</span>
				<div>
					<img src="../../assets/img/zan.png" alt="">
					<i>0</i>
				</div>
			</div>
			<div class="service eva-bottom">
				<p>
					<span>华为商城客服：</span>
					万里河山风景好，华为手机不能少；花儿枝头开正闹，快用手机把它照！
				</p>
				<div>
					<img src="../../assets/img/zan.png" alt="">
					<i>赞客服0</i>
				</div>
			</div>
			
		</div>
	</div>	
</template>

<script>
	export default{
		name:"shopEvaluate",
		props:["data"]
	}
</script>

<style scoped="scoped">
	

</style>
