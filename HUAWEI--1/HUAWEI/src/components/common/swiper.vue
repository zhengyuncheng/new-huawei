<template>
	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="item in data.main_wheels">
				<img :src="item.img_src">
			</div>
		</div>
    <div class="swiper-pagination"></div>
	</div>
</template>

<script>
import Swiper from 'swiper';//模块化的使用。

export default{
	name:"swiper",
	props:["data"],
	data:function(){
		return {

		}
	},
	mounted:()=>{
		var mySwiper = new Swiper ('.swiper-container', {
		loop: true,
		autoplay: true,

		pagination: {
		el: '.swiper-pagination',
		}
		
		})        
	}
}
</script>

<style scoped>


.swiper-container{
	width: 100%;
	height: 1.53rem;
	background: #fff;
	position: relative;
	background-position: center;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	padding-top: .06rem;
}

img{
	border-radius: .09rem;
	width: 4.01rem;
	height: 1.53rem;
	display: block;
	margin: 0 auto;
}


.swiper-pagination-bullets{
  bottom: -0.18rem!important;
  left: 1.3rem;
}
</style>
