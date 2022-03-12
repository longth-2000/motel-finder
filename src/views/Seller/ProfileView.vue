<template>
  <div class="manage-profile">
    <div class="profile-content">
      <div class="manage-column">
        <div id="title-column">
          <span>TRANG CÁ NHÂN</span>
        </div>
        <div id="infor-column">
          <div id="avatar">
            <img
              src="https://file4.batdongsan.com.vn/images/default-user-avatar-blue.jpg"
              alt=""
            />
          </div>
          <div id="username">
            <span>TRUONG HOANG LONG</span>
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
              <li @click="component = 'ManageProfile'">Thay đổi thông tin cá nhân</li>
              <li @click="component = 'ChangePassword'">Thay đổi mật khẩu</li>
            </ul>
          </div>
          <div class="choice-infor">
            <div id="title">Quản lí bài đăng</div>
            <ul>
              <li>Đăng tin</li>
              <li @click="component = 'ManagePost'">Tin đã đăng</li>
              <li>Tin nháp</li>
            </ul>
          </div>
          <div class="choice-infor">
            <div id="title">Tiện ích</div>
            <ul>
              <li @click="component = 'Notification'">Thông báo</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="manage-content">
          <component :is="component"></component>
      </div>
    </div>
  </div>
</template>
<script>
import ChangePassword from "../../components/seller/ChangePassword.vue"
import ManageProfile from "../../components/seller/ManageProfile.vue"
import Notification from "../../components/seller/Notification.vue"
import ManagePost from "../../components/seller/ManagePost.vue"

export default {
    components:{
        ChangePassword,
        ManageProfile,
        Notification,
        ManagePost
    },
    data() {
        return{
          component:'ManageProfile'
        }
    }
}
</script>
<style scoped>

.manage-profile {
  background: #f2f2f280;
}
.profile-content {
  width: 75%;
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
  color:#069;
  cursor: pointer;
}
</style>
