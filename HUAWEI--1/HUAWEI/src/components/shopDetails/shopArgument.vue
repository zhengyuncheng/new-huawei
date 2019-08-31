<template>
	<div class="argument">
		<!-- <div class="pick intro">
			<h2>包装清单</h2>
			<p>
				<ul>
					<li>手机（含内置电池）X 1</li>
					<li>Type-C 数据线 X 1</li>
					<li>TPU保护壳 X 1</li>
					<li>三包凭证 X 1</li>
				</ul>
				<ul>
					<li>华为SuperCharge充电器 X 1</li>
					<li>Type-C 耳机 X 1</li>
					<li>快速指南 X 1</li>
					<li>取卡针 X 1</li>
				</ul>
				<h5>（备注：最终以实物为准）</h5>
			</p>
		</div> -->
		<div class="intro shopside">
			<h2>主要参数</h2>
			<div v-for="(item,id) in main_paramKey" :key="id">
				<h3>{{main_paramKey[id]}}</h3>
				<p>{{main_paramValue[id]}}</p>
			</div>
			<div class="shopbtnbox">
				<button class="shopbtn" @click="shopbtn">
					查看全部参数
				</button>
			</div>
			
		</div>
		<div class="shopbig" v-show="isshop">
			<div class="intro">
				<h2>主要参数</h2>
				<div v-for="(item,id) in main_paramKey" :key="id">
					<h3>{{main_paramKey[id]}}</h3>
					<p>{{main_paramValue[id]}}</p>
				</div>
				
			</div>
			<div class="intro">
				<h2>规格参数</h2>
				<h4>主体</h4>
				<div v-for="(item,id) in param_infoKey" :key="id">
					<h3>{{param_infoKey[id]}}</h3>
					<p>{{param_infoValue[id]}}</p>
				</div>
			
			</div>
			<button class="shoubtn" @click="shoubtn">收起参数</button>
		</div>
		
		  
	
	</div>
</template>

<script>
	export default{
		props:["data"],
		data(){
			return {
				main_paramKey:{},
				main_paramValue:{},
				param_infoKey:{},
				param_infoValue:{},
				isshop:false
			}
		},
		created(){
			this.initdata();
		},
		methods:{
			shoubtn(){
				this.isshop = false;
			},
			shopbtn(){
				this.isshop = true;
			},
			partition(str){
				return str.split("#");
			},
			initdata(){
				let arrAll = this.data[0].main_param.split("#");
				let key = [];
				let value = [];
				for(let i=0; i<arrAll.length; i++){
					let arr = arrAll[i].split("!");
						key.push(arr[0]);
						value.push(arr[1]);
				}
				this.main_paramKey = key;
				this.main_paramValue = value;
				
				
				
				
				
				let arrAll2 = this.data[0].param_info.split("#");
				let key2 = [];
				let value2 = [];
				for(let i=0; i<arrAll2.length; i++){
					let arr = arrAll2[i].split("!");
						key2.push(arr[0]);
						value2.push(arr[1]);
				}
				this.param_infoKey = key2;
				this.param_infoValue = value2;
			}
		}
	}
</script>

<style>
	.shopside{
		height:2rem;
		overflow: hidden;
		position: relative;
	}
	.shopbtn{
		width:1.2rem;
		height:.4rem;
		border-radius: .4rem;
		border:1px solid #ccc;
		position: absolute;
		top:0;
		bottom:-.1rem;
		left:0;
		right:0;
		margin:auto;
		background:#fff;
		outline: none;
	}
	.shopbtnbox{
		width:100%;
		height:.8rem;
		position:absolute;
		bottom:-.1rem;
		left:0;
		z-index: 1;
		/* background: linear-gradient(to top,white 70%); */
		background: #fff;
	}
	.shopbig{
		position: fixed;
		top:0;
		left:0;
		height:100%;
		z-index: 11;
		overflow-y: auto;
		background: #fff;
	}
	.shoubtn{
		width:1.2rem;
		height:.4rem;
		border-radius: .4rem;
		border:1px solid #ccc;
		position: fixed;
		bottom:.4rem;
		left:40%;
		margin:auto;
		background:#555;
		outline: none;
		color:#fff;
		z-index: 111;
	}
</style>
