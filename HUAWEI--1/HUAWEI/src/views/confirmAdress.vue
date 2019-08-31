<template>
	<div>
		<confirm-adress-head></confirm-adress-head>
		<confirm-adress-msg></confirm-adress-msg>
		<confirm-adress-foot></confirm-adress-foot>
	</div>
</template>

<script>
	import confirmAdressHead from "../components/confirmAdress/confirmAdressHead";
	import confirmAdressMsg from "../components/confirmAdress/confirmAdressMsg";
	import confirmAdressFoot from "../components/confirmAdress/confirmAdressFoot";
	
	export default{
		components:{
			"confirm-adress-head":confirmAdressHead,
			"confirm-adress-msg":confirmAdressMsg,
			"confirm-adress-foot":confirmAdressFoot
		}
	}
</script>

<style>
</style>
