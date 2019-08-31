<template>
  <div>
<digital-header></digital-header>
<digital-content></digital-content>
  </div>
</template>

<script>
  import digitalHeader from "../components/DigitalBenefit/digitalHeader"
  import digitalContent from "../components/DigitalBenefit/digitalContent"

  export default{
    components:{
      "digital-header":digitalHeader,
      "digital-content":digitalContent
    }
  }
</script>

<style>
</style>
