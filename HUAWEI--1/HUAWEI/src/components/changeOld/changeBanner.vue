<template>
  <div class="changeBlock">
    
    <el-carousel height="1.5rem" arrow="never">
      <el-carousel-item v-for="item in item" :key="item.img">
        <router-link to="" >
        	<img :src="item.img" alt="">
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
 
</template>
<script>	

	export default{
		name:"changeBanner",
		data:function(){
			return {
				item:[
					{
						img:"https://sr.aihuishou.com/cms/image/637013346809119930903284138.jpg" 
					},
					{
						img:"https://sr.aihuishou.com/cms/image/6370020084478540001446705845.png"
					}
				]
			}
		}
	}	
</script>

<style scoped="scoped">
.changeBlock{
	width:3.8rem;
	margin: .05rem auto;
	border-radius:.1rem;

}
.changeBlock img{
	width:3.8rem;
	height:1.5rem;
	border-radius:.1rem;
}

 
</style>
