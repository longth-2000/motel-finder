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

</style>