<template>
  <div id="app">
    
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import DefaultLayout from "./layouts/default.vue";

import { mapActions } from "vuex";

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
  mounted() {
    this.notifications()
    this.chat()
  },
  methods: {
    ...mapActions("notifications", ["notifications"]),
    ...mapActions("chat", ["chat"]),
  }
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
.modal-title h3 {
  font-size:18px
}
.ant-tag-has-color {
  padding:5px 10px !important
}
.ant-upload-list-item-error {
  border-color:green !important;
  color:green !important
}
.ant-upload-list-item-error .anti-icon {
  color: green !important;
}
.ant-upload-list-picture .ant-upload-list-item-name {
  color: green;
}
.ant-upload-list-item-error .ant-upload-list-item-card-actions .anticon {
  color:green
}

.ant-pagination {
  margin-right: 2% !important;
}

</style>
