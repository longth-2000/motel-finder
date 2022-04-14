<template>
  <div class="auth-component">
    <Login class="auth-frame"  :isAuthenticated="true" />
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
.auth-component {
  padding: 20px;
  background: #f2f2f280;
}
.auth-frame {
  width:550px;
  margin:0 auto; 
  padding:40px
}
</style>
