<template>
  <div class="sidebar-content">
    <div @click="closeNav" class="close-icon">
      <font-awesome-icon icon="fa-solid fa-xmark" />
    </div>
    <div class="user-infor" v-if="isLogin">
      <div id="avatar">
        <span>{{ userInfor.email.charAt(0).toUpperCase() }}</span>
      </div>
      <div id="username">
        <p>
          <a-tooltip>
            <template slot="title"> {{ userInfor.email }} </template>
            {{ userInfor.email }}
          </a-tooltip>
        </p>
      </div>
      <div id="icon" style="position: relative; top: 10px">
        <a-dropdown placement="bottomRight">
          <div>
            <font-awesome-icon
              icon="fa-regular fa-bell"
              style="font-size: 25px"
            />
            <div class="nofifycation-data">
              {{ notificationItems.length }}
            </div>
          </div>
          <template #overlay>
            <a-menu v-if="notificationItems.length > 0">
              <a-menu-item
                v-for="(item, index) in notificationShow"
                :key="index"
              >
                <div class="notify-menu">
                  <div
                    class="notify-icon"
                    v-if="
                      item.state == notificationState.refuse || item.state === 0
                    "
                    style="color: red"
                  >
                    <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
                  </div>
                  <div
                    class="notify-icon"
                    style="color: green"
                    v-if="
                      item.state == notificationState.agree || item.state === 2
                    "
                  >
                    <font-awesome-icon icon="fa-solid fa-circle-check" />
                  </div>

                  <div class="notify-content" @click="handleReadNoti(item.id)">
                    {{ item.detail }}
                  </div>
                  <div class="notify-date">{{ formatDate(item.date) }}</div>
                  <div class="notify-action" @click="handleDeleteNoti(item.id)">
                    <font-awesome-icon
                      style="color: red"
                      icon="fa-solid fa-delete-left"
                    />
                  </div>
                </div>
              </a-menu-item>
              <a-menu-item>
                <a class="router-link" href="/ho-so?type=notification">
                  <div
                    style="text-align: center; color: blue"
                    v-if="notificationItems.length > 3"
                  >
                    Xem tất cả
                  </div>
                </a>
              </a-menu-item>
            </a-menu>
            <a-menu v-else
              ><a-menu-item> Không có thông báo </a-menu-item></a-menu
            >
          </template>
        </a-dropdown>
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
    <div
      class="action"
      id="create-post"
      v-if="setCheckPermisson"
      @click="createPost()"
    >
      Đăng tin
    </div>
    <a-modal :footer="null">
      <Login />
    </a-modal>
    <div class="menu">
      <ul v-if="userInfor">
        <li class="menu-items" @click="redirectPage('/lien-he')">
          <font-awesome-icon class="icon" icon="fa-solid fa-phone" /><span
            >Liên hệ</span
          >
        </li>
        <li
          class="menu-items"
          v-if="setCheckPermisson"
          @click="redirectPage('/ho-so?type=manage-post')"
        >
          <font-awesome-icon class="icon" icon="fa-solid fa-list" /><span
            >Quản lí tin đăng</span
          >
        </li>

        <li
          class="menu-items"
          @click="redirectPage(`/bai-dang-yeu-thich/${userInfor.id}`)"
        >
          <font-awesome-icon class="icon" icon="fa-solid fa-heart" /><span
            >Bài đăng yêu thích</span
          >
        </li>
        <li class="menu-items" @click="visible = true">
          <font-awesome-icon class="icon" icon="fa-solid fa-lightbulb" /><span
            >Bài đăng đề xuất</span
          >
          <a-modal v-model="visible" :footer="null">
            <div style="margin-top: 20px">
              <div
                class="suggest-items"
                v-for="sugg in suggest"
                :key="sugg._id"
                @click="insertQuery(sugg.query)"
              >
                {{ sugg.name }}
              </div>
            </div>
          </a-modal>
        </li>
        <li
          class="menu-items"
          @click="redirectPage('/ho-so?type=change-password')"
        >
          <font-awesome-icon class="icon" icon="fa-solid fa-key" /><span
            >Đổi mật khẩu</span
          >
        </li>
        <li
          class="menu-items"
          @click="redirectPage('/ho-so?type=manage-profile')"
        >
          <font-awesome-icon class="icon" icon="fa-solid fa-user" /><span
            >Quản lí thông tin cá nhân</span
          >
        </li>
        <li
          v-if="isLogin"
          class="menu-items"
          @click="isLogout()"
          style="color: #da102f"
        >
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

import authenticationMixin from "../../mixins/authentication";

export default {
  props: ["closeNav"],
  mixins: [authenticationMixin],
  methods: {
    redirectPage(endpoint) {
      this.$router.push(endpoint);
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
  z-index: 3;
  top: 0;
  right: 0;
  background-color: #f5f5f5;
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
  top: -2px;
  left: 10px;
}
.notify-menu {
  display: flex;
  width: 600px;
  height: 70px;
  font-size: 14px;
  line-height: 70px;
  text-align: center;
  border-bottom: 1px solid #bfbfbf;
}
.notify-icon {
  width: 60px;
  font-size: 20px;
  padding: 0 10px;
}
.notify-content {
  width: 340px;
  font-weight: bold;
}
.notify-date {
  width: 120px;
}
.notify-action {
  width: 80px;
  font-size: 20px;
}
</style>
