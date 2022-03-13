<template>
  <div>
    <div id="title-component-profile">
      <span>THAY ĐỔI THÔNG TIN CÁ NHÂN</span>
    </div>
    <div id="content">
      <div class="change-infor">
        <a-form>
          <div id="information">
            <Information title="Thông tin cá nhân" />
          </div>
          <div id="contact">
            <Contact title="Thông tin liên hệ" />
          </div>
          <div id="Avatar">
            <Avatar title="Avatar" />
          </div>
          <div id="button">
            <a-button type="primary"> Primary </a-button>
          </div>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script>
import Information from "./manageProfile/Information.vue";
import Contact from "./manageProfile/Contact.vue";
import Avatar from "./manageProfile/Avatar.vue";

export default {
  components: {
    Information,
    Contact,
    Avatar,
  },
};
</script>
<style scoped>
#title {
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
#content {
  background: white;
}
#button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
}

::v-deep .change-title {
  width: 100%;
  padding: 5px 10px;
  background: #d4ebfd;
  border-bottom: 2px solid #055699;
  font-family: Tahoma;
  font-size: 12px;
  font-weight: bold;
  color: #055699;
}
</style>
