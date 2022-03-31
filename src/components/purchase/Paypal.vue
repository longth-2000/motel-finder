<template>
  <div id="paypal-container">
    <div id="paypal-button-container"></div>
  </div>
</template>

<script>
import { loadScript } from "@paypal/paypal-js";
export default {
  async mounted() {
    const paypalSdk = await loadScript({
      "client-id": "sb",
      currency: "USD",
    });
    paypalSdk.Buttons().render("#paypal-button-container");
  },
};
</script>
<style scoped>
#paypal-container {
   text-align: center;
   margin-top: 100px;

}
</style>
