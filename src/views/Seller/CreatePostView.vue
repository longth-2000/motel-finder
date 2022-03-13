<template>
  <div class="create-post">
    <div class="create-post-content">
      <div class="basic-infor post-infor">
        <BasicInfor title="Thông tin cơ bản" />
      </div>
      <div class="detail-infor post-infor">
        <DetailInfor title="Thông tin phòng trọ" />
      </div>
      <div class="main-infor post-infor">
        <MainInfor title="Thông tin bài viết" />
      </div>
      <div class="image-infor post-infor">
        <ImageInfor title="Hình ảnh" />
      </div>
      <div class="image-infor post-infor">
        <ButtonInfor />
      </div>
    </div>
  </div>
</template>
<script>
import BasicInfor from "../../components/seller/createPost/basicInfor.vue";
import DetailInfor from "../../components/seller/createPost/detailInfor.vue";
import MainInfor from "../../components/seller/createPost/mainInfor.vue";
import ImageInfor from "../../components/seller/createPost/imageInfor.vue";
import ButtonInfor from "../../components/seller/createPost/buttonInfor.vue";

export default {
  components: {
    BasicInfor,
    DetailInfor,
    MainInfor,
    ImageInfor,
    ButtonInfor,
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
::v-deep .content-items{
    margin-top: 20px;
}
.information-post {
  width: 90%;
  margin: 0px auto;
  padding: 20px 0;
}
</style>
