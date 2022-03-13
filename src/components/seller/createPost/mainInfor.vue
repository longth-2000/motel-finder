<template>
  <div class="information-post">
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <div class="content">
      <div id="title-post" class="content-items">
        <p class="label">Tiêu đề</p>
        <a-textarea
          placeholder="VD: Cho thuê phòng trọ 50m2 tại Cầu Giấy"
          :auto-size="{ minRows: 3, maxRows: 5 }"
        />
        <p class="condition">Tối thiểu 30 ký tự, tối đa 99 ký tự</p>
      </div>
      <div id="content-post" class="content-items">
        <p class="label">Nội dung</p>
        <a-textarea
          placeholder="Nhập mô tả chung về bất động sản của bạn. Ví dụ: Khu nhà có vị trí thuận lợi, gần công viên, gần trường học ... "
          :auto-size="{ minRows: 8, maxRows: 10 }"
        />
        <p class="condition">Tối thiểu 30 ký tự, tối đa 3.000 ký tự</p>
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
.condition {
    font-family: Roboto;
    font-size: 12px;
    margin-top: 10px;
}
</style>
