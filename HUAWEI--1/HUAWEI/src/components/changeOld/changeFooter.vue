<template>
	<div class="changeFooter">
		<div class="footerTop">
			<img src="../../assets/img/15.png" alt="">
		</div>
		<div class="centerBox">
		<div class="footerCenter" v-for="item in items" :key="item.img">
			<router-link to="href">
			<img :src="item.img" alt="">
			<p>{{item.msg}}</p>
			</router-link>
		</div>
		</div>
		<div class="footerBottom">
			<img src="../../assets/img/16.png" alt="">
		</div>
		<div class="footerFixed">
		<div class="footerFree">
			
			<router-link to="">
				<span>免费估价</span>
			</router-link>
		</div>
	</div>
	</div>
</template>

<script>
	
	export default{
		name:'changeFooter',
		data:function(){
		return{
				items:[
					{   
						img:require('../../assets/img/process1.png'),
						// imgUrl:require('../../assets/img/seperate.png'),
						msg:"回收订单"
					},
					{
						img:require('../../assets/img/process2.png'),
						// imgUrl:require('../../assets/img/seperate.png'),
						msg:"查看代金券"
					},
					{
						img:require('../../assets/img/process3.png'),
						// imgUrl:require('../../assets/img/seperate.png'),
						msg:"常见问题"
					},
					{
						img:require('../../assets/img/process4.png'),
						
						msg:"在线客服"
					},
					{
						img:require('../../assets/img/process4.png'),
						
						msg:"意见反馈"
					}
				]
			}
		}
	}	
</script>

<style scoped="scoped">
.changeFooter{
	width:100%;
	height:4.4rem;
	background: white;
	text-align: center;
}
.footerTop{
	width:100%;
	height:1.3rem;
	border-bottom:1px solid #efefef;
}
.footerTop img{
	width:100%;
	height:1.3rem;
	
}
.centerBox{
	height:.8rem;
	display: -webkit-flex;
	justify-content: center;
	 align-items: center; 
	position: relative;
	border-bottom:1px solid #efefef;
}
.footerCenter{
	width:20%;
	margin-left:.2rem;
	
}
.footerCenter p{
	font-size:10px;
	color:black;
	margin-top:.01rem;
	margin-left:-.14rem;
	
}
.footerCenter img{
	width:.4rem;
	height:.4rem;
	margin-top:-.2rem;
}

.footerBottom img{
	width:100%;
	height:1.2rem;
}
.footerFixed{
	width:3.8rem;
	height:.45rem;
	position: relative;
	margin:0 auto;
	
	
	}
.footerFixed span{
	display: block;
	height:.45rem;
	width:3.8rem;
	font-size:.15rem;
	color:white;
	position: fixed;
	line-height:.45rem;
	bottom: 0;
	background-color: red;
	border-radius: .5rem;
	
	text-align: center;
	

	}
.footerFree{
	width:3.8rem;
	height:.45rem;
    position: fixed;
	bottom: 0;
	z-index: 100;
	
}
</style>
