<template>
<div class="empty-shopCart">
<p><img src="../../assets/images/img/3.png" alt=""><span>购物车中还没有商品，赶紧去选购吧！</span></p>
 <p><router-link to='/HwCategory'>去逛逛</router-link></p>
</div>
</template>

<script>
</script>

<style scoped="scoped">
.empty-shopCart{
width: 100%;
height: 1.38rem;
text-align: center;
padding: 0.4rem 0 0.4rem;
background-color: #FFFFFF;
margin-top: .46rem;
}
.empty-shopCart p:first-child{
  font-size: 0.14rem;
  color: #888888;
  text-align: center;
}
.empty-shopCart p:first-child img{
  vertical-align: middle;
  margin-right: 0.09rem;
	display: inline-block;
}
.empty-shopCart p:last-child{
  font-size: 0.16rem;
  color: #ce242c;
  border: 1px solid #ce242c;
  width: 0.9rem;
  border-radius: 0.2rem;
  text-align: center;
  margin: .15rem auto 0;
  height: 0.32rem;
  line-height: 0.32rem;

}
.empty-shopCart p:last-child a{
  text-decoration: none;
  color: #ce242c;
}
</style>
