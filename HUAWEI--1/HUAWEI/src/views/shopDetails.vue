<template>
<div class="shopdetails">
	<div class="shopDetails-con">
		<shop-intro v-if="initdata.data" :data="initdata.data" :add="add" :minus="minus"></shop-intro>
		<shop-argument v-if="initdata.data" :data="initdata.data"></shop-argument>
		<shop-pic v-if="initdata.data" :data="initdata.data"></shop-pic>
		<shop-evaluate v-if="initdata.data" :data="initdata.data"></shop-evaluate>
	</div>
	<footer>
		
		<div>
			<router-link to="/index">
			<div class="left" >
				<img src="../assets/img/index.png" alt="">
				首页
			</div>
			</router-link>
			<div class="btn" @click="toIndent">立即购买</div>
		</div>
	</footer>
</div>
</template>

<script>
  import shopIntro from "../components/shopDetails/shopIntro"
  import shopArgument from "../components/shopDetails/shopArgument"
  import shopPic from "../components/shopDetails/shopPic"
  import shopEvaluate from "../components/shopDetails/shopEvaluate"
   import api from "../apis/api"
  export default{
    components:{ 
     shopIntro,shopArgument,shopPic,shopEvaluate
    },
    data(){
      return {
        initdata:{},
		goods_id:{}
      }
    },
	created(){
	  this._initdata();
	},
    methods:{
      _initdata(){
				this.goods_id = this.$route.params.goods_id;
				
				fetch("http://10.35.167.190:8000/api/goods/xq/?goods_id="+this.goods_id)
			 // fetch("http://localhost:3000/api/shopDetails")
			.then(res=>{
				return res.json()
			})
			.then(cb=>{
				 this.initdata = cb;
			 })
		},
		add(){
			this.initdata.data[0].goods_num++
		},
		minus(){
			if(this.initdata.data[0].goods_num<=1){
				this.initdata.data[0].goods_num<=1;
			}else{
				this.initdata.data[0].goods_num--
			}
		},
		toIndent(){
			this.$router.push({
				name:"indent",
				params:{
					// goods_id:this.goods_id
				}
			})
		}
    }
  }
</script>

<style>
@import "../assets/css/shopDetails";
.shopdetails{
	height:100%;
	display:flex;
	flex-direction: column;
	
}
.shopDetails-con{
	flex: 1;
	overflow-y: auto;
}
</style>
