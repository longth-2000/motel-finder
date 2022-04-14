<template>
  <div id="default-layout">
    <div class="header">
      <Header :openNav="openNav" :user="user" :isLogged="isLogged"></Header>
    </div>
    <div class="sidebar">
      <Sidebar id="sidebar" :closeNav="closeNav"></Sidebar>
    </div>
    <div id="main">
      <div class="icon-chat" @click="handleChat()" v-if="isDisplayChat">
        <div>
          <font-awesome-icon id="icon" icon="fa-solid fa-comment-dots" />
        </div>
        <div>Chat</div>
      </div>
      <slot></slot>
      <div class="content-chat" v-if="displayChat === true">
        <Chat @change-display="changeDisplay" />
      </div>
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
import Chat from "../components/chat/VueChat.vue";
import { subject } from "@casl/ability";

import { mapActions } from "vuex";
export default {
  components: {
    Header,
    Sidebar,
    Footer,
    Chat,
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
      displayChat: false,
      user: {},
      isLogged: false,
      isDisplayChat:false
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
  created() {
    this.getUser()
  },
  methods: {
    ...mapActions("user", ["getUserInfor"]),
    async getUser() {
      try {
        const user = await this.getUserInfor();
        this.user = user;
        this.isLogged = true;
        let checkPermission = this.$can("chat", subject("User", this.user));
        this.isDisplayChat = (this.isLogged && checkPermission) ? true :false
      } catch (error) {
        console.log(error.response);
      }
    },
    openNav() {
      document.getElementById("sidebar").style.width = "300px";
      document.getElementById("default-layout").style.marginRight = "250px";
    },
    closeNav() {
      document.getElementById("sidebar").style.width = "0";
      document.getElementById("default-layout").style.marginRight = "0";
    },
    onResponsive() {
      if (window.innerWidth > 800) this.closeNav();
    },
    changeDisplay(mess) {
      this.displayChat = mess;
    },
    handleChat() {
      this.displayChat = true;
    },
  },
};
</script>
<style scoped>
#default-layout {
  transition: margin-left 0.5s;
}
.icon-chat {
  width: 50px;
  height: 50px;
  background: #096dd9;
  position: fixed;
  z-index: 2;
  right: 30px;
  top: 700px;
  color: white;
  font-weight: bold;
  padding: 5px;
  font-size: 15px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}
#icon {
  font-size: 20px;
}
.content-chat {
  width: 400px;
  position: fixed;
  top: 200px;
  z-index: 2;
  right: 20px;
}
</style>
