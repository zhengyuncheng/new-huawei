<template>
	<div class="creditProcess">
		<div class="prcessPic">
			<img src="../../assets/img/9.png" alt="">
			
		</div>
	  <div class="onlinePrcess">
		   <div class="oImg">
		   <img src="../../assets/img/seperate.png" alt="" class="imgUrl">
		   </div>
		   <div class="oImg oImg1">
		   <img src="../../assets/img/seperate.png" alt="" class="imgUrl">
		   </div>
		    <img src="../../assets/img/seperate.png" alt="" class="imgUrl">
		<div class="prcessSubmit" v-for="item in items" :key="item.img">
			<img :src="item.img" alt="">
			<p>{{item.msg}}</p>
		</div>
	   </div>
	</div>
</template>

<script>
	export default{
		name:'creditProcess',
		data:function(){
		return{
			
				items:[
					{
						img:require('../../assets/img/process1.png'),
						// imgUrl:require('../../assets/img/seperate.png'),
						msg:"在线提交"
					},
					{
						img:require('../../assets/img/process2.png'),
						// imgUrl:require('../../assets/img/seperate.png'),
						msg:"收预付款"
					},
					{
						img:require('../../assets/img/process3.png'),
						// imgUrl:require('../../assets/img/seperate.png'),
						msg:"专业质检"
					},
					{
						img:require('../../assets/img/process4.png'),
						
						msg:"发放尾款"
					}
				]
			}
		}
	}	
</script>

<style scoped="scoped">
.creditProcess{
	height:1.5rem;
	width:100%;
	margin-top:.05rem;
	background: white;
	text-align: center;
	
}
.prcessPic img{
	width:.75rem;
	height:.2rem;
	margin-left:.12rem;
}
.onlinePrcess{
	display: -webkit-flex;
	justify-content: center;
	align-items: center;
	position: relative;
}
.prcessSubmit{
	width:25%;
	margin-left:.3rem;
	
}
.prcessSubmit img{
	width:.4rem;
	height:.4rem;
	position: absolute;
	top:.2rem;
}
.onlinePrcess .imgUrl{
	width:.2rem;
	height:.2rem;
	position: absolute;
	top:.3rem;
	padding-left:.1rem;
}
.oImg .imgUrl{
	position: absolute;
	padding-left:.9rem;
}
.oImg1 .imgUrl{
	position: absolute;
	padding-left:3rem;
}
.prcessSubmit p{
	font-size:10px;
	color:#545454;
	position: absolute;
	top:.7rem;
	
} 
</style>
