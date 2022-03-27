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
  width: 100%;
  height: 100%;
  object-fit: cover;
}
ul {
  list-style: none;
}
.require-sign {
  color:red
}
.condition {
  font-family: Roboto;
  font-size: 12px;
  margin-top: 10px;
  color: red;
}
.is-invalid-form .ant-select-selection--single {
  border-color:red
}
.is-invalid-form .ant-calendar-picker-input  {
  border-color:red
}


</style>
