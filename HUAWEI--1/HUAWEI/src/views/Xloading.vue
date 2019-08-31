<template>
  <img src="../assets/img/Xloading.png" alt="loading">
</template>

<script>
    export default {
        name: "Xloading",
				created(){
					
					setTimeout(()=>{
						this.$router.push({
							name:'index'
						})
						},3000)
				}
    }
</script>

<style scoped>
img{
  display:block;
  border:none;
  width:100%;
  height:100%;
}
</style>
