<template>
  <div class="information-post">
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <div class="content">
      <div id="condition">
        Hãy dùng ảnh thật, không trùng, không chèn số điện thoại. Mỗi ảnh kích
        thước tối thiểu 400x400, tối đa 15 MB. Số lượng ảnh tối đa tuỳ theo loại
        tin
      </div>
      <div id="frame-image">
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
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["title"],
  data() {
    return {
      types: [
        "Phòng trọ",
        "Nhà nguyên căn",
        "Chung cư nguyên căn",
        "Chung cư mini",
      ],
    };
  },
  methods: {
    ...mapMutations("app", ["uploadImageMotel"]),
    handleChange(infor) {
      console.log(infor);
      const MAX_SIZE = 1024 * 1024 * 5;
      let checkSize =
        infor.fileList.filter((item) => item.originFileObj.size >= MAX_SIZE)
          .length > 0;
      if (checkSize)
        this.openNotification("Ảnh không hợp lệ", "Tồn tại ảnh lớn hơn 5MB", "error");
      else {
        let images = infor.fileList.map((item) => item.originFileObj);
        this.uploadImageMotel(images);
      }
    },
  },
};
</script>
<style scoped>
#condition {
  font-family: Roboto;
  font-size: 12px;
}
#frame-image {
  width: 100%;
  border: 1px dashed rgb(204, 204, 204);
  margin: 26px 0;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#title-image {
  font-family: Roboto;
  font-size: 13px;
  margin: 10px -30px;
}
</style>
