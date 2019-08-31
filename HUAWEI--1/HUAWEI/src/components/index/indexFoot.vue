<template>
	<div class="navThere">
		<router-link to="/findoutmore">
			<a href="" class="navMore">
				<span>发现更多手机</span>
			</a>
		</router-link>
	</div>
</template>

<script>
	export default{
		name:"indexFoot",
			data(){
				return {
					
				}
			}
		}
</script>

<style scoped>
	.navThere{
		padding-bottom: .1rem;
	}
	.navMore{
		padding: .15rem;
		display: table;
		margin: 0 auto .3rem;
		background: url(../../assets/img/arrow_right.png) no-repeat center right;
		background-size: .12rem .12rem;
	}
	.navMore span{
		font-size: .16rem;
		color: #4a4a4a;
		display: table-cell;
	}
</style>
