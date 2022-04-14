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
          const { money } = JSON.parse(localStorage.getItem("purchase"));
          return actions.order.create({
            purchase_units: [
              { amount: { currency_code: "USD", value: money / 20000 } },
            ],
          });
        },
        onApprove: async function () {
          const { id, state, duration} = JSON.parse(
            localStorage.getItem("purchase")
          );
          const DATE = 60 * 60 * 1000 * 24;
          let durationTime =
            duration === 1 ? 7 * DATE : duration === 2 ? 30 * DATE : 60 * DATE;
          if (state === "create") {
            const { data } = await RepositoryFactory.get("article").payment(id);
            console.log(data);
          } else {
            let postExpired = new Date(
              Date.now() + durationTime
            );
            const { data } = await RepositoryFactory.get(
              "article"
            ).updateArticle({ postExpired: postExpired,update :"extended" }, id);
            console.log(data);
          }

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
