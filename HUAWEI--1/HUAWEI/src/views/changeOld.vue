<template>
	<div class="changeOld">
		<changeTop></changeTop>
	    <changeBanner></changeBanner>
		<changeSell></changeSell>
	     <hotSellbanner></hotSellbanner>
		 <ourAdvantage></ourAdvantage>
		 <creditProcess></creditProcess>
		 <userJudge></userJudge>
		 <changeFooter></changeFooter>
		
	</div>
</template>

<script>
	import changeTop from '../components/changeOld/changeTop'
	import changeBanner from '../components/changeOld/changeBanner'
	import changeSell from '../components/changeOld/changeSell'
	import hotSellbanner from '../components/changeOld/hotSellbanner'
	import ourAdvantage from '../components/changeOld/ourAdvantage'
	import creditProcess from '../components/changeOld/creditProcess'
	import userJudge from '../components/changeOld/userJudge'
	import changeFooter from '../components/changeOld/changeFooter'
	// import changeApi from "../apis/changeApi"
	export default {
		name:'changeOld',
// 		data:function(){
// 			return{  
// 				 changeInfo:{}
// 			}
// 		},
		components:{
			changeTop,
			changeBanner,
			changeSell,
			hotSellbanner,
			ourAdvantage,
			creditProcess,
			userJudge,
			changeFooter
		}
		// ,
// 		 created(){
// 		   this._initPageData()
// 		},
// 		  methods:{
// 		
		  /**
		   * @private
		   */
// 		  _initPageData(){
// 		      changeApi.getchangeInfoByUserId(data=>{
// 		        console.log(data)
// 		        this.changeInfo= data;
// 		      })
// 		  }
// 		}
	}
</script>

<style>
	*{
		margin:0;
		padding:0;
	}
	a{
		text-decoration: none;
	}
	ul,ol{
		list-style: none;
	}
	html,body{
		width:100%;
	   
	}
	body{
		font-family: "微软雅黑";
		background: white;
		display: -webkit-flex;
		-webkit-flex-direction:column;
	}
	html{
	
		font-size: 24.15vw;
	}
	.changeOld img{
		border: none;
		display: block;
	}
	
</style>
