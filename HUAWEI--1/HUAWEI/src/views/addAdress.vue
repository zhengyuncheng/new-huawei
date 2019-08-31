<template>
	<div>
		<add-adress-head></add-adress-head>
		<add-adress-msg></add-adress-msg>
		<add-adress-foot></add-adress-foot>
	</div>
</template>

<script>
	import addAdressHead from "../components/addAdress/addAdressHead";
	import addAdressMsg from "../components/addAdress/addAdressMsg";
	import addAdressFoot from "../components/addAdress/addAdressFoot";
	
	
	export default{
		components:{
			"add-adress-head":addAdressHead,
			"add-adress-msg":addAdressMsg,
			"add-adress-foot":addAdressFoot
		}
	}
</script>

<style>
</style>
