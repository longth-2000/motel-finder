<template>
  <div class="create-post">
    <div class="create-post-content">
      <a-form action="">
        <div class="basic-infor post-infor">
          <BasicInfor
            title="Thông tin cơ bản"
            :isSubmit="check.isSubmit"
            v-model="formValidation.basic"
            :validation="$v.formValidation.basic"
          />
        </div>
        <div class="detail-infor post-infor">
          <DetailInfor
            title="Thông tin phòng trọ"
            :isSubmit="check.isSubmit"
            v-model="formValidation.detail"
            :validation="$v.formValidation.detail"
          />
        </div>
        <div class="main-infor post-infor">
          <ArticalInfor
            title="Thông tin bài viết"
            :isSubmit="check.isSubmit"
            v-model="formValidation.article"
            :validation="$v.formValidation.article"
          />
        </div>
        <div class="image-infor post-infor">
          <ImageInfor title="Hình ảnh" />
        </div>
        <div class="image-infor post-infor">
          <ButtonInfor :createPost="createPost" />
        </div>
      </a-form>
    </div>
  </div>
</template>
<script>
import BasicInfor from "../../components/seller/createPost/basicInfor.vue";
import DetailInfor from "../../components/seller/createPost/detailInfor.vue";
import ArticalInfor from "../../components/seller/createPost/articalInfor.vue";
import ImageInfor from "../../components/seller/createPost/imageInfor.vue";
import ButtonInfor from "../../components/seller/createPost/buttonInfor.vue";
import parentValidationMixin from "../../mixins/validation/postValidation/parentValidation";

export default {
  components: {
    BasicInfor,
    DetailInfor,
    ArticalInfor,
    ImageInfor,
    ButtonInfor,
  },
  mixins:[parentValidationMixin],
  data() {
    return {
      formData: {},
      check: {
        isSubmit:false
      }
      
    };
  },
  methods: {
    async createPost() {
      let validation = this.checkValidation(this.check, this.$v)
      if(!validation) return;

    }
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
</style>
