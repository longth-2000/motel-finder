<template>
  <div class="information-post">
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <div class="content">
      <div id="condition">
        Hãy dùng ảnh thật, không trùng, không chèn số điện thoại. Mỗi ảnh kích
        thước tối thiểu 400x400, tối đa 15 MB. Số lượng ảnh tối đa tuỳ theo loại
        tin. Bạn không thể sửa ảnh khi đã đăng tin
      </div>
      <div class="frame-image">
        <div id="button-image clear-fix">
          <a-upload
            name="image"
            id="image"
            :action-upload="false"
            :multiple="true"
            @change="handleChange"
            accept="image/*"
            list-type="picture"
          >
            <a-button> <a-icon type="upload" /> Tải ảnh </a-button>
          </a-upload>
        </div>
      </div>
      <div class="frame-image container-fluid" v-if="imageList.length !== 0">
        <div
          class="row"
          style="justify-content: space-evenly; padding-left: 60px"
        >
          <div
            v-for="(image, index) in imageList"
            :key="index"
            class="result-image col-12 col-sm-6 col-md-4"
          >
            <img :src="image.url" alt="" />
            <div @click="deleteImage(image.public_id)" class="icon-image">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
export default {
  props: {
    title: {
      type: String,
    },
    images:{
      type:Array
    }
  },
  data() {
    return {
      types: [
        "Phòng trọ",
        "Nhà nguyên căn",
        "Chung cư nguyên căn",
        "Chung cư mini",
      ],
      imageList: [],
    };
  },
  watch: {
    images(newVal) {
      this.imageList = newVal
    }
  },
  methods: {
    ...mapMutations("app", ["uploadImageMotel"]),
    ...mapActions("article", ["getArticle"]),
    handleChange(infor) {
      const MAX_SIZE = 1024 * 1024 * 5;
      let checkSize =
        infor.fileList.filter((item) => item.originFileObj.size >= MAX_SIZE)
          .length > 0;
      if (checkSize)
        this.openNotification(
          "Ảnh không hợp lệ",
          "Tồn tại ảnh lớn hơn 5MB",
          "error"
        );
      else {
        let images = infor.fileList.map((item) => item.originFileObj);
        this.uploadImageMotel(images);
      }
    },
    deleteImage(public_id) {
      this.imageList = this.imageList.filter(
        (image) => image.public_id !== public_id
      ); 
      this.$emit("delete-image", public_id)
    },
  },
};
</script>
<style scoped>
#condition {
  font-family: Roboto;
  font-size: 12px;
}
.frame-image {
  width: 100%;
  border: 1px dashed rgb(204, 204, 204);
  margin: 26px 0;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#title-image {
  font-family: Roboto;
  font-size: 13px;
  margin: 10px -30px;
}
.result-image {
  width: 150px;
  height: 100px;
  position: relative;
  margin: 20px 40px 0 0;
  padding: 0;
}
.result-image .icon-image {
  color: black;
  font-size: 15px;
  text-align: center;
  position: absolute;
  top: 5px;
  right: 5px;
  height: 20px;
  width: 20px;
  background: white;
  border-radius: 10px;
}
</style>
