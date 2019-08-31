<template>
	<div>
		<img :src="item" alt="" v-for="(item,id) in partition(data[0].goods_info_img_src)" :key="id">
		
	</div>
</template>

<script>
	export default{
		props:["data"],
		methods:{
			partition(str){
				return str.split("#")
			}
		},
		created(){
		}
	}
</script>

<style>
</style>
