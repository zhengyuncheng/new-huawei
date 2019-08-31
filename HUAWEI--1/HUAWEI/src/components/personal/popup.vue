<template>
  <div class="page-msgbox">
    <div class="page-msgbox-wrapper">
      <mt-button @click.native="openConfirm" size="large">打开 confirm 提示框</mt-button>
    </div>
  </div>
</template>

<style>
  @component-namespace page {
    @component msgbox {
      @descendent wrapper {
        padding: 0 .2rem;
        position: absolute 50% * * *;
        width: 100%;
        transform: translateY(-50%);
        button:not(:last-child) {
          margin-bottom: .2rem;
        }
      }
    }
  }
</style>

<script type="text/babel">
    import { MessageBox } from 'mint-ui';
    export default {
        methods: {
            openConfirm() {
                MessageBox.confirm('确定执行此操作?', '提示');
            }
        }
    };
</script>
