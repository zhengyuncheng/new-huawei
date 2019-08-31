<template>
	<div id="app">
		<div class="indent-con">
			<indent-header></indent-header>
			<indent-content v-if="indentData.data" :data="indentData.data"></indent-content>
		</div>
		
		<indent-footer v-if="indentData.data" :data="indentData.data" :sendData="sendData"></indent-footer>
	</div>
</template>

<script>
	import indentHeader from "../components/indent/indentHeader";
	import indentContent from "../components/indent/indentContent";
	import indentFooter from "../components/indent/indentFooter";
	import api from "../apis/api";
	export default{
		name:"newGift",
		components:{
			indentHeader,indentFooter,indentContent
		},
		data(){
			return {
				indentData:{},
				goods_id:{}
			}
		},
		methods:{
			_initIndentData(){
				this.goods_id = this.$route.params.goods_id;
				fetch("http://10.35.167.190:8000/api/goods/xq/?goods_id="+this.goods_id)
				// fetch("http://localhost:3000/api/shopDetails")
				.then(res=>{
				  return res.json()
				})
				.then(cb=>{
					this.indentData = cb;
				})
			},
			sendData(){
				console.log("send...")

				this.$ajax({
				  method: 'post',
				  url: 'http://10.35.167.190:8000/api/carts/cart/addcart/',
				  data: {
				    "token":sessionStorage.getItem("data"),
					"goodsid":this.goods_id,
					"goodsnum":1
				  }
				}).then((res) => {
					console.log(res)
					if(res.status==200){
					this.$router.push({
						name:"addShopCar"
					})
					}
				})
			}
		},
		created(){
			this._initIndentData();
			
		}
	}
</script>

<style>
	@import "../assets/css/indent.css";
	#app{
		height:100%;
		display: flex;
		flex-direction: column;
	}
	.indent-con{
		overflow-y: auto;
		flex:1;
	}
	
</style>

