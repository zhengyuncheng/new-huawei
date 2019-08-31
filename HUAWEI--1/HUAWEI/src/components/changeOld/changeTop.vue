<template>
<div class="changeTop">
	<div class="changeOne">
			<img src="../../assets/img/3.png" @click="togos">
		<h3>以旧换新</h3>
	</div>
	<router-link to="">
		<img src="../../assets/img/1.png" alt="" class="search">
		<div class="phoneType"><span>搜索您要买的机型</span></div>
	</router-link>
	
	</div>
	
</template>

<script>
	export default{
		name:'changeTop',
		data:function(){
			return{
				
			}
		},
		methods:{
			togos(){
				this.$router.go(-1)
			}
		}
	}	
	
	
</script>

<style scoped>


.changeTop{
	width:4.2rem;
	height:.8rem;
	background:white;
	}
.changeOne{
	width:4.2rem;
	height:.36rem;
	position: relative;
}
.changeOne img{
	width:.2rem;
	height:.2rem;
	position: absolute;
	top:.1rem;
	left:.2rem;
}	
.changeOne h3{
	font-size:.17rem;
	color:black;
	position: absolute;
	top:.1rem;
	left:1.7rem;

}	
.phoneType{
	 width:3.8rem;
	 height:.38rem;
	 background: #fbf6fc;
	 border-radius:.2rem; 
	 position: absolute;
	 left:.18rem;
	 top:.4rem;
	 border:none;
 }
 .phoneType span{
	 font-size:12px;
	 color:grey;
	 position: absolute;
	 top:.1rem;
	 left:1.4rem;
 }
.search{
	position: absolute;
	left:1.1rem;
	top:.46rem;
	z-index: 2;
	
}	
</style>
