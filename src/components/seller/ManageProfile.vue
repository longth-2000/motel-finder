<template>
  <div>
    <div id="title-component-profile">
      <span>THAY ĐỔI THÔNG TIN CÁ NHÂN</span>
    </div>
    <div id="content">
      <div class="change-infor">
        <a-form>
          <div id="information">
            <Information
              title="Thông tin cá nhân"
              :isSubmit="check.isSubmit"
              v-model="manageProfile"
              :validation="$v.manageProfile"
            />
          </div>
          <div id="contact">
            <Contact
              title="Thông tin liên hệ"
              :isSubmit="check.isSubmit"
              v-model="manageProfile"
              :validation="$v.manageProfile"
              :email="email"
            />
          </div>
          <div id="Avatar">
            <Avatar title="Avatar" />
          </div>
          <div id="button">
            <a-button type="primary" @click="createProfile()">
              Primary
            </a-button>
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
import { required, numeric } from "vuelidate/lib/validators";
import { mapMutations, mapGetters } from "vuex";
import { RepositoryFactory } from "../../repository/factory";
import moment from "moment";
export default {
  components: {
    Information,
    Contact,
    Avatar,
  },
  data() {
    return {
      manageProfile: {
        phoneNumber: "",
        CCCD: "",
        zalo: "",
        name: "",
        address: {},
        sex: true,
        birthDay: null,
      },
      email: "",
      check: {
        isSubmit: false,
      },
      formData: {},
    };
  },
  computed: {
    ...mapGetters("app", ["imageAvatar"]),
  },
  validations: {
    manageProfile: {
      phoneNumber: {
        required,
        numeric,
      },
      CCCD: {
        required,
        numeric,
      },
      name: { required },
      address: {
        district: { required },
        ward: { required },
        detail: { required },
      },
      birthDay: { required },
    },
  },
  created() {
    this.getUserInfor();
  },
  methods: {
    moment,
    ...mapMutations("app", [
      "uploadImageAvatar",
      "uploadLinkAvatar",
      "onSpinning",
      "offSpinning",
    ]),
    async createProfile() {
      let validation = this.checkValidation(this.check, this.$v);
      if (!validation) return;
      else {
        this.onSpinning();
        let formData = new FormData();
        formData.append("file", this.imageAvatar);
        let accessToken = this.getCookie("accessToken");
        this.manageProfile.id = localStorage.getItem("id");
        const headers = {
          Authorization: "Bearer " + accessToken,
        };
        try {
          const { public_id } = this.manageProfile.avatar;
          const ImageResponse = await RepositoryFactory.get("app").uploadImage(
            formData
          );
          if (public_id !== "") {
            this.deleteImage(public_id.split());
          }
          this.manageProfile.avatar = ImageResponse.data;
        } catch (error) {
          // trong truong hop khong co file nao duoc up ken
          const { public_id, url } = this.manageProfile.avatar;
          this.manageProfile.avatar =
            public_id === "" || public_id === "null"
              ? {
                  public_id: "null",
                  url: "https://file4.batdongsan.com.vn/images/default-user-avatar-blue.jpg",
                }
              : {
                  public_id,
                  url,
                };
        } finally {
          const dataResponse = await RepositoryFactory.get("user").updateUser(
            this.manageProfile,
            headers
          );
          console.log(dataResponse);
          this.offSpinning()
          this.openNotification("Thành công", "Hồ sơ của bạn đã được cập nhật", "success")
           this.$emit("setAvatarAfterSave", this.manageProfile);
        }
      }
    },
    async getUserInfor() {
      let accessToken = this.getCookie("accessToken");
      let userID = localStorage.getItem("id");
      const headers = {
        Authorization: "Bearer " + accessToken,
      };
      const { data } = await RepositoryFactory.get("user").getUser(
        userID,
        headers
      );
      console.log(data);
      this.$emit("setAvatar", data);
      this.email = data.email;
      let deletedArray = [
        "isApproved",
        "_id",
        "email",
        "role",
        "__v",
        "createdAt",
        "updatedAt",
      ];
      deletedArray.forEach((item) => {
        delete data[item];
      });
      for (let property in data) {
        if (property === "birthDay") {
          this.manageProfile.birthDay = moment(data.birthDay, "YYYY-MM-DD");
        } else {
          this.manageProfile[property] = data[property];
        }
      }
      console.log(this.manageProfile);
    },
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
::v-deep .is-invalid-form {
  border-color: red;
  box-shadow: none;
}
</style>
