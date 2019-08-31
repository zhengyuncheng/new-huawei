<template>
	<div>
		<div class="headFrontBanner"> 
			<div class="headImageArea">
				<ul class="headImageUl">
					<!-- 循环每个图片 -->
					<li class="headImageLi">
						<a href=""></a>
						<img src="../../assets/img/bannerOne.jpg"></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"indexHeader",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
/* header */
.headFrontBanner{
    width: 100%;
    height: 1.53rem;
    background: #fff;
    overflow: visible;
    position: relative;
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
	padding-top: .06rem;
}
.headImageArea{
    border-radius: .09rem;
	width: 4.01rem;
	height: 1.53rem;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}
.headImageUl{
	position: relative;
	height: 100%;
	z-index: 1;
	display: flex;
	box-sizing: content-box;
}
.headImageLi{
	width: 100%;
	box-sizing: border-box;
	text-align: center;
	position: relative;
}
.headImageLi img{
	width: 100%;
	height: 100%;
	border-radius: .09rem;
	border: 0;
	max-width: 100%;
	vertical-align: top;
}

</style>
