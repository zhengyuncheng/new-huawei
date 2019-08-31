<template>
	<div class="content">
		<div class="banner">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(itemImg,imgid) in img_src" :key="imgid" ><img :src="itemImg" alt=""></div>
					
			
				</div>
				<!-- 如果需要分页器 -->
				<div class="swiper-pagination"></div>
				
				
			</div>
			<div class="leftLi" @click="goBack"><</div>
			<div class="rightLi" @click="boxNav">
				<i>...</i>
				<div class="boxList" v-show="isShow">
					<li @click="toIndex">首页</li>
					<li @click="toIndex">搜索</li>
					<li @click="toHwCategory">分类</li>
					<li @click="toShopCart">购物车</li>

					<a href="http://service.weibo.com/share/share.php#_loginLayer_1566378260147">
					<li>分享</li></a>
					<li @click="tomyPage">我的</li>
				</div>
			</div>
		</div>
		<div class="introduction">
			<h2>￥{{data[0].goods_price}}</h2>
			<h3>{{data[0].goods_name}}{{data[0].goods_black_discount}}</h3>
			<div>
				<span>{{data[0].goods_red_discount}}</span>
				
			</div>
		</div>
		
		<div class="inside">
		<!-- 促销、 -->
			<div class="promotion common">
				<h6>促销</h6>
				<div class="detail">
					<p v-for="(itemsss,ssid) in arrgoods_promotions" :key="ssid">
						<span>{{strsliceKey(itemsss)}}</span>
						{{strsliceValue(itemsss)}}
					</p>
				</div>
			</div>
			<div class="color common">
				<h6>颜色</h6>
				<div class="detail">
					<b v-for="(item,id) in goods_colors" :key="id">{{item}}</b>
				</div>
			</div>
			<div class="common">
				<h6>版本</h6>
				<div class="detail">
					<b v-for="(item,id) in partition(data[0].goods_edition)">{{item}}</b>
					
				</div>
			</div>
			<div class="common">
				<h6>套餐</h6>
				<div class="detail">
					<b v-for="(item,id) in partition(data[0].goods_set_meal)">{{item}}</b>
				</div>
			</div>
			<div class="common num">
				<h6>数量</h6>
				<div class="detail">
					<button @click="minus()">-</button>
					<em>{{data[0].goods_num}}</em>
					<button @click="add()">+</button>
				</div>
			</div>
			<div class="common safe">
				<h6>保障</h6>
				<div class="detail">
					<i v-for="(item,id) in partition(data[0].goods_guarantee)">{{item}}</i>
				</div>	
			</div>
			<div class="common safe serve">
				<h6>服务</h6>
				<div class="detail">
					<ul>
						<li v-for="(item,id) in partition(data[0].goods_service)">{{item}}</li>
					</ul>
				</div>	
			</div>
			<div class="common recommend">
				<h6>推荐</h6>
				<div class="detail">
					<b>HUAWEI P30</b>
					<b>HUAWEI P30 Pro潜水保护壳</b>
					<b>华为NM存储卡</b>
					<b>华为40W超级快充移动电源</b>
				</div>	
			</div>
			<!-- .evaluation 评价-->
			<div class="evaluation">
				<div class="evaluation-top">
					<h2>用户评价（<span>{{data[0].g_evaluate}}</span>）</h2>
					<h3><span>{{data[0].g_good}}%</span>好评></h3>
				</div>
				<div class="lunbo">
					<div class="user-evaluation">
						<div class="eva-left">
							<div class="eva-top">
								<img :src="partition(data[0].g_img)[0]" alt="" >
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
						</div>
						<div class="eva-right">
							<img src="../../assets/img/eva1.png" alt="">
						</div>
					</div>
					<div class="user-evaluation">
						<div class="eva-left">
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
									台风利奇马的速度没有耽误我收单的速度，不两天就到了。这是第四部华为手机，替朋友买的。感觉棒棒哒.不两天就到了
								</p>
							</div>
						</div>
						<div class="eva-right">
							<img src="../../assets/img/eva1.png" alt="">
						</div>
					</div>
					<div class="user-evaluation">
						<div class="eva-left">
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
									台风利奇马的速度没有耽误我收单的速度，不两天就到了。这是第四部华为手机，替朋友买的。感觉棒棒哒.不两天就到了
								</p>
							</div>
						</div>
						<div class="eva-right">
							<img src="../../assets/img/eva1.png" alt="">
						</div>
					</div>
					<div class="last">
						查看更多>
					</div>
				</div>
				<h4 class="bottom">查看全部评价</h4>
			</div>
		</div>
	</div>
	
</template>

<script>
	import Swiper from "swiper"
	export default{
		props:["data","add","minus"],
		data(){
			return {
				isShow:false,
				img_src:{},
				arrgoods_promotions:{},
				goods_color:{},
			}
		},
		created(){
			this.initdata();
		},
		computed:{
 			
		},
		methods:{
			partition(str){
				return str.split("#")
			},
			strsliceKey(str){
				return str.slice(0,4)
			},
			strsliceValue(str){
				return str.slice(5,)
			},
			initdata(){
				let arrimg = this.data[0].img_src.split("#");
				this.img_src = arrimg;
				let promotions = this.data[0].goods_promotion.split("#");
				this.arrgoods_promotions = promotions;
				this.goods_colors = this.data[0].goods_color.split("#");
				
			},
			boxNav(){
				this.isShow = this.isShow == true ? false:true;
				// this.isShow = !this.isShow;
			},
			toIndex(){
				this.$router.push({
					name:"index"
				})
			},
			toHwCategory(){
				this.$router.push({
					name:"HwCategory"
				})
			},
			toShopCart(){
				this.$router.push({
					name:"ShopCart"
				})
			},
			tomyPage(){
				this.$router.push({
					name:"myPage"
				})
			},
			goBack(){
				this.$router.go(-1)
			}
		},
		mounted(){
			 var mySwiper = new Swiper ('.swiper-container', {
			loop: true, // 循环模式选项
			autoplay: {
				disableOnInteraction: false,
			},
			// 如果需要分页器
			pagination: {
			  el: '.swiper-pagination',
			  type: 'custom',
			  renderCustom: function (swiper, current, total) {
				  return current + ' / ' + total;
				  }
			},
		  })        
		}
	}
</script>

<style scoped="scoped">
	@import url("../../assets/css/swiper.css");
	.recommend{
		margin-left:0;
	}
	.swiper-pagination-custom{
			width:.5rem;
			height:.16rem;
			background:#dbd9dc;
			position: absolute;
			bottom:.07rem;
			left:3.5rem;
			border-radius:.2rem;
			font-size:.14rem;
			
	}
	.boxList{
		position: absolute;
		top:.4rem;
		right:0rem;
	}
	.boxList li{
		line-height:.4rem;
		width:1.1rem;
		height:.4rem;
		font-size:.18rem;
		border:1px solid #ccc;
		text-align:center;
		border-radius:5px;
		background:rgba(255,255,255,.9);
		font-weight:normal;
		color:#000;
	}           
</style>
