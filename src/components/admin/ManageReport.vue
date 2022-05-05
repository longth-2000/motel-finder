<template>
  <div>
    <div class="sales-boxes">
      <div class="recent-sales box">
        <div class="title">
           Quản lí report
        </div>
        <div class="sales-details">
          <table class="table">
            <thead>
              <tr>
                <th><a-checkbox></a-checkbox></th>
                <th>Số hiệu bài đăng</th>
                <th>Tên người report</th>
                <th>Tiêu chí report</th>
                <th>Nội dung report</th>
                 <th>Ngày tạo</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a-checkbox></a-checkbox></td>
                <td>nfdkbnlfdkb</td>
                <td>vbsjdbvkjsdnbvsdv</td>
                <td>sdvbjkdsbvkjds</td>
                <td>ndsvbklsdnvlknsdlvknsdv</td>
                <td>bvjhdsbvkjsdbv</td>
                <td class="action-approve">
                  <a-button
                    type="danger"
                    class="button-reject"
                    @click.prevent="deleteTypeMotel(type.id)"
                    >Xóa</a-button
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="pagination"></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
