<template>
	<div>
	<location-head></location-head>
	<location-msg></location-msg>
	<location-foot></location-foot>
	</div>
</template>

<script>
	import locationHead from "../components/location/locationHead";
	import locationMsg from "../components/location/locationMsg";
	import locationFoot from "../components/location/locationFoot";
	
	export default{
		components:{
			"location-head":locationHead,
			"location-msg":locationMsg,
			"location-foot":locationFoot
		}
	}
</script>

<style>
</style>
