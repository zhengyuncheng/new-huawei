<template>
	<div class=" bottomDow">
					   <router-link to="">
						  <h3>{{msg}}</h3> 
					   </router-link>
				<!-- 	<div class="bottomTop" v-for="it in its" :key="it.img"> -->
								
							<ul>
							<li v-for="item in list" :key="item.id" @click="go(item.router)">
									<img :src="item.img" alt="">
										<p>{{ item.text }}</p>
							</li>
							</ul>
								
				
				   </div>
</template>

<script>
	export default{
		name:'bottomDow',
		data:function(){
			return{
				msg:"我的VMALL",
				"list":[
					{
					router:'/vipchannel',
					img:"https://res.vmallres.com/pimages/pages/mygrid/3NgsqeFkJSdbC5EaZt8k.png",
					text:"会员频道"
					},
					{
					
					img:"https://res.vmallres.com/pimages/pages/mygrid/bIyq5YnlBD7buXPyXZZE.png",
					text:"实名认证"
					},
					{
					router:'/location',
					img:"https://res.vmallres.com/pimages/pages/mygrid/9wVcOCYjKQ5oKQ5ujcFN.png",
					 text:"收货地址"
					}
				 ]
				
			}
		},
		methods: {
		go (ip) {
		  this.$router.push({path: ip})
		}
	}
	}
</script>

<style scoped="scoped">
	.bottomDow{
		display: -webkit-flex;
		width:4rem;
		height:1.2rem;
		background: white;
		position: relative;
		margin-top:.05rem;
		border-radius:.1rem;
	}
	.bottomDow h3{
		font-size:12px;
		color:black;
		position: absolute;
		top:.1rem;
		left:.1rem;
	}
	/* .bottomDow span{
		font-size:10px;
		color:#545454;
		position: absolute;
		top:.1rem;
		left:3.2rem;
	} */
	.bottomDow ul{
		width:100%;
		} 
	.bottomDow ul li{
		width:18%;
		float:left;
		padding-top:.4rem;
		margin-left:.28rem;
	}
	.bottomDow p{
		font-size:10px;
		color:#545454;
	}
	
	.bottomDow img{
		width:.4rem;
		height:.4rem;
		padding-left: .028rem;
	}
</style>
