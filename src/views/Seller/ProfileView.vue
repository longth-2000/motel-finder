<template>
  <div class="manage-profile">
    <a-spin tip="Loading..." :spinning="isSpinning">
      <div class="profile-content">
        <div>
          <div class="manage-column">
            <div id="title-column">
              <span>TRANG CÁ NHÂN</span>
            </div>
            <div id="infor-column">
              <div id="avatar">
                <img :src="userInfor.avatar.url" alt="" />
              </div>
              <div id="username">
                <span v-if="userInfor.hasOwnProperty('name')">{{
                  userInfor.name.toUpperCase()
                }}</span>
              </div>
              <div id="post">
                <ul>
                  <li>
                    Số bài đã đăng: <span>{{ posts.length }}</span>
                  </li>
                  <li>Số lượt yêu thích: <span>0</span></li>
                  <li>
                    Bài đăng được duyệt:
                    <span>{{
                      posts.filter((element) => element.state === 2).length
                    }}</span>
                  </li>
                  <li>
                    Bài đăng bị từ chối:
                    <span>{{
                      posts.filter((element) => element.state === 3).length
                    }}</span>
                  </li>
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
                    @click="
                      changeComponent('ChangePassword', 'change-password')
                    "
                  >
                    Thay đổi mật khẩu
                  </li>
                </ul>
              </div>
              <div class="choice-infor">
                <div id="title">Quản lí bài đăng</div>
                <ul>
                  <li
                    :class="{ active: isActive.ManagePost }"
                    @click="changeComponent('ManagePost', 'manage-post')"
                  >
                    Tin đã đăng
                  </li>
                  <li
                    :class="{ active: isActive.DraftPost }"
                    @click="changeComponent('DraftPost', 'draft-post')"
                  >
                    Tin nháp
                  </li>
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
                  <li
                    :class="{ active: isActive.Payment }"
                    @click="changeComponent('Payment', 'payment')"
                  >
                    Thanh toán
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="manage-content">
          <component :is="component" v-bind="setProps">
            <div>
              <div>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  style="display: block"
                />
              </div>
            </div>
            <div style="text-align: center">
              <span>Không có tin nào</span>
            </div>
          </component>
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
import DraftPost from "../../components/seller/DraftPost.vue";
import Payment from "../PurchaseView.vue";
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { RepositoryFactory } from "../../repository/factory";

export default {
  components: {
    ChangePassword,
    ManageProfile,
    Notification,
    ManagePost,
    DraftPost,
    Payment,
  },

  data() {
    return {
      component: "",
      isActive: {
        ChangePassword: false,
        ManageProfile: false,
        Notification: false,
        ManagePost: false,
        DraftPost: false,
        Payment: false,
      },
      urlParams: "",
      posts: [],
    };
  },
  computed: {
    ...mapGetters("app", ["isSpinning"]),
    ...mapGetters("user", ["userInfor"]),
    setProps() {
      let props = {};
      if (this.component === "ManagePost" || this.component === "DraftPost") {
        props = {
          getArticle: this.getArticleByUser,
        };
      }
      return props;
    },
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
    ...mapActions("user", ["getUserInfor"]),
    async setURL() {
      var query = this.$route.query;
      var checkExistedType = Object.prototype.hasOwnProperty.call(
        query,
        "type"
      );
      if (!checkExistedType) {
        this.$router.push({
          path: "/ho-so",
          query: {
            type: "manage-profile",
          },
        });
      }
      var emptyObject = Object.keys(query).length === 0;
      var urlParams = "";
      if (emptyObject) {
        urlParams = "manage-profile";
      } else {
        urlParams = this.$route.query.type;
      }
      this.urlParams = urlParams.split("-").map(this.capitalize).join("");
      this.component = this.urlParams;
      const id = JSON.parse(localStorage.getItem("user")).id;
      const { data } = await RepositoryFactory.get(
        "article"
      ).filterArticleByUser(id);
      this.posts = data.data.data;
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
    async getArticleByUser(page) {
      let query = this.$route.query;
      const { data } = await RepositoryFactory.get("article").filterArticle(
        page,
        query
      );
      return data.data;
    },
  },
};
</script>
<style scoped>
.manage-profile {
  background: #f2f2f280;
}
.profile-content {
  width: 90%;
  height: 950px;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
}
.manage-column {
  width: 250px;
  height: 100%;
  border: 1px solid #ccc;
  background: #fff;
}
.manage-content {
  height: 100%;
  width: 95%;
  margin-left: 20px;
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
  border-radius: 4px;
  margin: 20px;
  width: 98%;
}

::v-deep .table .form input {
  width: 50%;
}
::v-deep .table .label {
  width: 150px;
  font-size: 12px;
  font-family: Tahoma;
}
::v-deep .ant-tabs-nav-scroll {
  text-align: center;
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
::v-deep .empty-post-notify {
  margin: 180px 0 0 0;
}
.empty-post-notify > div:first-of-type {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
</style>
