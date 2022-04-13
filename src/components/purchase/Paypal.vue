<template>
  <div id="paypal-container">
    <div id="paypal-button-container"></div>
  </div>
</template>

<script>
import { loadScript } from "@paypal/paypal-js";
import { RepositoryFactory } from "../../repository/factory";

export default {
  async mounted() {
    const paypalSdk = await loadScript({
      "client-id": "sb",
      currency: "USD",
    });
    paypalSdk
      .Buttons({
        createOrder: function (data, actions) {
          const money = localStorage.getItem("money-payment");
          return actions.order.create({
            purchase_units: [
              { amount: { currency_code: "USD", value: money / 20000 } },
            ],
          });
        },
        onApprove: function () {
          const articleID = localStorage.getItem("article-id");
          const { data } = RepositoryFactory.get("article").payment(articleID);
          console.log(data);
          window.location.href = "/ho-so?type=manage-post";
        },
        onError: function (err) {
          console.log(err);
        },
      })
      .render("#paypal-button-container");
  },
};
</script>
<style scoped>
#paypal-container {
  text-align: center;
  margin-top: 100px;
}
</style>
