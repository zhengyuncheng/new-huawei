<template>
<div class="myTop">
	
	<router-link to="/Setting">
		<span class="iconfont iconsetting"></span>
	</router-link>
	<div class="myPic">
		<router-link to="">
			<img src="https://res.vmallres.com/nwap/20190615/staticm/img/personal/defaultface_user_after.png" alt="">
		</router-link>
		<div class="oRegister">
		<router-link to="/SiGnIn" v-if="login"><h3>注册/登录</h3></router-link>
		 <router-link to="/SiGnIn" v-if="uphone"><h3>{{uptt}}</h3></router-link>
		
		<div class="oSign">
		<router-link to="">
			<span class="iconfont iconcustom-sign-in"></span>
			<span>签到领积分</span>
		</router-link>
		  </div>
		</div>
		<div class="myVip">
			<router-link to="/vipchannel">
				<span class="iconfont iconhuiyuan"></span>
				<span>会员频道</span>
			</router-link>
		</div>
	</div>
		
	
</div>
</template>

<script>
	export default{
		name:'myHeader',
		data:function(){
				return{
					uphone:false,
					login:true,
				}
			},
		created(){
		    this._check()
		    console.log(7)
		},
		methods:{
		  _check(){
		    let a=window.sessionStorage
		    let b = a.getItem("data")
		    let c = a.getItem("uphone")
		   console.log(b)
		   console.log(c)
		   if(b==null||c==null){
					this.login=true
					this.uphone=false
				}else{
					this.login=false
					this.uphone=true
					this.uptt=c
				}
			}
		}
	}
</script>

<style scoped>
@import "../assets/css/iconfont.css";
.iconsetting{
	display: block;
	font-size:.27rem;
	padding-left:3.87rem;
	padding-top:0.2rem;
	position: relative;
	right:.2rem;
}
.myTop{
    width:100%;
	height:2rem;
	background:#e74339;
	border-radius:0 0 .5rem .5rem;
}

.myPic{
	width:2.3rem;
	height:.72rem;
	/* background: blueviolet; */
	margin-left:.36rem;
	 display: -webkit-flex;
}
.myPic img{
	width:.69rem;
	height:.69rem;

}
.myPic h3{
	font-size:.2rem;
	color:white;
	margin-left:.1rem;
}
.oRegister{
	width:1rem;
	height: .72rem;

}
.oSign{
	width:1.2rem;
	height:.25rem;
	border-radius: 0.5rem;
	background-color: rgba(0, 0, 0, 0.1);
	position: relative;
	top:.15rem;
	left:.1rem;
}

 .oSign .iconcustom-sign-in{
	font-size:.16rem;
	position: absolute;
	top:.05rem;
	left:.1rem;

}
.oSign span{
	position: absolute;
	font-size:.15rem;
	color:white;
	top:.02rem;
	left:.3rem;

}
.myVip{
	width:.83rem;
	height:.27rem;
	background: #d23733;
	border-radius:.1rem 0 0 .1rem ;
	position: absolute;
	left:3.3rem;
	top:.86rem;
}
.myVip .iconhuiyuan{
	font-size:.15rem;
	position: absolute;
	top:.05rem;
	left:.06rem;
}
.myVip span{
	font-size:10px;
	color:#fcc3a5;
	position: absolute;
	top:.05rem;
	left:.25rem;
}
</style>
