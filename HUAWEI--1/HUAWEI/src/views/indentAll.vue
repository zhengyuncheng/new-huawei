<template>
	<div>
		<shop-indent v-if="indentAllData.shopIndents" v-for="(indent,id) in indentAllData.shopIndents" :data="indent" :key="id"></shop-indent>
	</div>
</template>

<script>
	import shopIndent from "../components/indentAll/shopIndent";
	import api from "../apis/api";
	export default{
		name:"indentAll",
		components:{
			shopIndent
		},
		data(){
			return {
				indentAllData:{}//组件数据
			}
		},
		created(){
			this._initData()
		},
		methods:{
			// 获取数据
			_initData(){
				api.getIndentAllUrl(data=>{
					this.indentAllData = data;
					console.log(this.indentAllData)
				})
			}
		}
	}
</script>

<style>
	@import "../assets/css/indentAll.css"
</style>
