<template>
	<div>
		<hw-findout-header></hw-findout-header>
		<hw-findout-head></hw-findout-head>
		<hw-findout-msg></hw-findout-msg>
	</div>
</template>

<script>
	import findOutHeader from "../components/findoutmore/findOutHeader";
	import findOutHead from "../components/findoutmore/findOutHead";
	import findOutMsg from "../components/findoutmore/findOutMsg";

	export default{
		name:"findoutmore",
		data(){
			return{
				
			}
		},
		components:{
			"hw-findout-header":findOutHeader,
			"hw-findout-head":findOutHead,
			"hw-findout-msg":findOutMsg
		}
	}
</script>
	
<style>
</style>
