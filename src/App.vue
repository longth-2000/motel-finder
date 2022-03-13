<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import DefaultLayout from "./layouts/default.vue";
export default {
  name: "App",
  components: {
    DefaultLayout,
  },
  data() {
    return {};
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "default") + "-layout";
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.router-link {
  text-decoration: none;
  color:black
}
img{
  object-fit: cover;
}
ul {
  list-style: none;
}

</style>
