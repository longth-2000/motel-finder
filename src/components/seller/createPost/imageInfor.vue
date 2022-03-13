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
        <div id="button-image">
          <a-upload
            name="file"
            :multiple="true"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          >
            <a-button> <a-icon type="upload" /> Tải ảnh </a-button>
          </a-upload>
          <p id="title-image">Bấm để chọn ảnh cần tải lên</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
};
</script>
<style scoped>
#condition {
  font-family: Roboto;
  font-size: 12px;
}
#frame-image {
  width: 100%;
  height: 172px;
  border: 1px dashed rgb(204, 204, 204);
  margin-top: 26px;
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
