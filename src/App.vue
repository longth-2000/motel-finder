<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
    <router-view></router-view>
  </div>
</template>

<script>
import DefaultLayout from "../src/layouts/dafault.vue";
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
