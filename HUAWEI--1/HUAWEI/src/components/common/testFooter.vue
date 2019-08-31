<template>
    <div class="footer">
      <div class="singlePhone" v-for="(item, index) in footer" :key="index" @click="changeColor(index)" :style="{color:activeColor}">
        <img :src="'../../../static/'+item.pic" alt="singlePhone">
        <p>{{item.footTitle}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return {
            activeColor:'',
             footer:{}
        }
    },
    created(){
          fetch("http://localhost:3000/api/goodslist").then((res)=>{
              return res.json()
          }).then((obj)=>{
              this.footer= obj["footer"]
              // console.log(this.footer);
          })
    },
    methods:{
        changeColor(index){
                this.activeColor = 'red';
        }
    }
}
</script>

<style scoped>
.footer{
  display:flex;
  justify-content:space-around;
  width:100%;
  background:#f8f8f8;
  position:fixed;
  bottom:0;
}
.singlePhone{
  margin-top:.09rem;
  color:#aaaaaa;
}
.singlePhone img{
  width:.16rem;
  height:.16rem;
  text-align:center;
  margin:.01rem auto;
}
.singlePhone p{
  height:.18rem;
  font-size:.08rem;
  line-height:.18rem;
  text-align:center;
}
</style>
