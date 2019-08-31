<template>
	<div>
	  <header>
	    <div class="left">
	      <img src="../../assets/images/icon03.png" alt="">
	      <input type="button" value="返回" @click="toReturn">
	    </div>
	
	    <div class="underSide">
	      <p>使用手机号注册</p>
	    </div>
	
	    <!-- information -->
	    <div class="information">
	      <p>国家/地区 中国大陆</p>
	      <div class="heek">
	        <input v-model="uphone" @blur="cheNum" @focus="cheNumFou" class="phoneNuum " type="text" placeholder="手机号"><span
	          v-if="isTrue" class="isTrue">请输入正确的电话号码</span>
	        <span class="areanum">+86</span>
	      </div>
	      <div class="heekTwo">
	        <input type="text" placeholder="请输入验证码" v-model="ucaptcha">
	        <button @click="getcode" class="but">点击获取验证码</button>
	      </div>
	    </div>
	    <div class="slideBut">
	      <input class="firPwd" v-model="upassword" type="password" placeholder="密码">
	      <input @blur="chePwd" @focus="chePwdFou" type="password" v-model="upassword2" placeholder="确认密码"><span v-if="isTrue2"
	        class="isTrue2">两次密码输入不一致</span>
	      <p class="Butout" @click="regiSter">注册</p>
	
	
	    </div>
	  </header>
	
	  <!-- foorter -->
	
	
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
	  name: "regiSter",
	  data() {
	    return {
	      uphone: '',
	      checkNum: '',
	      regNum: /^1[3-9]\d{9}$/,
	      isTrue: false,
	      isTrue2: false,
	      upassword: '',
	      upassword2: '',
	      ucaptch:''
	
	
	    }
	  },
	  methods: {
	    tomailBox() {
	      this.$router.push({
	        name: "mailBox"
	      })
	    },
	    tosetPw() {
	      this.$router.push({
	        name: "setPw"
	      })
	    },
	    toReturn() {
	      this.$router.push({
	        name: "numberOfacount"
	      })
	    },
	
	    //判断是否显示电话号码输入提示
	    cheNum() {
	      if (this.uphone == "" || !this.regNum.test(this.uphone)) {
	        this.isTrue = true
	      }
	    },
	    cheNumFou() {
	      this.isTrue = false
	    },
	    //判断密码是否输入一致
	    chePwd() {
	      if (this.upassword2 != this.upassword) {
	        this.isTrue2 = true
	      }
	
	    },
	    chePwdFou() {
	      this.isTrue2 = false
	    },
	    //发送获取验证码请求
	    getcode() {
	      this.$ajax({
	        method: 'post',
	        url: 'http://10.35.167.190:8000/api/user/auth/captcha/',
	        data: {
	          "uphone": this.uphone
	        }
	      }).then((res) => {
	        console.log(res.data)
	        console.log(1)
	      })
	    },
	    // 发送注册请求
	   regiSter(){
	     this.$ajax({
	       method: 'post',
	       url: 'http://10.35.167.190:8000/api/user/auth/register/',
	       data: {
	         "uphone": this.uphone,
	         "ucaptcha":this.ucaptcha,
	         "upassword":this.upassword,
	         "upassword2":this.upassword2
	       }
	     }).then((res) => {
	       console.log(res.data)
	       console.log(1)
	       if(res.data.code==200){
	          Toast({
	           message: '注册成功',
	           position: 'middle',
	           duration: 1500
	         }),
	         setTimeout(() => {
	            this.$router.push({
	              name:'SiGnIn'
	            })
	          }, 2000)
	
	       }
	
	     })
	   },
	
	  }
	}
</script>

<style scoped>
	header {
	  width: 100%;
	  height: .52rem;
	  margin-top: .1rem;
	}
	
	header .left {
	  height: .18rem;
	  margin-left: .2rem;
	  margin-top: .15rem;
	}
	
	.left img {
	  width: .11rem;
	  height: .18rem;
	  float: left;
	  margin-right: .1rem;
	}
	
	.left input {
	  font-size: .18rem;
	  color: #347cce;
	  background: transparent;
	  outline: none;
	  border: 0px;
	  float: left;
	  line-height: .22rem;
	}
	
	.underSide {
	  width: 100%;
	  height: .34rem;
	  margin-bottom: .41rem;
	}
	
	.underSide p {
	  font-size: .18rem;
	  font-weight: 400;
	  line-height: .34rem;
	  clear: both;
	  margin-left: 1.4rem;
	}
	
	/* information */
	.information {
	  width: 100%;
	  height: .73rem;
	  position: relative;
	}
	
	.heek {
	  width: 3.68rem;
	  height: .27rem;
	  margin: 0 auto;
	  border-bottom: 1px solid #cbcbcb;
	}
	
	.information p {
	  width: 3.68rem;
	  font-size: .16rem;
	  margin-left: .22rem;
	  margin-right: .3rem;
	  padding-bottom: .14rem;
	  border-bottom: 1px solid #cbcbcb;
	}
	
	.information input {
	  width: 3.3rem;
	  height: .27rem;
	  display: block;
	  border: 0rem;
	  background: transparent;
	  outline: none;
	}
	
	.information .phoneNuum {
	  margin-top: .1rem;
	  margin-left: .38rem;
	  font-size: .16rem;
	  line-height: .16rem;
	}
	
	.areanum {
	  font-size: .15rem;
	  font-weight: 550;
	  position: absolute;
	  top: .5rem;
	  left: .22rem;
	}
	
	.information .next {
	  width: 3.7rem;
	  height: .37rem;
	  background: #b4d7ff;
	  margin: .18rem auto;
	  border-radius: .12rem;
	  color: white;
	}
	
	.information .country {
	  margin-bottom: .12rem;
	}
	
	.information b {
	  font-size: 0.16rem;
	  float: left;
	  height: .27rem;
	  line-height: 0.27rem;
	  margin-top: 0.25rem;
	}
	
	.phoneNuum2 {
	  float: left;
	  width: 1.3rem;
	  margin-left: 0;
	  margin-top: 0.25rem;
	  border: 1px #000000 gainsboro;
	}
	
	.heekTwo {
	  width: 3.7rem;
	  height: .4rem;
	  display: flex;
	  justify-content: space-between;
	  margin: .2rem auto;
	  border-bottom: 1px solid #cbcbcb;
	}
	
	.heekTwo input {
	  font-size: .18rem;
	  height: .3rem;
	  padding-top: .1rem;
	}
	
	.but {
	  width: 2rem;
	}
	
	.btn {
	  float: right;
	  margin-top: 0.25rem;
	
	}
	
	.slideBut {
	  position: relative;
	  top: .6rem;
	}
	
	.slideBut input {
	  width: 3.7rem;
	  height: .3rem;
	  display: block;
	  margin: auto;
	  margin-top: .12rem;
	  border: 0rem;
	  background: transparent;
	  outline: none;
	  font-size: .16rem;
	  border-bottom: 1px solid #cbcbcb;
	}
	
	.Butout {
	  font-size: .2rem;
	  width: 3.7rem;
	  height: .37rem;
	  background: #b4d7ff;
	  border-radius: .12rem;
	  color: white;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  margin: .2rem auto 0;
	}
	
	.isTrue {
	  font-size: 0.16rem;
	  position: fixed;
	  right: 0.2rem;
	  top: 1.5rem;
	  color: #A1A0A5;
	}
	
	.isTrue2 {
	  font-size: 0.16rem;
	  position: fixed;
	  right: 0.2rem;
	  bottom: 4.2rem;
	  color: #A1A0A5;
	}
</style>
