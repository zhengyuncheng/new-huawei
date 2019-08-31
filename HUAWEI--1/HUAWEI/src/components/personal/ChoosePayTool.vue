<template>
  <div class="page-msgbox">
    <div class="page-msgbox-wrapper">
      <mt-button @click.native="openConfirm" size="large">
        <div class="hwPopSettings" >
          <p>支付宝</p>
          <img src="../../assets/img/jt.png" class="pic2">
        </div>
      </mt-button>
    </div>
  </div>
</template>

<script>
    import { MessageBox } from 'mint-ui';
    export default {
        name: "ChoosePayTool",
        methods: {
						openConfirm() {
                MessageBox.confirm('', {
                    message: '“华为商城”想要打开“支付宝”',
                    confirmButtonText: '打开',
                    cancelButtonText: '取消'
                }).then(action => {
                    if (action == 'confirm') {
                    }
                }).catch(error => {
                    if (error == 'cancel') {
                    }
                });
            }
            
        }

    }
</script>

<style >
  /*@component-namespace page {*/
  /*  @component msgbox {*/
  /*    @descendent wrapper {*/
  /*      padding: 0 .2rem;*/
  /*      position: absolute 50% * * *;*/
  /*      width: 100%;*/
  /*      transform: translateY(-50%);*/
  /*      button:not(:last-child) {*/
  /*        margin-bottom: .2rem;*/
  /*      }*/
  /*    }*/
  /*  }*/
  /*}*/
  .hwPopSettings{
    font-size:.13rem;
    display:flex;
    justify-content:space-between;
    padding:.31rem .15rem .31rem .55rem;
    background:white url(../../assets/img/zfb.png) no-repeat .15rem center;
    background-size:.34rem .34rem;
    border-bottom:2px solid #f3f3f3;
  }
  .pic2{
    width: .1rem;
    height:.15rem;
  }
  .hwPopSettings span{
    color:#d3345a;
  }
  .mint-button--large{
    height: 100%;
  }
  .mint-msgbox {
    background:white !important;
    border-radius:.14rem !important;
  }
  .mint-msgbox-message{
    font-size:.14rem !important;
    line-height:.52rem !important;
    color:black !important;
  }
  .mint-msgbox-cancel{
    color: #26a2ff !important;
  }

</style>
