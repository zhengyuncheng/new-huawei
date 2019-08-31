<template>
	<div>
		<header>
			<div class="left">
				<img src="../../assets/images/icon03.png" alt="">
				<input type="button" value="返回" @click="toback">
				<p class="findPwd">华为账号通知</p>
			</div>
			</header>
			
			<!-- area -->
			<div class="att">
			<div class="area">
				<span><p class="counArea">国家/地区</p>
				<p class="signUp">正在注册中国大陆华为账号</p>
				<input class="land" type="button" value="中国大陆">
				<img class="right" src="../../assets/images/icon04.png" >
				</span>
			</div>
			
			<!-- information -->
			<div class="information">
					<span class="authority"><p>华为账号是用于访问所有华为服务的账号，为实现上述功能，<b>本应</b></p>
					<p><b>用使用过程中需要连接网络，并调用以下手机权限：电话、短信；</b></p>
					<p>在特定场景下需要收集和使用您的信息：</p>
					</span>
					<span><p>.您注册华为账号时提供的信息：手机号或邮件地址、华为的账号密</p>
					<p>码；</p></span>
					<span><p>.设备信息：设备标识符、PLMN、国家/地区、语言、设备型号、设</p>
					<p>备名称和版本号；</p></span>
					
					<span><p>.IP地址</p></span>
					<span><p>华为收集、使用信息的详情请见<a href="">关于华为账号与隐私的声明。</a></p></span>
					<span><p>上述数据将会传输并保存至中华人民共和国境内的服务器。</p></span>
					<span><p>如果您不同意我们采集上述信息，或不同意调用相关手机权限，我</p>
					<p>们将无法为您提供相应的服务。</p></span>
					<span class="cagree"><p>点击“同意”，即表示您同意上述内容及<a href="">华为账号用户协议</a></p></span>
			</div>
			</div>
			<!-- footer -->
			<footer>
				<input class="cancel" type="button" value="取消" @click="toback">
				<mt-button @click.native="openConfirm"  size="large">
				   <input class="agree" type="button" value="同意" >
				</mt-button>
			</footer>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
		export default{
			name:"numberOfacount",
			data(){
				return {
	
				}
			},
			methods:{
				toregister(){
					this.$router.push({
						name:"regiSter"
					})
				},
				toback(){
					this.$router.push({
						name:"SiGnIn"
					})
				},
	    openConfirm() {
	        MessageBox.confirm('', {
	            message: '您正在注册中国大陆的华为账号',
	            confirmButtonText: '确定',
	            cancelButtonText: '取消',
	
	        }).then(action => {
	            if (action == 'confirm') {
	            }
	        }).catch(error => {
	            if (error == 'cancel') {
	            }
	        }),
	        setTimeout(()=>{
	          this.toregister()
	        },3000)
	    }
	
			}
		}
</script>

<style scoped>
	header{
			width:4.13rem;
			height:.52rem;
			border-bottom:1px solid #d5d5d5;
	/* 		margin-top: .2rem; */
			background: #fdfdfd;
		}
		header .findPwd{
			font-size:.17rem;
			margin-left:1.625rem;
			font-weight: 400;
		}
		header .left{
			width:100%;
			height:.18rem;
			padding-top: .15rem;
		}
		.left img{
			height:.18rem;
			float:left;
			margin-left: .2rem;
			margin-right: .1rem;
		}
		.left input{
			font-size:.18rem;
			color:#347cce;
			background: transparent;
			outline: none;
			border:0px;
			float:left;
			line-height: .21rem;
		}
		/* area */
		.att{
			background: white;
		}
		.area{
			width:100%;
			height:.4rem;
			padding-top: .1rem;
			padding-bottom: .1rem;
			border-bottom:1px solid #d5d5d5;
			background: white;
		}
		.area p{
			font-size:.12rem;
		}
		.area .signUp{
			float:left;
			color:#919191;
			padding-top:.1rem;
			margin-left:.1rem;
		}
		.area .counArea{
			margin-left:.1rem;
		}
		.area .land{
			float:right;
		    line-height:.2rem;
			margin-right: .4rem;
			background:transparent;
			outline:none;
			border:0rem;
		}
		.area .right{
			width:.07rem;
			height:.13rem;
			margin-left:3.83rem;
			margin-top:0.02rem;
		}
		/* information */
		.information{
			width:100%;
			height:.73rem;
			background: white;
		}
		.information span{
			font-size: .13rem;
			text-align:left;
			text-indent:.15rem;
			color:#7f7f7f;
			display:block;
			padding-top:.23rem;
			background: white;
		}
		.information a{
			color:#016df4;
		}
		.information p{
			color:black;
		}
		.information .cagree{
			border-bottom:1px solid #d5d5d5;
			padding-bottom:.1rem;
		}
	
		/* footer */
		footer{
			width:100%;
			height:.38rem;
			background: #fdfdfd;
			margin-top:5.07rem;
		}
		footer input{
			display:block;
			background:transparent;
			border:0rem;
			color: #3f80c4;
			font-size: .15rem;
		}
		footer .cancel{
			float:left;
			margin-left:.18rem;
	    position: absolute;
	    top: 7.03rem;
	    z-index: 9;
		}
		footer .agree{
			float:right;
			margin-right:.18rem;
		}
</style>
