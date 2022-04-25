<template>
  <div class="header">
    <div class="header-left">
      
      <div class="header-logo">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <div class="header-menu">
        <div class="menu">
          <ul class="menu-list">
            <li class="menu-items">
              <router-link to="/"> <span>Trang chủ</span></router-link>
            </li>
            <li class="menu-items">
              <router-link to="/lien-he"> <span>Giới thiệu</span></router-link>
            </li>
            <li class="menu-items">
              <a-dropdown>
                <a class="ant-dropdown-link"> Dự án </a>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <router-link
                      to="/bai-dang?type=phong-tro"
                      class="router-link"
                      >Phòng trọ</router-link
                    >
                  </a-menu-item>
                  <a-menu-item>
                    <router-link
                      to="/bai-dang?type=chung-cu-mini"
                      class="router-link"
                      >Chung cư mini</router-link
                    >
                  </a-menu-item>
                  <a-menu-item>
                    <router-link
                      to="/bai-dang?type=nha-nguyen-can"
                      class="router-link"
                      >Nhà nguyên căn</router-link
                    >
                  </a-menu-item>
                  <a-menu-item>
                    <router-link
                      to="/bai-dang?type=chung-cu-nguyen-can"
                      class="router-link"
                      >Chung cư nguyên căn</router-link
                    >
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header-right">
      <div class="menu" style="margin-top: -10px">
        <ul class="menu-list">
          <li
            class="menu-items menu-action"
            @click="showModal('login')"
            id="login"
            v-if="!isLogin"
          >
            Đăng nhập
            <a-modal v-model="isVisible.login" :footer="null">
              <Login />
            </a-modal>
          </li>

          <li
            class="menu-items menu-action"
            @click="showModal('register')"
            id="register"
            v-if="!isLogin"
          >
            Đăng kí
            <a-modal v-model="isVisible.register" :footer="null">
              <Register />
            </a-modal>
          </li>

          <li
            class="menu-items"
            style="position: relative; margin-top: 10px"
            v-if="isLogin"
          >
            <a-dropdown placement="bottomRight">
              <div>
                <font-awesome-icon
                  icon="fa-regular fa-bell"
                  style="font-size: 25px"
                />
                <div class="nofifycation-data">{{notificationItems.length}}</div>
              </div>
              <template #overlay>
                <a-menu>
                  <a-menu-item v-for="(item, index) in notificationShow" :key="index"> 
                    <div class="notify-menu">
                      <div class="notify-icon" v-if="item.state == notificationState.refuse" 
                        style="color:red"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-circle-exclamation"
                        />
                      </div>
                      <div class="notify-icon" style="color: green" v-if="item.state == notificationState.agree">
                        <font-awesome-icon icon="fa-solid fa-circle-check" />
                      </div>

                      <div class="notify-content" @click="handleReadNoti(item.id)">
                        {{item.detail}}
                      </div>
                      <div class="notify-date">{{formatDate(item.date)}}</div>
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
                      <div style="text-align: center; color: blue" v-if="notificationItems.length > 3">
                        Xem tất cả
                      </div>
                    </a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </li>
          <li class="menu-items" style="display: flex" v-if="isLogin">
            <div class="abbreviation-username">
              <span v-if="user.hasOwnProperty('email')">{{
                user.email.charAt(0).toUpperCase()
              }}</span>
            </div>
            <div class="fullwrite-username">
              <p>
                <a-tooltip>
                  <template slot="title"> {{ user.email }}</template>
                  <span class="email-title-tooltip">{{ user.email }}</span>
                </a-tooltip>
              </p>
              <a-dropdown>
                <a class="ant-dropdown-link">
                  <font-awesome-icon
                    style="margin-left: 10px"
                    icon="fa-solid fa-chevron-down"
                  />
                </a>
                <a-menu slot="overlay">
                  <a-menu-item
                    style="padding-left: 10px"
                    v-if="setCheckPermisson"
                    ><a href="/ho-so?type=manage-post" class="router-link"
                      ><font-awesome-icon
                        icon="fa-solid fa-list"
                        class="icon-user"
                      />Quản lí tin đăng</a
                    ></a-menu-item
                  >
                  <a-menu-item style="padding-left: 10px" v-else
                    ><a href="/ho-so?type=manage-post" class="router-link"
                      ><font-awesome-icon
                        icon="fa-solid fa-list"
                        class="icon-user"
                      />Tin đăng yêu thích</a
                    ></a-menu-item
                  >

                  <a-menu-item
                    ><a href="/ho-so?type=manage-profile" class="router-link"
                      ><font-awesome-icon
                        class="icon-user"
                        icon="fa-solid fa-user"
                      />Quản lí thông tin cá nhân</a
                    ></a-menu-item
                  >
                  <a-menu-item
                    ><a href="/ho-so?type=change-password" class="router-link"
                      ><font-awesome-icon
                        icon="fa-solid fa-key"
                        class="icon-user"
                      />Đổi mật khẩu</a
                    ></a-menu-item
                  >
                  <a-menu-item
                    style="
                      font-weight: bold;
                      color: #da102f;
                      border-top: 1px solid #f2f2f2;
                    "
                    @click="isLogout()"
                    ><font-awesome-icon
                      class="icon-user"
                      icon="fa-solid fa-arrow-right-from-bracket"
                    />Đăng xuất
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </div>
          </li>
          <li
            class="menu-items menu-action"
            id="create-post"
            v-if="setCheckPermisson"
            @click="createPost()"
          >
            <div
              style="
                width: 90px;
                border: 1px solid #ccc;
                border-radius: 8px;
                text-align: center;
                padding: 15px 0;
              "
            >
              Đăng tin
            </div>
          </li>
        </ul>
      </div>
      <div class="icon" style="cursor: pointer" @click="openNav">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </div>
    </div>
  </div>
</template>
<script>
import Login from "../Login.vue";
import Register from "../Register.vue";
import { mapGetters } from "vuex";
import authenticationMixin from "../../mixins/authentication";
import { notificationState } from './../../constants/notificationState'
import { notificationTypes } from './../../constants/notificationTypes'
import { formatDate } from './../..//helper/utils'
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore"
import {db} from './../../fire'
export default {
  props: ["openNav", "user"],
  mixins: [authenticationMixin],

  data() {
    const regexEmail = /(\w)+(?=@gmail.com)/;
    return {
      regexEmail: regexEmail,
      checkPermission: false,
      notificationItems: [],
      isCreatePost:false,
      notificationShow: [],
      notificationState: notificationState,
      notificationTypes: notificationTypes,
      formatDate: formatDate
    };
  },

  components: {
    Login,
    Register,
  },
  computed: {
    ...mapGetters("modal", ["isVisible"]),
    ...mapGetters("notifications", ['notifications']),
  },
  methods: {
    createPost() {
      this.$router.push({ path: '/dang-tin' });
    },
    async handleReadNoti(id) {
      await updateDoc(doc(collection(db, "notifications"), id), {
        is_read: true,
      })
    },
    async handleDeleteNoti(id) {
      await deleteDoc(doc(collection(db, "notifications"), id))
    }
  },
  mounted() {
  },
  watch: {
    notifications(val) {
      if(val) {
        this.notificationItems = val.filter((item) => item.is_read == false && item.user_id == this.user._id)
        if(this.notificationItems.length > 3) {
          this.notificationShow = this.notificationItems.slice(0,3)
        } else {
          this.notificationShow = this.notificationItems
        }
      }
    },
    'user._id'(val) {
        this.notificationItems = this.notifications.filter((item) => item.is_read == false && item.user_id == val)
        if(this.notificationItems.length > 3) {
          this.notificationShow = this.notificationItems.slice(0,3)
        } else {
          this.notificationShow = this.notificationItems
        }
    }
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 96px;
  display: flex;
}
.header-left {
  flex: 9;
}
.header-right {
  flex: 1;
  position: relative;
}
.header-right .menu {
  display: none;
}
.header-right .icon {
  position: absolute;
  right: 20px;
  top: 30px;
  font-size: 20px;
}
.header-menu {
  display: none;
}
img {
  width: 160px;
  height: 80%;
  margin: 10px 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.email-title-tooltip {
  display: inline-block;
  width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

@media screen and (min-width: 800px) {
  .header-left {
    flex: 7;
    display: flex;
  }
  .header-right {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-right .icon {
    display: none;
  }
  .header-right .menu {
    display: block;
  }
  .header-right ul {
    float: right;
  }
  .header-left .header-logo {
    flex: 2;
  }
  .header-left .header-menu {
    margin-left: 20px;
    flex: 8;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu {
    width: 100%;
    height: 32px;
    margin-top: 20px;
  }
  .menu-action {
    margin-right: 15px;
  }
  .menu-action:hover {
    background: gainsboro;
    border-radius: 8px;
  }
  .menu-list {
    display: flex;
    list-style: none;
    color: black;

    font-weight: bold;
    font-size: 14px;
    padding: 0px;
  }
  .menu-items {
    margin-right: 30px;
    cursor: pointer;
  }
  .menu-items span {
    display: inline-block;
    padding-bottom: 2px;
    background-image: linear-gradient(red, red);
    background-position: 0 100%;
    background-size: 0% 2px;
    background-repeat: no-repeat;
    transition: background-size 0.3s, background-position 0s 0.3s;
    color: black;
  }
  .menu-items span:hover {
    background-position: 100% 100%;
    background-size: 100% 2px;
  }
  #login,
  #register {
    width: 90px;
    text-align: center;
    padding: 15px 0;
  }
  .ant-dropdown-link {
    text-decoration: none;
    color: black;
  }
  .router-link {
    font-weight: 600;
    font-size: 14px;
  }
  .icon-user {
    margin-right: 20px;
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
    top: -5px;
    left: 14px;
  }
  .abbreviation-username {
    height: 48px;
    width: 48px;
    background: #ffeceb;
    text-align: center;
    line-height: 48px;
    font-size: 20px;
    color: #961b12;
    border-radius: 48px;
  }
  .fullwrite-username {
    height: 48px;
    font-weight: normal;
    line-height: 48px;
    padding-left: 10px;
    width: 160px;
    display: flex;
  }
  .fullwrite-username p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 140px;
  }
}
</style>
