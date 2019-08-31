<template>
  <div>
    <div class="bigbox">
      <div class="category">
          <hw-category-classification></hw-category-classification>
        <div class="recommend">
           <router-view></router-view>
        </div>
      </div>
    </div>
    <hw-footer></hw-footer>
  </div>

</template>

<script>
    import CategoryClassification from '../components/category/CategoryClassification'
    import Footer from '../components/common/Footer'
    import api from "../apis/api"
    export default {
        name: "HwCategory",
        data(){
            return{
              category:{}
            }
        },
        components:{
            'hwCategoryClassification':CategoryClassification,
            "hwFooter":Footer
        },
        created(){
          api.getCategoryUrl((data)=>{
            this.category= data;
          }),
          api.getCategoryUrl1((data)=>{
              console.log(data);
          })
        }
    }
</script>

<style>
  .bigbox{
    width:100%;
    overflow-y:auto;
  }
  .category{
    width:100%;
    display:flex;
  }
  .classification{
    padding: .11rem .07rem 0 .13rem;
    font-size:.11rem;
    width:30%;
  }

  /* 左边结束 */
  .recommend{
    width:70%;
    padding:.08rem .07rem;
    margin-left:30%;
  }
/*  .fade-enter-active, .fade-leave-active {
    transition: all 1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  } */
</style>
