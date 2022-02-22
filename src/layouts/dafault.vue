<template>
  <div class="container">
    <div class="header">
        <Header></Header>
    </div>
    <div class="sidebar">
        <Sidebar></Sidebar>
    </div>
    <div class="main">
        <slot></slot>
    </div>
    <div class="footer">
        <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Header from "../components/app/Header.vue";
import Sidebar from "../components/app/Sidebar.vue";
import Footer from "../components/app/Footer.vue";
export default {
  components: {
    Header,
    Sidebar,
    Footer,
  },
};
</script>
