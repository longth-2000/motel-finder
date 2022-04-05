<template>
  <div>
    <div class="notify-title modal-title">
      <h3>Khôi phục mật khẩu</h3>
    </div>
    <div class="notify-content">
      Thông báo khôi phục mật khẩu đã được gửi đến địa chỉ email của bạn. Vui
      lòng kiếm tra hộp thư đến (hoặc thư rác - spam) và làm theo hướng dẫn.
    </div>
    <div class="notify-button">
      <a-button type="danger" @click="closeModal('notifyPassword')"> Đóng </a-button>
    </div>
  </div>
</template>
<script>
export default {
};
</script>
<style scoped>
.notify-content {
  color: black;
  margin-bottom: 20px;
}
.notify-button >>> .ant-btn {
  width: 100%;
  height: 40px;
}
</style>
