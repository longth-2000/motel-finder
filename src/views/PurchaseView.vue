<template>
  <div id="purchase-container">
    <div id="title-component-profile">
      <span>THANH TOÁN</span>
    </div>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="Paypal"> <Paypal /> </a-tab-pane>
      
    </a-tabs>
  </div>
</template>
<script>
import Paypal from "../components/purchase/Paypal.vue";

export default {
  components: {
    Paypal,
  },
};
</script>
<style scoped>
#purchase-container {
  width: 100%;
  margin: 0 auto;
  height: 100%;
}
</style>
