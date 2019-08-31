<template>
	<header>
		<img src="../../assets/images/img/back.png" @click="toBack">
		【华为商城】新人见面礼
	</header>
</template>

<script>
	export default{
		name:"newHeader",
		methods:{
			toBack(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
</style>
