<template>
	 
	<div class="hotSell">

		<div class="allPhone">
			<img src="../../assets/img/7.png" alt="">
			<router-link><span>全部机型></span></router-link>
		</div>
		<div class="hotSwiper">
      <div v-for="item in items" :key="item.img" >
		<router-link to="">
			<div class="hotPic">
				<div class="priceIncrease">
					<span>{{item.priceincrease}}</span>
				</div>
				<img :src="item.img" alt="">
				<h4>{{item.msg}}</h4>
				<p>最高可卖</p>
				<b>{{item.price}}</b>
				<strong><del>{{item.noprice}}</del></strong>
			</div>
			
		</router-link>
		</div>
	</div>
	</div>
</template>

<script>
	export default{
		name:'hotSellbanner',
		data:function(){
			return{
		  items:[
			   {
				priceincrease:"+8%",
			  	img:"https://sr.aihuishou.com/image/5a315105a255136011000031.png?x-oss-process=image%2Fresize,m_fixed,w_268,h_268,limit_0",
			  	msg:"华为P9",
			  	price:"¥428",
			  	noprice:"¥396"
	          },
			  {
				  priceincrease:"+8%",
				  img:"https://sr.aihuishou.com/image/5a314b495171350000000121.png?x-oss-process=image%2Fresize,m_fixed,w_268,h_268,limit_0",
				  msg:"荣耀V10",
				  price:"¥1803",
				  noprice:"¥1669"
			  },
			   {
				priceincrease:"+8%",
			  	img:"https://sr.aihuishou.com/image/5a2de81330964b9811000001.png?x-oss-process=image%2Fresize,m_fixed,w_268,h_268,limit_0",
			  	msg:"苹果 iPhone 6",
			  	price:"¥720",
			    noprice:"¥667"
			  },
			  {
				priceincrease:"+8%",
			  	img:"https://sr.aihuishou.com/image/5a28b4c2575a970000000021.png?x-oss-process=image%2Fresize,m_fixed,w_268,h_268,limit_0",
			  	msg:"苹果 iPhone 5S",
			  	price:"¥357",
			    noprice:"¥331"
			  },
			   {
				priceincrease:"+8%",
			  	img:"https://sr.aihuishou.com/image/5a28b493c60057c40a000021.png?x-oss-process=image%2Fresize,m_fixed,w_268,h_268,limit_0",
			  	msg:"苹果 iPhone 6 Plus",
			  	price:"¥900",
			    noprice:"¥833"
			  },
			   {
				priceincrease:"+8%",
			  	img:"https://sr.aihuishou.com/image/5a28b481c60057c40a00001d.png?x-oss-process=image%2Fresize,m_fixed,w_268,h_268,limit_0",
			  	msg:"苹果 iPhone 6S",
			  	price:"¥990",
			    noprice:"¥917"
			  }
		  ],
		 
	    }
	  }
	}	
	
</script>

<style scoped="scoped">
.hotSell{
	width:3.8rem;
	height:2rem;
	background: #f7f6fb; 
	margin:.05rem auto;
	text-align: center;
}
.allPhone{
	position: relative;
    background: white;  
}
.allPhone img{
	width:.73rem;
	height:.18rem;

}
.allPhone span{
	font-size:14px;
	color:#5b5b5b;
	position: absolute;
	left:3rem;
	top:.01rem;
}
.hotSwiper{
    width:3.8rem;
    height:1.9rem; 
    margin-top:.03rem;
	position: relative;
	display: -webkit-flex; 
	 overflow-x: scroll;
	white-space: normal;
	 box-sizing: border-box; 
	
}
 ::-webkit-scrollbar {
    display: none;
}
.hotSwiper .hotPic{
	height:1.75rem;
	width:1.4rem;
	background:white;
	margin-right:.2rem;
	
}
.hotSwiper img{
	height:.9rem;
	width:.9rem;
	margin-left:.2rem;
	padding-top:.08rem;
	
	
}
.hotSwiper h4{
	font-size:14px;
	color:black;
	margin-left:-.01rem;
}
.hotSwiper p{
	font-size:12px;
	color:#717171;
	margin-left:-.01rem;
}
.hotSwiper b{
	font-size:12px;
	color:red;
	position: absolute;
	z-index: 2;
    margin-left:-.35rem;
	
	
}
.hotSwiper strong{
	font-size:12px;
	color:#717171;
	font-weight: 100;
	position: absolute;
	z-index: 1;
	padding-left:.1rem;
}
.hotPic .priceIncrease{
	width:.4rem;
	height:.2rem;
	background: #ff1f30;
	border-radius: 0 .1rem .1rem 0;
}
.priceIncrease span{
	font-size:12px;
	color:white;
	position: absolute;
	top:.04rem;
	margin-left:-.16rem;
}

</style>
