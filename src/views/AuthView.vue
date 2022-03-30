<template>
  <div class="authentication-component">
    <Login :isAuthenticated="true" />
  </div>
</template>
<script>
import Login from "../components/Login.vue";
export default {
  components: {
    Login,
  },
};
</script>
<style scoped>
.authentication-component {
  width: 600px;
  margin: 0px auto;
  padding: 20px;
}
</style>
