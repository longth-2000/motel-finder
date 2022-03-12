<template>
  <div>
    <div id="title-component-profile">
      <span>TIN ĐÃ ĐĂNG</span>
    </div>
    <div id="filter-post">
      <div style="float: right; display: flex; margin-right: 25px">
        <div class="action" id="search">
          <a-input placeholder="Tìm theo mã tin, tiêu đề">
            <a-tooltip slot="suffix" title="Tìm kiếm theo tiêu đề">
              <a-icon type="search" />
            </a-tooltip>
          </a-input>
        </div>
        <div class="action action-button" id="filter">
          <div><font-awesome-icon icon="fa-solid fa-filter" /></div>
          <div><span>Lọc</span></div>
        </div>
        <div class="action action-button" id="sort">
          <font-awesome-icon icon="fa-solid fa-sort" />
          <span>Sắp xếp</span>
        </div>
      </div>
    </div>
    <div id="content">
      <table class="table table-hover">
        <thead>
          <tr>
            <th><a-checkbox></a-checkbox></th>
            <th>Tiêu đề</th>
            <th>Trạng thái phê duyệt</th>
            <th>Ngày đăng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in [1, 2, 3, 4, 5, 6, 7, 8]" :key="index">
            <td><a-checkbox></a-checkbox></td>
            <td>bvgkjdsbvkjdsbvibdskbvdksbvdsvdsvbsvjkbdsvkjbsdvkjbsd</td>
            <td><a-tag color="#87d068"> Đã duyệt </a-tag></td>
            <td>30/5/2000</td>
            <td>
              <a-button type="danger"> Xóa </a-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
#filter-post {
  width: 100%;
  height: 80px;
}
thead th {
  font-family: Roboto;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
}

.table > :not(:first-child) {
  border-top: 1px solid currentColor;
}

tbody td {
  font-family: Roboto;
  font-size: 13px;
  height: 60px;
  line-height: 60px;
}
.action {
  margin: 20px 5px;
}
.action-button {
  border: 1px solid #ccc;
  height: 30px;
  margin-top: 21px;
  padding: 0 10px;
  border-radius: 4px;
  font-family: Calibri;
  font-weight: bold;
  display: flex;
  align-items: center;
}
.action-button:hover{
    cursor: pointer;
}
.action-button span {
  margin-left: 10px;
}
</style>
