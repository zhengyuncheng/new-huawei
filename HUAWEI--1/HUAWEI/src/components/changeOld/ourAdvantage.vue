<template>
	<div class="ourAdvantage">
	   <div class="advantageTop">
		   <img src="../../assets/img/8.png" alt="">
	   </div>
	 <div class="advantageBottom">
	  <div class="leftCredit">
		  <router-link to="">
			  <h2>信用回收</h2>
			  <p>最高立得2000元预付款</p>
			  <div class="newOld">
				  <span>先购新机，后寄旧机</span>
			  </div>
			  <img src="../../assets/img/14.png" alt="">
		  </router-link>
	  </div>
	  <div class="rightCredit" >
		  <router-link to="">
           <h3>交易便捷</h3>
           <p>顺丰上门取件</p>
		   <span>质检员上门服务</span>
		   <img src="../../assets/img/12.png"> 
		  </router-link>

		  
	  </div>
	   <div class="rightCredit" >
	  		  <router-link to="">
	       <h3>安全放心</h3>
	       <p>Blancco专业工具</p>
	  		   <span>清除隐私</span>
	  		   <img src="../../assets/img/13.png"> 
	  		  </router-link>
	  
	  		  
	  </div>


	 </div>
	</div>
</template>

<script>
	export default{
		name:'ourAdvantage',
		data:function(){
		return{
				
			}
		}
	}	
</script>

<style scoped="scoped">
.ourAdvantage{
	width:100%;
	height:2.24rem;
	background:#f8f7fc;
	text-align: center;
}
.advantageTop{
	background: white;
}
.advantageTop img{
	width:.75rem;
	height:.2rem;
	margin-left:.12rem;
}	
.advantageBottom{
	width:3.8rem;
	height:2rem;
	background:#f8f7fc;
	margin:0 auto;
}
.leftCredit{
	width:1.9rem;
	height:2rem;
	background:white;
    position: relative;
	margin-right:.05rem;
	
}
.leftCredit h2{
	font-size:.17rem;
	color:black;
	position: absolute;
	top:.1rem;
	left:.1rem;
}
.leftCredit p{
	font-size:10px;
	color:#505050;
	position: absolute;
	top:.32rem;
	left:.1rem;
}
.newOld{
	width:1.4rem;
	height:.2rem;
	background: #58b998;
	border-radius: .1rem;
	position: absolute;
	left:.1rem;
	top:.6rem;
	
}
.newOld span{
	font-size:10px;
	color:white;
	position: absolute;
	left:.1rem;
	top:.01rem;
	
}
.leftCredit img{
	width:1.1rem;
	height:1.1rem;
	position: absolute;
	top:.9rem;
	left:.38rem;
}
.rightCredit{
	width:1.8rem;
	height:.98rem;
	background:white;
	position:relative;
	left:2rem;
	top:-2rem;
	margin-bottom:.05rem;
}

.rightCredit h3{
	font-size:.15rem;
	color:black;
	position: absolute;
	left:.1rem;
	top:.1rem;
	
}
.rightCredit p{
	font-size:10px;
	color:black;
	position: absolute;
	left:.1rem;
    top:.3rem;
	
}
.rightCredit span{
	font-size:10px;
	color:black;
	position: absolute;
	left:.1rem;
	top:.5rem;
	
}
.rightCredit img{
	width:.3rem;
	height:.3rem;
	position:absolute;
	left:1.3rem;
	top:.2rem;
}
</style>
