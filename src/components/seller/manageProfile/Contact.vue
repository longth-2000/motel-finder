<template>
  <div>
    <div class="change-title">{{title}}</div>
    <div class="change-content">
      <table class="table table-borderless">
        <tbody>
          <tr>
            <td class="label">Số điện thoại</td>
            <td class="form">
              <a-input  />
            </td>
          </tr>
          <tr>
            <td class="label">Căn cước công dân</td>
            <td class="form">
              <a-input  />
            </td>
          </tr>
          <tr>
            <td class="label">Zalo (Nếu có)</td>
            <td class="form">
              <a-input  />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
    props:["title"]
}
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