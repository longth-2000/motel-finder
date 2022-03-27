<template>
  <div class="manage-profile">
    <a-spin tip="Loading..." :spinning="isSpinning">
      <div class="profile-content">
        <div class="manage-column">
          <div id="title-column">
            <span>TRANG CÁ NHÂN</span>
          </div>
          <div id="infor-column">
            <div id="avatar">
              <img :src="avatar" alt="" />
            </div>
            <div id="username">
              <span>{{ name.toUpperCase() }}</span>
            </div>
            <div id="post">
              <ul>
                <li>Số bài đã đăng: <span>0</span></li>
                <li>Số lượt yêu thích: <span>0</span></li>
                <li>Bài đăng được duyệt: <span>0</span></li>
                <li>Bài đăng bị từ chối: <span>0</span></li>
              </ul>
            </div>
          </div>
          <div id="choice-column">
            <div class="choice-infor">
              <div id="title">Quản lí thông tin cá nhân</div>
              <ul>
                <li
                  :class="{ active: isActive.ManageProfile }"
                  @click="changeComponent('ManageProfile', 'manage-profile')"
                >
                  Thay đổi thông tin cá nhân
                </li>
                <li
                  :class="{ active: isActive.ChangePassword }"
                  @click="changeComponent('ChangePassword', 'change-password')"
                >
                  Thay đổi mật khẩu
                </li>
              </ul>
            </div>
            <div class="choice-infor">
              <div id="title">Quản lí bài đăng</div>
              <ul>
                <li>
                  <router-link class="router-link" to="/dang-tin"
                    >Đăng tin</router-link
                  >
                </li>
                <li
                  :class="{ active: isActive.ManagePost }"
                  @click="changeComponent('ManagePost', 'manage-post')"
                >
                  Tin đã đăng
                </li>
                <li>Tin nháp</li>
              </ul>
            </div>
            <div class="choice-infor">
              <div id="title">Tiện ích</div>
              <ul>
                <li
                  :class="{ active: isActive.Notification }"
                  @click="changeComponent('Notification', 'notification')"
                >
                  Thông báo
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="manage-content">
          <component :is="component" @setAvatar="setAvatar"></component>
        </div>
      </div>
    </a-spin>
  </div>
</template>
<script>
import ChangePassword from "../../components/seller/ChangePassword.vue";
import ManageProfile from "../../components/seller/ManageProfile.vue";
import Notification from "../../components/seller/Notification.vue";
import ManagePost from "../../components/seller/ManagePost.vue";

import { mapGetters } from "vuex";
import moment from "moment";

export default {
  components: {
    ChangePassword,
    ManageProfile,
    Notification,
    ManagePost,
  },

  data() {
    return {
      component: "",
      isActive: {
        ChangePassword: false,
        ManageProfile: false,
        Notification: false,
        ManagePost: false,
      },
      urlParams: "",
      avatar:"",
      name:""
    };
  },
  computed: {
    ...mapGetters("app", ["isSpinning"]),
  },
  created() {
    this.setURL();
  },
  watch: {
    urlParams(newVal, oldVal) {
      this.isActive[newVal] = true;
      this.isActive[oldVal] = false;
    },
  },
  methods: {
    moment,
    setURL() {
      var query = this.$route.query;
      var emptyObject = Object.keys(query).length === 0;
      var urlParams = "";
      if (emptyObject) {
        urlParams = "manage-profile";
      } else {
        urlParams = this.$route.query.type;
      }
      this.urlParams = urlParams.split("-").map(this.capitalize).join("");
      console.log(this.urlParams);
      this.component = this.urlParams;
    },
    changeComponent(component, params) {
      window.scrollTo(0, 0);
      this.$router.push(`/ho-so?type=${params}`);
      this.component = component;
      this.urlParams = params.split("-").map(this.capitalize).join("");
    },
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    setAvatar(mes) {
      this.avatar = mes.avatar.url;
      this.name = (mes.name) ? mes.name : ""
    },
  },
};
</script>
<style scoped>
.manage-profile {
  background: #f2f2f280;
}
.profile-content {
  width: 1200px;
  height: 900px;
  margin: 0 auto;
  display: flex;
  padding: 50px 0;
}
.manage-column {
  width: 250px;
  height: 100%;
  border: 1px solid #ccc;
  background: #fff;
}
.manage-content {
  width: 100%;
  height: 100%;
  margin-left: 20px;
  background: #fff;
}
#title-column {
  width: 100%;
  background: #055699;
  padding: 5px;
  text-align: center;
  color: white;
  font-weight: bold;
  font-family: Tahoma;
  font-size: 13px;
}
#infor-column img {
  display: block;
  margin: 40px auto 25px;
}
#infor-column #username {
  text-align: center;
  color: #069;
  font-family: Calibri;
  font-weight: bold;
}
#infor-column #post {
  width: 90%;
  margin: 20px auto;
  height: 100px;
  background: #f0f6f2;
  border: 1px dashed #cbd9ca;
}
#infor-column #post li {
  float: right;
  font-family: Tahoma;
  font-size: 12px;
}
#infor-column #post ul {
  margin: 10px;
}
#infor-column #post li span {
  font-weight: bold;
}
.choice-infor #title {
  width: 100%;
  padding: 10px;
  background: #e8e8e8;
  font-size: 13px;
  font-weight: bold;
  font-family: Tahoma;
}
.choice-infor li {
  font-family: Tahoma;
  font-size: 12px;
  margin-top: 10px;
  list-style: square;
}
.choice-infor li:hover {
  color: #069;
  cursor: pointer;
}
::v-deep #title-component-profile {
  width: 100%;
  background: #055699;
  height: 30px;
  color: white;
  font-weight: bold;
  padding-left: 10px;
  line-height: 30px;
  font-family: Tahoma;
  font-size: 12px;
  margin-bottom: 20px;
}
::v-deep .table {
  margin: 20px 20px;
}
::v-deep .table .form input {
  width: 300px;
}
::v-deep .table .label {
  width: 150px;
  font-size: 12px;
  font-family: Tahoma;
}
#avatar {
  width: 120px;
  height: 120px;
  margin: -10px auto 20px;
}
#avatar img {
  border-radius: 120px;
}
.active {
  color: red;
}
</style>
