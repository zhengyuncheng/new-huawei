<template>
	<div id="app">
		<new-header></new-header>
		<new-content v-if="newGiftData" :data="newGiftData"></new-content>
		<new-footer></new-footer>
	</div>
</template>

<script>
	import newHeader from "../components/newGift/newHeader";
	import newContent from "../components/newGift/newContent";
	import newFooter from "../components/newGift/newFooter";
	import api from "../apis/api"
	export default{
		name:"newGift",
		components:{
			newHeader,newFooter,newContent
		},
		data(){
			return {
				newGiftData:{}
			}
		},
		methods:{
			_initnewGiftData(){
				api.getNewGiftUrl(data=>{
					this.newGiftData = data;
					console.log(this.newGiftData)
				})
			}
		},
		created(){
			this._initnewGiftData();
		}
	}
</script>

<style>
	@import "../assets/css/newGift.css";
	#app{
		height:100%;
		display: flex;
		flex-direction: column;
	}
</style>
