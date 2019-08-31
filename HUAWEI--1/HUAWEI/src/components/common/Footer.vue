<template>
	<div class="footer">
		<router-link to="/index">
			<div class="singlePhone">
				<span class="iconfont iconshouye"></span>
				<p>首页</p>
			</div>
		</router-link>
		<router-link to="/HwCategory">
			<div class="singlePhone">
				<span class="iconfont iconleimupinleifenleileibie"></span>
				<p>分类</p>
			</div>
		</router-link>

		<div class="singlePhone" @click="goShopcart">
			<span class="iconfont icongouwuche"></span>
			<p>购物车</p>
		</div>
	
		
		<router-link to='/myPage'>
			<div class="singlePhone">
				<span class="iconfont iconwode"></span>
				<p>我的</p>
			</div>
		</router-link>

	</div>
</template>

<script>
	export default {
		name: 'Footer',
		data() {
			return {

			}
		},
		//打开页面的时候就去先获取看看有没有token，点击购物车的时候绑定一个事件，如果有token就显示add 没有就显示空的shopcart
		created() {
			this.getToken()
		},
		methods: {
			//获取token
			getToken() {
				let a = sessionStorage;
				let b = a.getItem("data")
				console.log(b)
			},
			goShopcart() {
				let tok = sessionStorage.getItem("data");
				console.log(tok);
				if (tok == null) {
					this.$router.push({
						name: "Shopcart"
					})
				} else {
					this.$router.push({
						name: "addShopCar"
					})
				}
			}
		}
	}
</script>

<style scoped>
	@import "../../assets/css/iconfont.css";

	.footer {
		display: flex;
		justify-content: space-around;
		width: 100%;
		background: #f8f8f8;
		position: fixed;
		bottom: 0;
	}

	.singlePhone {
		margin-top: .09rem;
		color: #aaaaaa;
	}

.iconfont{
	display: block;
	font-size:.21rem;
	text-align: center;
	margin: .01rem auto;
}
	.singlePhone p {
		height: .18rem;
		font-size: .08rem;
		line-height: .18rem;
		text-align: center;
	}

	.router-link-active .singlePhone {
		color: red;
	}
</style>
