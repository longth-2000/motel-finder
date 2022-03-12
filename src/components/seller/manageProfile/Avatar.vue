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
.change-title {
  width: 100%;
  padding: 5px 10px;
  background: #d4ebfd;
  border-bottom: 2px solid #055699;
  font-family: Tahoma;
  font-size: 12px;
  font-weight: bold;
  color: #055699;
}
.change-content {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.table {
  margin: 20px 20px;
}
.table .form input {
  width: 300px;
}
.table .label {
  width: 150px;
  font-size: 12px;
  font-family: Tahoma;
}
</style>
