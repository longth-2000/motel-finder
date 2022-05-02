<template>
  <div style="background: white; height: 100%">
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
            <a-button type="primary" @click="createProfile()"> Lưu </a-button>
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
import { mapMutations, mapGetters, mapActions } from "vuex";
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
        date: null,
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
      date: { required },
    },
  },
  created() {
    this.getUser();
  },
  methods: {
    moment,
    ...mapMutations("app", ["onSpinning", "offSpinning"]),
    ...mapMutations("user", ["GET_USER"]),
    ...mapActions("user", ["getUserInfor"]),
    async createProfile() {
     let validation = this.checkValidation(this.check, this.$v);
      if (!validation) return;
      else { 
      try {
        const regexAvatarGoogle = /googleusercontent/;
        this.onSpinning();
        let checkImageEmpty = Object.keys(this.imageAvatar).length === 0;
        this.manageProfile.id = this.checkLogged().id;
        if (!checkImageEmpty) {
          let formData = new FormData();
          formData.append("file", this.imageAvatar);
          const { public_id, url } = this.manageProfile.avatar;
          const ImageResponse = await RepositoryFactory.get("app").uploadImage(
            formData
          );
         
          if (
            public_id !== "" && public_id !== "null" && !regexAvatarGoogle.test(url)
          ) {
            const ImageDelete = await RepositoryFactory.get("app").deleteImage(
              public_id.split()
            );
            console.log(ImageDelete);
          }
          this.manageProfile.avatar = ImageResponse.data;
        } else {
          const { public_id, url } = this.manageProfile.avatar;
          if (public_id === "" || public_id === "null") {
            if (regexAvatarGoogle.test(url))
              this.manageProfile.avatar = {
                public_id: "null",
                url: url,
              };
            else
              this.manageProfile.avatar = {
                public_id: "null",
                url: "https://file4.batdongsan.com.vn/images/default-user-avatar-blue.jpg",
              };
          } else {
            this.manageProfile.avatar = {
              public_id,
              url,
            };
          }
        }
        if (this.manageProfile.date !== undefined) {
          this.manageProfile.birthDay =
            this.manageProfile.date.format("YYYY-MM-DD");
        }
        const { data } = await RepositoryFactory.get("user").updateUser(
          this.manageProfile
        );
        this.GET_USER(this.manageProfile);
        this.offSpinning();
        this.openNotification("Thành công", data.message, "success");
       } 
       catch(err) {
        console.log(err.response)
       }
      }
      
    },
    async getUser() {
      const data = await this.getUserInfor();
      for (let property in data) {
        if (property === "birthDay") {
          this.manageProfile.date = moment(data.birthDay, "YYYY-MM-DD");
        } else {
          this.manageProfile[property] = data[property];
        }
      }
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
  margin-left: 47.5%;
  padding: 20px 0 20px 0;
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
