<template>
	<div class="sellGoods">
		<div class="changePic">
			<img src="../../assets/img/6.png" alt="">
		</div>
	<div class="newgoodsBox">
		<div class="newGoods">
			<router-link to="" >
				<img src="../../assets/img/phone1.png">
					<p>手机</p>
			</router-link>
			
			<router-link to="" >
				<img src="../../assets/img/pad1.png">
					<p>平板</p>
			</router-link>
			
			<router-link to="" >
				<img src="../../assets/img/pc1.png">
					<p>笔记本</p>
			</router-link>
			
			<router-link to="" >
				<img src="../../assets/img/camera1.png">
					<p>相机</p>
			</router-link>
			
			<router-link to="" >
				<img src="../../assets/img/watch1.png">
					<p>数码</p>
			</router-link>
		</div>
	  </div>
	</div>
</template>

<script>
	export default{
		name:'changeSell',
		data:function(){
			return{
// 				items:[
// 					{
// 					
// 				img:"https://res.vmallres.com/pimages/pages/mygrid/0FHCWcjJLxXDvHYzrHcE.png",
// 				text:"手机",
// 				},
// 				{
// 				
// 				img:"https://res.vmallres.com/pimages/pages/mygrid/0FHCWcjJLxXDvHYzrHcE.png",
// 				text:"平板",
// 				},
// 				{
// 				
// 				img:"https://res.vmallres.com/pimages/pages/mygrid/0FHCWcjJLxXDvHYzrHcE.png",
// 				text:"笔记本",
// 				},
// 				{
// 				
// 				img:"https://res.vmallres.com/pimages/pages/mygrid/0FHCWcjJLxXDvHYzrHcE.png",
// 				text:"相机",
// 				},
// 				{
// 				
// 				img:"https://res.vmallres.com/pimages/pages/mygrid/0FHCWcjJLxXDvHYzrHcE.png",
// 				text:"数码",
// 				}
// 				]
			}
		}
	}	
	
</script>

<style scoped="scoped">
.sellGoods{
	width:3.8rem;
	height:1.18rem;
	text-align: center;
	margin:0 auto;
	
}

.changePic img{
	width:.73rem;
	height:.18rem;
	
}
.newgoodsBox{
	margin-top:.1rem;
	display: -webkit-flex;
}
.newGoods{
	width:20%;
	display: -webkit-flex; 
	justify-content: space-between;
	align-items: center; 
	flex: 1;
}
.newGoods p{
	font-size:12px;
	color:black;
	
}	
	
.newGoods img{
	width:.65rem;
	height:.6rem;
	
	
}	
	
	
	
	
	
	
</style>
