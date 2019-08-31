<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    height:inherit;
    display:-webkit-flex;
    flex-direction: column;
		background: white;
  }
  body,h1,h2,h3,h4,h5,h6,p,ul,ol,dl,dd,input,textarea,select,td,th{
    margin:0;
    padding:0;
  }
  html{
    font-size: 24.15vw;
    /*background:#f1f1f1;*/
  }
  html,body{
    height:100%;
  }
  a{
    text-decoration: none;
  }
  ul,ol{
    list-style: none;
  }
  /*body{*/
  /*  font-family: "微软雅黑";*/
  /*  background: white;*/
  /*}*/

  /* 设置路由动画 */
  .fade-enter-active, .fade-leave-avtive {
    transition: all 0.5s
  }
	.mint-spinner-snake{
		position: absolute;
		left: 45.5%;
		top:51%;
		z-index: 99;
	}
  .fade-enter, .fade-leave-to {
    opacity: 0
  }

::-webkit-scrollbar {
    display: none;
}
b{
    font-weight: normal;
}
em{
	font-style: normal;
	font-weight: 400;
}
img{
	border: 0;
	max-width: 100%;
}
.swiper-pagination-bullet-active {
	opacity: 1!important;
    background-color: white!important;
}
</style>
