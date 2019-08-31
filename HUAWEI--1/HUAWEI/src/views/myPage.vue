<template>
	<div class="myBox">
		<my-header></my-header>
		<my-content></my-content>
		<Footer></Footer>
		<router-view></router-view>
	</div>
	
	
</template>
<script>
	import myHeader from '../components/myHeader';
	import myContent from '../components/myContent';
	import Footer from '../components/common/Footer';
export default {
	name:'myPage',
	data:function(){
		return{
			
		}
	},
	components:{
		myHeader,
		myContent,
		Footer
	}
	
}

</script>
<style>

	*{
		margin:0;
		padding:0;
	}
	a{
		text-decoration: none;
	}
	ul,ol{
		list-style: none;
	}
	html,body{
		width:100%;
	}
	html{
		font-size: 24.15vw;
	}
	 .myBox img{
		border: none;
		display: block;
	}
  .myBox{
	margin:0 auto;
}
	
</style>