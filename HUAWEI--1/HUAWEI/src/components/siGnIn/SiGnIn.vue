<template>
	<div class="ttp">
		<mt-spinner type="snake" color="green" v-if="isT"></mt-spinner>
		<!-- top -->
		<img class="close" src="../../assets/images/icon02.png" @click="sso">
		<div class="top">
			<img src="../../assets/images/icon01.png">
			<p class="gninPone">华为账号</p>
		</div>
		
		<!-- txt -->
		<div class="txt">
			<p>华为账号是您用于访问所有华为服务的账号。使用华为账号登陆后，你将可以使用云服务、游戏中心、华为商城、会员服务、钱包，及<a href="">更多服务</a>。</p>
		</div>
		
		
		<div class="editText">
				<input class="num" type="text" placeholder="手机号/邮件地址" v-model="uphone">
				<input class="pwd" type="password" placeholder="请输入密码" v-model="upassword">
				<button @click="login" class="record">登录</button>
		</div>
		
		<!-- footer -->
		<footer>
				<router-link to="/numberOfacount"><a class="logon" >注册账号</a></router-link>
				<router-link to="/retPw"><a class="forgetPwd" href="">忘记密码？</a></router-link>
		</footer>
		</div>
</template>

<script>
	 export default {
	  name: "siGnIn",
	  data() {
	    return {
	      uphone: '',
	      upassword: '',
	      isT: false
	    }
	  },
	  methods: {
	    sso() {
	      this.$router.push({
	        name: "myPage"
	      })
	    },
	    login() {
	      this.$ajax({
	        method: 'post',
	        url: 'http://10.35.167.190:8000/api/user/auth/login/',
	        data: {
	          "uphone": this.uphone,
	          "upassword": this.upassword
	        }
	      }).then((res) => {
	        if (res.data.code == 200) {
	          this.isT = true
	          setTimeout(() => {
	            this.$router.push({
	              name: "myPage"
	            })
	          }, 2000)
	
	
	
	        }
	        console.log(res.data)
	        let a = window.sessionStorage
	
	        a.setItem('data', res.data.data.token)
	        a.setItem('uphone', this.uphone)
	
	        console.log(a)
	
	        console.log(1)
	      })
	    },
	  }
	}
</script>

<style scoped>
	
	/* 华为logo */
	.ttp {
	  background: white;
	  height: 7.36rem;
	
	}
	
	.top {
	  width: 4.13rem;
	  height: .73rem;
	}
	
	.close {
	  width: .2rem;
	  height: .2rem;
	  position: absolute;
	  left: .21rem;
	  top: .2rem;
	  z-index: 99;
	}
	
	.top img {
	  width: .83rem;
	  height: .83rem;
	  position: absolute;
	  margin: auto;
	  top: -.8rem;
	  right: 1.655rem;
	  margin-top: 1.2rem;
	}
	
	.gninPone {
	  font-size: .22rem;
	  text-align: center;
	  padding-top: 1.4rem;
	  background: white;
	}
	
	/* txt */
	.txt {
	  width: 100%;
	  height: .6rem;
	  position: absolute;
	  top: 1.8rem;
	  margin-bottom: .25rem;
	}
	
	.txt p {
	  font-size: .15rem;
	  color: #767676;
	  margin-left: .1rem;
	}
	
	.txt a {
	  color: #347cce;
	  text-decoration: underline;
	}
	
	/* editText */
	.editText {
	  width: 3.8rem;
	  height: .77rem;
	  position: relative;
	  margin: auto;
	  top: 2rem;
	}
	
	.editText input {
	  display: block;
	  width: 3.8rem;
	  height: .36rem;
	  border: 0px;
	  background: transparent;
	  outline: none;
	  border-bottom: 1px solid #cbcbcb;
	  text-indent: 0px;
	}
	
	.editText .num {
	  margin-bottom: .12rem;
	}
	
	.editText .pwd {
	  margin-bottom: .16rem;
	}
	
	.editText .record {
	  width: 3.8rem;
	  height: .37rem;
	  background: #b4d7ff;
	  border-radius: .12rem;
	  margin-bottom: .3rem;
	  color: white;
	  border: none;
	  outline: none;
	  position: absolute;
	}
	
	
	/* footer */
	footer {
	  width: 100%;
	  height: .15rem;
	  margin-top: 2.9rem;
	}
	
	footer a {
	  color: #347cce;
	  font-size: .17rem;
	}
	
	footer .logon {
	  float: left;
	  margin-left: .2rem;
	}
	
	footer .forgetPwd {
	  float: right;
	  margin-right: .1rem;
	}
</style>
