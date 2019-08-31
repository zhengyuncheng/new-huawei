<template>
	<div class="contentBottom">
					   <router-link to="">
						  <h3>{{msg}}</h3> 
					   </router-link>
					<!-- <div class="dowPic" v-for="it in its" :key="it.img"> -->
								
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
		name:'contentBottomdown',
		data:function(){
			return{
				
				 msg:"我的服务",
 				 "list":[
 				 {
					router:'/changeOld',
					img:"https://res.vmallres.com/pimages/pages/mygrid/BcFUNcxBeM9fewTc16QC.png",
 				 	text:"以旧换新"
 				 },
 				{
				img:"https://res.vmallres.com/pimages/pages/mygrid/h1PE6B5E197at9YppSYw.png",
 				 text:"常见问题"
 				 },
				 {
				img:"https://res.vmallres.com/pimages/pages/mygrid/mGAUZ1NAAIOTboamOkrY.png",
				 text:"意见反馈"
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
	/* .contentBottom span{
		font-size:10px;
		color:#545454;
		position: absolute;
		top:.1rem;
		left:3.2rem;
	} */
	 .contentBottom ul{
		width:100%;
		} 
	.contentBottom ul li{
		width:18%;
		float:left;
		padding-top:.4rem;
		margin-left:.28rem;
	}
	.contentBottom p{
		font-size:10px;
		color:#545454;
	}
	
	.contentBottom img{
		width:.4rem;
		height:.4rem;
		padding-left: .028rem;
	}
</style>
