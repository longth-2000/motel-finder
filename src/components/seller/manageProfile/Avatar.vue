<template>
  <div>
    <div class="change-title">{{ title }}</div>
    <div class="change-content">
      <a-upload
        name="file"
        :multiple="true"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      >
        <a-button> <a-icon type="upload" /> Chọn file </a-button>
      </a-upload>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style scoped>
.change-content {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
