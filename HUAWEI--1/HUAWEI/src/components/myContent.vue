<template>
 <div class="content">
	<div class="contentTop">
		<ul>
			<li>
				<router-link to="">
					<p class="one">-</p>
					<p>积分</p>
				</router-link>
			</li>
			<li class="list">
				<router-link to="">
					<p class="one">-</p>
					<p>优惠券</p>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<p class="one">-</p>
					<p>代金券</p>
				</router-link>
			</li>
		</ul>
	</div>
	<div class="contentBottom" >
		
		<router-link to="/OrderCenter">
			<h3>我的订单</h3>
			<span>全部订单></span>
		</router-link>
		
		<ul>
			<router-link to="/OrderCenter">
			<li>
			<img src="../assets/img/3W.png">
				<p>待付款</p>
			</li>
			</router-link>
			
			<router-link to="/OrderCenter">
			<li>
			<img src="../assets/img/3e.png">
				<p>待收货</p>
			</li>
			</router-link>
			
			<router-link to="/Refund">
			<li>
			<img src="../assets/img/3r.png">
				<p>退货/换货</p>
			</li>
			</router-link>
			
			
			<router-link to="/recoverList">
			<li>
			<img src="../assets/img/3t.png">
				<p>回收单</p>
			</li>
			</router-link>
			
		</ul>
	</div>
            <bottomDow></bottomDow> 
	     <contentBottomdown></contentBottomdown>
		
		 <div class="contentDown">
			 <img src="../assets/img/21.png" alt="">
		 </div>
</div>
</template>

<script>
	
 	import bottomDow from './myContent/bottomDow'
 	import contentBottomdown from './myContent/contentBottomdown'
	export default{
		name:'myContent',
		data:function(){
			return{
		
			}
		},
		components:{
 			bottomDow,
			contentBottomdown
			
		},
		methods: {
			go (ip) {
				this.$router.push({path: ip})
			}
		}
	}
</script>

<style scoped="scoped">

.content{
	width:4rem;
	height:5.36rem;
	background: #f1f1f1;
	position: relative;
	top:-.5rem;
	margin :0 auto;
	border-radius:.1rem;
	
}

.contentTop{
	width:4rem;
	height:.6rem;
	background: white; 
	border-radius:.1rem;
	display: -webkit-flex; 
	justify-content: center;
	align-items: center;
}
.contentTop ul{
	display: -webkit-flex; 
	

}
.contentTop ul li{
	-webkit-align-self: center;
	width:1.18rem;
	height:.38rem;
	


}
.contentTop ul li p{
	font-size:10px;
	color:#545454;
	text-align: center;
}
.contentTop ul li .one{
	color:black;
}
.contentTop ul .list{
	border-left:1px solid #e6e6e6;
	border-right:1px solid #e6e6e6;
}
.contentBottom{
	display: -webkit-flex;
	width:4rem;
	height:1.2rem;
	background: white;
	position: relative;
	margin-top:.05rem;
	border-radius:.1rem;
}
.contentBottom h3{
	font-size:12px;
	color:black;
	position: absolute;
	top:.1rem;
	left:.1rem;
}
.contentBottom span{
	font-size:10px;
	color:#545454;
	position: absolute;
	top:.1rem;
	left:3.2rem;
}
.contentBottom ul {
	width:100%;
}
.contentBottom ul li{
	width:25%;
	float:left;
	padding-top:.4rem;
}
.contentBottom p{
	font-size:13px;
	color:#545454;
	text-align: center;
}

.contentBottom img{
	width:.27rem;
	height:.25rem;
	margin: .1rem auto;
	margin-bottom: .1rem;
}
/* contentDown */
.contentDown{
	height:.3rem;
	 display: -webkit-flex;
	justify-content: center;
	align-items: center;
	margin-top:.05rem;
}
.contentDown img{
   	 width:.27rem;
	 height:.27rem;
	 margin-top:.1rem;
	 
}
</style>
