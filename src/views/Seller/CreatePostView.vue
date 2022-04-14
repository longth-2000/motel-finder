<template>
  <div class="create-post">
    <a-spin tip="Loading..." :spinning="isSpinning">
      <div class="create-post-content">
        <a-form action="">
          <div class="basic-infor post-infor">
            <BasicInfor
              title="Thông tin cơ bản"
              :isSubmit="check.isSubmit"
              v-model="formValidation"
              :validation="$v.formValidation"
              @timeExpired="setEXpiredDate"
            />
          </div>
          <div class="detail-infor post-infor">
            <DetailInfor
              title="Thông tin phòng trọ"
              :isSubmit="check.isSubmit"
              v-model="formValidation"
              :validation="$v.formValidation"
            />
          </div>
          <div class="main-infor post-infor">
            <ArticalInfor
              title="Thông tin bài viết"
              :isSubmit="check.isSubmit"
              v-model="formValidation.detailedPost"
              :validation="$v.formValidation.detailedPost"
            />
          </div>
          <div class="image-infor post-infor">
            <ImageInfor
              title="Hình ảnh"
              @delete-image="deleteImage"
              :images="images"
            />
          </div>
          <div class="image-infor post-infor">
            <ButtonInfor
              :handlePost="idArticle === undefined ? createPost : updatePost"
              :title="idArticle === undefined ? 'Đăng tin' : 'Sửa tin'"
            />
          </div>
        </a-form>
        <a-modal
          v-model="isVisible.alert"
          title="Thoát đăng tin"
          ok-text="Thoát"
          cancel-text="Quay lại chỉnh sửa"
          @ok="createDraft"
        >
          <div style="display: flex">
            <div class="modal-icon-alert">
              <font-awesome-icon
                icon="fa-solid fa-triangle-exclamation"
                style="color: darkorange; font-size: 25px"
              />
            </div>
            <div class="modal-content-alert">
              Tin đăng chưa được gửi, bạn có thực sự muốn thoát?
            </div>
          </div>
        </a-modal>
      </div>
    </a-spin>
  </div>
</template>
<script>
import BasicInfor from "../../components/seller/createPost/basicInfor.vue";
import DetailInfor from "../../components/seller/createPost/detailInfor.vue";
import ArticalInfor from "../../components/seller/createPost/articalInfor.vue";
import ImageInfor from "../../components/seller/createPost/imageInfor.vue";
import ButtonInfor from "../../components/seller/createPost/buttonInfor.vue";
import parentValidationMixin from "../../mixins/validation/postValidation/parentValidation";
import { RepositoryFactory } from "../../repository/factory";

import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  components: {
    BasicInfor,
    DetailInfor,
    ArticalInfor,
    ImageInfor,
    ButtonInfor,
  },
  mixins: [parentValidationMixin],
  data() {
    return {
      formData: {},
      check: {
        isSubmit: false,
      },
      idArticle: this.$route.query.id,
      status: this.$route.query.status,
      deletedImageList: [],
      images: [],
      destination: "",
    };
  },
  created() {
    window.onbeforeunload = function (event) {
      event.returnValue = "Write something clever here..";
    };
    if (this.idArticle !== undefined) {
      this.getArticleByID();
    }
  },
  computed: {
    ...mapGetters("app", ["imageMotel", "isSpinning"]),
    ...mapGetters("modal", ["isVisible"]),
  },

  methods: {
    ...mapActions("article", ["getArticle"]),
    ...mapMutations("app", ["onSpinning", "offSpinning"]),
    ...mapMutations("modal", ["showModal"]),
    async getArticleByID() {
      let articleID = this.$route.query.id;
      const response = await this.getArticle(articleID);
      this.formValidation = { ...response };
      let deletedArray = ["_id", "__v", "district", "ward"];
      deletedArray.forEach((item) => {
        if (item === "district" || item === "ward") {
          if (this.formValidation.address[item] === "") {
            delete this.formValidation.address[item];
          }
        } else delete this.formValidation[item];
      });
      this.images = JSON.parse(JSON.stringify(this.formValidation.images));
    },
    async callApi(status, message) {
      this.onSpinning();
      this.formValidation.status = status;
      let lengthImage = Object.keys(this.imageMotel).length > 1;
      if (!lengthImage) {
        if (status == "posted") {
          this.openNotification(
            "Cảnh báo",
            "Bạn phải tải từ hai ảnh trở lên",
            "warn"
          );
        } else {
          const MotelRes = await RepositoryFactory.get("article").createArticle(
            this.formValidation
          );
          console.log(MotelRes);
        }
      } else {
        let formData = new FormData();
        this.imageMotel.forEach((image) => formData.append("file", image));
        const { data } = await RepositoryFactory.get("app").uploadImage(
          formData
        );
        this.formValidation.images = data;
        const MotelRes = await RepositoryFactory.get("article").createArticle(
          this.formValidation
        );
        console.log(MotelRes);
        this.openNotification("Thành công", message, "success");
        window.onbeforeunload = function () {
          return null;
        };
        window.location.href = "ho-so?type=manage-post";
      }
      if (status === "draft") {
        window.onbeforeunload = function () {
          return null;
        };
        window.location.href = this.destination;
      }
      this.offSpinning();
    },
    createPost() {
      let validation = this.checkValidation(this.check, this.$v);
      if (!validation) return;
      this.callApi("posted", "Tin đã được đăng");
    },
    async updatePost() {
      let validation = this.checkValidation(this.check, this.$v);
      if (!validation) return;
      this.formValidation.status = "posted";
      let lengthImage = Object.keys(this.imageMotel).length > 0;
      if (lengthImage) {
        let formData = new FormData();
        this.imageMotel.forEach((image) => formData.append("file", image));
        const image = await RepositoryFactory.get("app").uploadImage(formData);
        if (image.data.public_id !== undefined) {
          this.formValidation.images.push(image.data);
        } else {
          image.data.forEach((element) => {
            this.formValidation.images.push(element);
          });
        }
      }
      this.formValidation.images = this.formValidation.images.filter(
        (image) =>
          !this.deletedImageList.some((item) => item === image.public_id)
      );
      if (this.formValidation.images.length < 2) {
        this.openNotification(
          "Cảnh báo",
          "Bạn cần đăng ít nhất 2 ảnh",
          "warning"
        );
      } else {
        if (this.deletedImageList.length !== 0) {
          const deletedImage = await RepositoryFactory.get("app").deleteImage(
            this.deletedImageList
          );
          console.log(deletedImage);
        }
        delete this.formValidation.state;
        delete this.formValidation.createdAt;
        delete this.formValidation.updatedAt;
        const { data } = await RepositoryFactory.get("article").updateArticle(
          this.formValidation,
          this.idArticle
        );
        console.log(data.message)
        window.onbeforeunload = function () {
          return null;
        };
        window.location.href = "/ho-so?type=manage-post"
      }
    },
    createDraft() {
      let status = this.$route.query.status;
      if (status === "posted" || status === "draft") {
        window.onbeforeunload = function () {
          return null;
        };
         window.location.href = this.destination;
      } else {
        this.callApi("draft", "Bài viết đã được lưu vào tin nháp");
      }
    },
    setEXpiredDate(time) {
      const DATE = 60 * 60 * 1000 * 24;
      let duration = time === 1 ? DATE : time === 2 ? 30 * DATE : 60 * DATE;
      this.formValidation.postExpired = new Date(Date.now() + duration);
    },
    deleteImage(public_id) {
      this.deletedImageList.push(public_id);
    }
  },

  beforeRouteLeave(to) {
    this.destination = to.path;
    this.showModal("alert");
  },
};
</script>
<style scoped>
.create-post {
  background: #f2f2f280;
}
.create-post-content {
  width: 60%;
  margin: 0px auto;
  padding: 20px 0;
}
.post-infor {
  width: 100%;
  background: white;
  box-shadow: rgb(0 0 0 / 15%) 0px 1px 4px;
  border-radius: 8px;
  margin-top: 10px;
}
::v-deep .title {
  font-family: Calibri;
  font-size: 24px;
  color: rgb(44, 44, 44);
  font-weight: 700;
  padding-top: 20px;
  margin-bottom: 30px;
}
::v-deep .label {
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
}
::v-deep .content-items {
  margin-top: 40px;
}
.information-post {
  width: 90%;
  margin: 0px auto;
  padding: 20px 0;
}
::v-deep .is-invalid-form {
  border-color: red;
  box-shadow: none;
}
::v-deep .ant-btn {
  font-weight: bold;
}
::v-deep .ant-btn-primary {
  background: red;
  border: none;
}
::v-deep .ant-modal-content {
  width: 400px;
}
.modal-icon-alert {
  flex: 1;
  padding: 5px 30px;
}
.modal-content-alert {
  flex: 7;
  color: black;
}
@media only screen and (max-width: 992px) {
  .create-post-content {
    width: 80%;
  }
}
@media only screen and (max-width: 768px) {
  .create-post-content {
    width: 100%;
  }
}
</style>
