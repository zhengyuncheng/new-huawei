<template>
	<div class="userJudge">
		<div class="userPic">
			<img src="../../assets/img/10.png" alt="">
		</div>
		
		<swiper :options="swiperOption">
	    <swiper-slide v-for="item in items" :key="item.msg">
			<div class="judgeBanner">
				<div class="textBanner" >
				<div class="bannerSlide" >
					<p class="userMsg">{{item.msg}}</p>
					<div class="userInfo">
					<p class="userText">{{item.text}}</p>
					<span>回收了</span>
					<b>{{item.txt}}</b>
					</div>
					</div>
				</div> 
			</div>
		</swiper-slide>
		
       
		</swiper>
		
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import  'swiper/dist/css/swiper.css'
	export default{
		name:'userJudge',
		components: {  
            swiper,  
            swiperSlide  
        },  
		data:function(){
		return{
			swiperOption: {
            slidesPerView: 1,
			paginationClickable: true,
			onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法  
                        this.page = swiper.realIndex+1;  
                        this.index = swiper.realIndex;  
                    },  
			},
			
				items:[
					{
						msg:"很顺利,前期询价诚实回答就真的很顺利的完成了",
						text:"186****7533",
						txt:"华为P8"
					},
					{
						msg:"物流快捷,验收专业，环保节约",
						text:"188****2952 ",
						txt:" 三星 Galaxy Note 4"
					},
					{
						msg:"超赞,很方便,快递员上门取件,然后检测的也很快,返钱也是超快哒",
						text:"183****3791",
						txt:"vivo X7"
					},
					{
						msg:"还不错,以后不用的机器继续这样做",
						text:"186****7727",
						txt:" 华为 Ascend P6"
					},
					{
						msg:"很好的体验很好的企业",
						text:"155****6314 ",
						txt:"荣耀 畅玩5X"
					},
				]
			}
		},
		 //定义这个sweiper对象  
		computed: {  
  
            swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        },  
		mounted () {  
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
            this.swiper.slideTo(0, 0, false);  
        }  
	}	
</script>

<style scoped="scoped">

.userJudge{
	width:4.2rem;
	height:2rem;
	margin-top:.05rem;
	background:  #f8f8f8;
	text-align: center;
}
.userPic{
	width:100%;
	height:.2rem;
	background: white;
}
.userPic img{
	width:.75rem;
	height:.2rem;
	margin-left:.12rem;	
	}
.judgeBanner {
	width:100%;
	height:1.6rem;
	background:;
	margin-top:.05rem;
	background: #f8f8f8;
	position: relative;

}

.textBanner{
	width:3.6rem;
	height:1.5rem;
	background:white;
	margin:0 auto;
	/* display: -webkit-flex; */
}
.judgeBanner .userMsg{
	width:2.4rem;
	height:1.8rem;
	position: absolute;
	top:.4rem;
	left:.3rem;

	
}

.judgeBanner .userText{
	position:absolute;
	top:1rem;
	padding-left:.2rem;
}
.judgeBanner p{
	font-size:12px;
	color:black;
	
}
.judgeBanner span{
	font-size:12px;
	color:#707070;
	position:absolute;
	top:.98rem;
	margin-left:-.8rem;
	
}
.judgeBanner b{
	font-size:12px;
	color:black;
	font-weight: 100;
	position:absolute;
	margin-left:-.4rem;
	top:.98rem;
}

</style>
