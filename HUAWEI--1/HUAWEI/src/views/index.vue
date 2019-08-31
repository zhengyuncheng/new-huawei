<template>
	<!-- <x-loading v-if="isTrue"></x-loading> -->
	<div>
		<!-- 轮播图 -->
		<hw-swiper :data="indexData.data"></hw-swiper>
		<!-- 九宫格导航 -->
		<hw-index-gation></hw-index-gation>
		<!-- 广告投放区 -->
		<hw-index-advert :data="indexData.data"></hw-index-advert>
		<!-- 楼层一 -->
		
		<div class="navOne">
			<h2>精品推荐</h2>
		</div>
		<hw-index-adverttwo :data="indexData.data.main_recommends"></hw-index-adverttwo>
		<!-- 楼层二 -->
		<div class="navOne">
			<h2>手机</h2>
		</div>
		<hw-index-fourmap :data="indexData.data.main_recommends"></hw-index-fourmap>
		<hw-index-adverttwo :data="indexData.data.main_phones"></hw-index-adverttwo>
		<div class="navThere">
			<router-link to="/findoutmore">
				<a href="" class="navMore">
					<span>发现更多手机</span>
				</a>
			</router-link>
		</div>
		<!-- 楼层三 -->
		<div class="navOne">
			<h2>笔记本</h2>
		</div>
		<hw-index-fourmap :data="indexData.data.main_notebookcomputers"></hw-index-fourmap>
		<div class="navThere">
			<router-link to="/findoutmore">
				<a href="" class="navMore">
					<span>发现更多笔记本</span>
				</a>
			</router-link>
		</div>
		<!-- 楼层四 -->
		<div class="navOne">
			<h2>精品平板</h2>
		</div>
		<hw-index-fourmap :data="indexData.data.main_tablepcs"></hw-index-fourmap>
		<hw-index-adverttwo :data="indexData.data.main_tablepcs"></hw-index-adverttwo>
		<div class="navThere">
			<router-link to="/findoutmore">
				<a href="" class="navMore">
					<span>发现更多精品平板</span>
				</a>
			</router-link>
		</div>
		<!-- 楼层五 -->
		<div class="navOne">
			<h2>智能穿戴</h2>
		</div>
		<hw-index-fourmap :data="indexData.data.main_wears"></hw-index-fourmap>
		<hw-index-adverttwo :data="indexData.data.main_wears"></hw-index-adverttwo>
		<div class="navThere">
			<router-link to="/findoutmore">
				<a href="" class="navMore">
					<span>发现更多智能穿戴</span>
				</a>
			</router-link>
		</div>
		<!-- 楼层六 -->
		<div class="navOne">
			<h2>智能家居</h2>
		</div>
		<hw-index-fourmap :data="indexData.data.main_homefurnishing"></hw-index-fourmap>
		<hw-index-adverttwo :data="indexData.data.main_homefurnishing"></hw-index-adverttwo>
		<div class="navThere">
			<router-link to="/findoutmore">
				<a href="" class="navMore">
					<span>发现更多智能家居</span>
				</a>
			</router-link>
		</div>
		<!-- 楼层七 -->
		<div class="navOne">
			<h2>热销配件</h2>
		</div>
		<hw-index-fourmap :data="indexData.data.main_sellwell"></hw-index-fourmap>
		<hw-index-adverttwo :data="indexData.data.main_sellwell"></hw-index-adverttwo>
		<div class="navThere">
			<router-link to="/findoutmore">
				<a href="" class="navMore">
					<span>发现更多热销配件</span>
				</a>
			</router-link>
		</div>
		<hw-footer></hw-footer>
	</div>
</template>

<script>
 	import Footer from '../components/common/Footer'
	import swiper from "../components/common/swiper";
	import indexGation from "../components/index/indexGation";
	import indexAdvert from "../components/index/indexAdvert";
	import indexHead from "../components/index/indexHead";
	import indexAdverttwo from "../components/index/indexAdverttwo";
	import indexFourmap from "../components/index/indexFourmap";
	import indexFoot from "../components/index/indexFoot";
	import api from "../apis/api";


	export default{
		name:"index",
		data(){
			return{
				indexData:{},
				// isTrue:true
			}
		},
		components:{
			"hwFooter":Footer,
			"hw-swiper":swiper,
			"hw-index-gation":indexGation,
			"hw-index-advert":indexAdvert,
			"hw-index-head":indexHead,
			"hw-index-adverttwo":indexAdverttwo,
			"hw-index-fourmap":indexFourmap,
			"hw-index-foot":indexFoot

		},
		methods:{
			_initIndexData(){	
					api.getIndexUrl(data=>{
					this.indexData = data;
					 console.log(data)
				})
			}
		},
		mounted(){
			this._initIndexData()
		}
	}
</script>

<style>
	@import '../assets/css/swiper.min.css';
	.navOne{
		background: #fff;
		text-align: center;
		margin-bottom: .2rem;
	}
	.navOne h2{
		font-size: .185rem;
		color: #424242;
		font-weight: 400;
	}
	.navMore{
		padding: .15rem;
		display: table;
		margin: 0 auto .3rem;
		background: url(../assets/img/arrow_right.png) no-repeat center right;
		background-size: .12rem .12rem;
	}
	.navMore span{
		font-size: .16rem;
		color: #4a4a4a;
		display: table-cell;
	}
</style>
