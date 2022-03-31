<template>
  <div >
    <div class="header">
      <Header :openNav="openNav"></Header>
    </div>
    <div class="sidebar">
      <Sidebar id="sidebar" :closeNav="closeNav"></Sidebar>
    </div>
    <div class="main" >
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
  mounted() {
    window.addEventListener("resize", this.onResponsive);
  },
  data() {
    const { offsetWidth, offsetHeight } = document.querySelector("#app");
    return {
      offsetWidth,
      offsetHeight,
      refreshScrollableArea: undefined,
    };
  },
  watch: {
    offsetWidth(newVal) {
      console.log(this.offsetWidth);
      if (newVal > 800) {
        this.closeNav();
      }
    },
  },
  methods: {
    openNav() {
      document.getElementById("sidebar").style.width = "300px";
      document.body.style.backgroundColor = "rgba(10,13,20,0.4)";
    },
    closeNav() {
      document.getElementById("sidebar").style.width = "0";
      document.body.style.backgroundColor = "white";
    },
    onResponsive() {
      if(window.innerWidth > 800) this.closeNav()
    }
  },
};
</script>
<style scoped></style>
