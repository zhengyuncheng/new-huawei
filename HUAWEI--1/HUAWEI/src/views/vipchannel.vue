<template>
	<div>
		<!-- vip头部 -->
		<vip-header></vip-header>
		<!-- vip九宫格 -->
		<vip-nav></vip-nav>
		<!-- 信息头部 -->
		<vip-head></vip-head>
		<!-- 红色礼券 -->
		<vip-coupon-red></vip-coupon-red>
		<!-- 绿色礼券 -->
		<vip-coupon-green></vip-coupon-green>
		<vip-coupon-red></vip-coupon-red>
		<vip-coupon-green></vip-coupon-green>
		<vip-coupon-red></vip-coupon-red>
		<!-- 礼卡 -->
		<vip-card></vip-card>
		<vip-head></vip-head>
		<!-- 签到 -->
		<vip-check></vip-check>
		<vip-head></vip-head>
		<!-- 会员锚点 -->
		<vip-anchor></vip-anchor>
		<!-- 锚点详情头部 -->
		<vip-anchor-msg-head></vip-anchor-msg-head>
		<!-- 锚点详情 -->
		<vip-anchor-msg></vip-anchor-msg>
		<vip-anchor-msg></vip-anchor-msg>
		<vip-anchor-msg></vip-anchor-msg>
		<vip-anchor-msg-head></vip-anchor-msg-head>
		<vip-anchor-msg></vip-anchor-msg>
		<vip-anchor-msg></vip-anchor-msg>
		<vip-anchor-msg></vip-anchor-msg>
		<vip-anchor-msg></vip-anchor-msg>
		<vip-anchor-msg></vip-anchor-msg>
		<vip-anchor-msg-head></vip-anchor-msg-head>
		<vip-anchor-msg></vip-anchor-msg>
		<vip-anchor-msg></vip-anchor-msg>
		<vip-anchor-msg></vip-anchor-msg>
		<vip-anchor-msg></vip-anchor-msg>
		<vip-anchor-msg></vip-anchor-msg>
		<vip-anchor-msg></vip-anchor-msg>
		<vip-anchor-msg></vip-anchor-msg>
		<vip-anchor-msg></vip-anchor-msg>
		<vip-anchor-msg></vip-anchor-msg>
		<vip-rule></vip-rule>
		<vip-foot></vip-foot>
	</div>
</template>

<script>
	import vipHeader from "../components/vipchannel/vipHeader";
	import vipNav from "../components/vipchannel/vipNav";
	import vipHead from "../components/vipchannel/vipHead";
	import vipCouponRed from "../components/vipchannel/vipCouponRed";
	import vipCouponGreen from "../components/vipchannel/vipCouponGreen";
	import vipCard from "../components/vipchannel/vipCard";
	import vipCheck from "../components/vipchannel/vipCheck";
	import vipAnchor from "../components/vipchannel/vipAnchor";
	import vipAnchorMsgHead from "../components/vipchannel/vipAnchorMsgHead";
	import vipAnchorMsg from "../components/vipchannel/vipAnchorMsg";
	import vipRule from "../components/vipchannel/vipRule";
	import vipFoot from "../components/vipchannel/vipFoot";

	
	export default{
		name:"vipchannel",
		data(){
			return{
				
			}
		},
		components:{
			"vip-header":vipHeader,
			"vip-nav":vipNav,
			"vip-head":vipHead,
			"vip-coupon-red":vipCouponRed,
			"vip-coupon-green":vipCouponGreen,
			"vip-card":vipCard,
			"vip-check":vipCheck,
			"vip-anchor":vipAnchor,
			"vip-anchor-msg-head":vipAnchorMsgHead,
			"vip-anchor-msg":vipAnchorMsg,
			"vip-rule":vipRule,
			"vip-foot":vipFoot
		}
	}
</script>

<style>
</style>
