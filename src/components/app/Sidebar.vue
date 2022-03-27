<template>
  <div class="sidebar-content">
    <div @click="closeNav" class="close-icon">
      <font-awesome-icon icon="fa-solid fa-xmark" />
    </div>
    <div class="user-infor" v-if="isLogin">
      <div id="avatar">H</div>
      <div id="username">
        <p>Truong Hoang Long dep trai</p>
      </div>
      <div id="icon" style="position: relative">
        <font-awesome-icon
          icon="fa-regular fa-bell"
          style="font-size: 25px; margin: 10px 30px"
        />
        <div class="nofifycation-data">1</div>
      </div>
    </div>
    <div class="action-items">
      <div
        v-if="!isLogin"
        class="action"
        id="login"
        @click="showModal('login')"
      >
        Đăng nhập
      </div>
      <a-modal :footer="null">
        <Login />
      </a-modal>
      <div
        v-if="!isLogin"
        class="action"
        id="register"
        @click="showModal('register')"
      >
        Đăng kí
      </div>
      <a-modal :footer="null">
        <Register />
      </a-modal>
    </div>
    <div class="action" id="create-post" @click="showModal('post')">
      Đăng tin
    </div>
    <a-modal :footer="null">
      <Login />
    </a-modal>
    <div class="menu">
      <ul>
        <li class="menu-items" @click="redirectPage('gioi-thieu')">
          <font-awesome-icon class="icon" icon="fa-solid fa-id-card" /><span
            >Giới thiệu</span
          >
        </li>
        <li class="menu-items" @click="redirectPage('chung-cu-mini')">
          <font-awesome-icon
            class="icon"
            icon="fa-solid fa-house-chimney"
          /><span>Chung cư mini</span>
        </li>
        <li class="menu-items" @click="redirectPage('phong-tro')">
          <font-awesome-icon
            class="icon"
            icon="fa-solid fa-house-chimney"
          /><span>Phòng trọ</span>
        </li>
        <li class="menu-items" @click="redirectPage('nha-nguyen-can')">
          <font-awesome-icon
            class="icon"
            icon="fa-solid fa-house-chimney"
          /><span>Nhà nguyên căn</span>
        </li>
        <li class="menu-items" @click="redirectPage('chung-cu-nguyen-can')">
          <font-awesome-icon
            class="icon"
            icon="fa-solid fa-house-chimney"
          /><span>Chung cư nguyên căn</span>
        </li>
        <li v-if="isLogin" class="menu-items" @click="isLogout()" style="color: #da102f">
          <font-awesome-icon
            class="icon"
            icon="fa-solid fa-arrow-right-from-bracket"
          /><span style="color: #da102f">Đăng xuất</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Login from "../Login.vue";
import Register from "../Register.vue";
import authenticationMixin from "../../mixins/authentication";

export default {
  props: ["closeNav"],
  mixins: [authenticationMixin],
  components: {
    Login,
    Register,
  },
  methods: {
    redirectPage(endpoint) {
      this.$router.push(`/bai-dang?type=${endpoint}`);
      this.closeNav();
    },
  },
};
</script>
<style scoped>
.sidebar-content {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}
.action-items {
  display: flex;
  justify-content: space-evenly;
}
.action {
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 120px;
  padding: 10px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 14px;
}
.action:hover {
  cursor: pointer;
}
.close-icon {
  position: absolute;
  right: 20px;
  top: 10px;
}
#register {
  background: red;
  color: white;
}

#create-post {
  width: 260px;
  margin: 20px;
}

.menu-items span {
  font-weight: bold;
  font-size: 14px;
  color: black;
}
.menu ul {
  list-style: none;
  color: black;
}
.menu ul li {
  margin-top: 20px;
  border-bottom: 1px solid gainsboro;
  padding-bottom: 10px;
}
.menu ul li span {
  padding: 40px;
}
.menu ul li .icon {
  font-size: 20px;
}

#login:hover,
#create-post:hover {
  background: #ced4da;
}
#register:hover {
  opacity: 0.5;
}
.menu-items:hover {
  cursor: pointer;
}
.user-infor {
  margin-left: 20px;
  display: flex;
}
.user-infor #username {
  height: 48px;
  font-weight: normal;
  line-height: 48px;
  padding-left: 10px;
  width: 160px;
}
.user-infor #avatar {
  height: 48px;
  width: 48px;
  background: #ffeceb;
  text-align: center;
  line-height: 48px;
  font-size: 20px;
  color: #961b12;
  border-radius: 48px;
}
.user-infor #username p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 140px;
  font-weight: bold;
}
.nofifycation-data {
  height: 18px;
  width: 17px;
  background: #da102f;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 12px;
  border-radius: 4px;
  position: absolute;
  top: 5px;
  left: 44px;
}
</style>
