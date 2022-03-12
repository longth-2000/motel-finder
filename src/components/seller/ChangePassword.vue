<template>
  <div>
    <div id="title-component-profile">
      <span>THAY ĐỔI MẬT KHẨU</span>
    </div>
    <div id="content">
      <form action="">
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td class="label">Mật khẩu cũ</td>
              <td class="form">
                <a-input />
              </td>
            </tr>
            <tr>
              <td class="label">Mật khẩu mới</td>
              <td class="form">
                <a-input />
              </td>
            </tr>
            <tr>
              <td class="label">Nhắc lại mật khẩu</td>
              <td class="form">
                <a-input />
              </td>
            </tr>
            <tr>
              <td class="label"></td>
              <td class="form">
                <a-button type="primary" > Lưu </a-button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div>
</template>
<style scoped>
#title {
  width: 100%;
  background: #055699;
  height: 30px;
  color: white;
  font-weight: bold;
  padding-left: 10px;
  line-height: 30px;
  font-family: Tahoma;
  font-size: 12px;
}
#content {
  margin-top: 20px;
}
.table {
  margin-left: 20px;
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
