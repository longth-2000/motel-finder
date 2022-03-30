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
          <div class="image-infor post-infor" v-if="idArticle === undefined">
            <ImageInfor title="Hình ảnh" />
          </div>
          <div class="image-infor post-infor">
            <ButtonInfor
              :handlePost="[idArticle === undefined ? createPost : updatePost]"
              :title="[idArticle === undefined ? 'Đăng tin' : 'Sửa tin']"
            />
          </div>
        </a-form>
        <a-modal
          v-model="isVisible.alert"
          title="Thoát đăng tin"
          ok-text="Lưu vào tin nháp"
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
              Tin đăng đang được soạn dở, bạn có muốn lưu vào tin nháp?
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
    };
  },
  created() {
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
      console.log(response);
      this.formValidation = { ...response };
      let deletedArray = ["_id", "__v"];
      deletedArray.forEach((item) => {
        delete this.formValidation[item];
      });
    },
    async callApi() {
      let formData = new FormData();
      this.imageMotel.forEach((image) => formData.append("file", image));
      const { data } = await RepositoryFactory.get("app").uploadImage(formData);
      this.formValidation.images = data;
      this.formValidation.status = "posted";
      const MotelRes = await RepositoryFactory.get("article").createArticle(
        this.formValidation
      );
      console.log(MotelRes);
    },
    createPost() {
      let validation = this.checkValidation(this.check, this.$v);
      if (!validation) return;
      try {
        this.onSpinning();
        this.callApi();
        this.openNotification(
          "Thành công",
          "Bạn đã tạo bài đăng thành công",
          "warning"
        );
      } catch (error) {
        this.openNotification(
          "Cảnh báo",
          "Bạn phải tải từ hai ảnh trở lên",
          "success"
        );
      } finally {
        this.offSpinning();
      }
    },
    async updatePost() {
      let validation = this.checkValidation(this.check, this.$v);
      if (!validation) return;
      try {
        const { data } = await RepositoryFactory.get("article").updateArticle(
          this.formValidation,
          this.idArticle
        );
        console.log(data);
        this.openNotification("Thành công", data.message, "success"); 
      } catch (error) {
        console.log(error.response);
      }
    },
    createDraft() {
      this.callApi();
      /*  window.location.href = "ho-so?type=draft-post" */
    },
  },

  beforeRouteLeave() {
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
</style>
