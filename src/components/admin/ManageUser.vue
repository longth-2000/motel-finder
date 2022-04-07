<template>
  <div>
    <div class="overview-boxes">
      <div class="box">
        <div class="right-side">
          <div class="box-topic">Người thuê trọ</div>
          <div class="number">40,876</div>
          <div class="indicator">
            <i class="bx bx-up-arrow-alt"></i>
            <span class="text">Up from yesterday</span>
          </div>
        </div>
        <i class="bx bx-cart-alt cart">
          <font-awesome-icon class="icon-static" icon="fa-solid fa-user" />
        </i>
      </div>
      <div class="box">
        <div class="right-side">
          <div class="box-topic">Người cho thuê</div>
          <div class="number">38,876</div>
          <div class="indicator">
            <i class="bx bx-up-arrow-alt"></i>
            <span class="text">Up from yesterday</span>
          </div>
        </div>
        <i class="bx bxs-cart-add cart two">
          <font-awesome-icon class="icon-static" icon="fa-solid fa-user" />
        </i>
      </div>
      <div class="box">
        <div class="right-side">
          <h3 class="box-topic">Đã phê duyệt</h3>
          <div class="number">$12,876</div>
          <div class="indicator">
            <i class="bx bx-up-arrow-alt"></i>
            <span class="text">Up from yesterday</span>
          </div>
        </div>
        <i class="bx bx-cart cart three">
          <font-awesome-icon
            class="icon-static"
            icon="fa-solid fa-user-check"
          />
        </i>
      </div>
      <div class="box">
        <div class="right-side">
          <div class="box-topic">Chưa phê duyệt</div>
          <div class="number">11,086</div>
          <div class="indicator">
            <i class="bx bx-down-arrow-alt down"></i>
            <span class="text">Down From Today</span>
          </div>
        </div>
        <i class="bx bxs-cart-download cart four">
          <font-awesome-icon
            class="icon-static"
            icon="fa-solid fa-user-minus"
          />
        </i>
      </div>
    </div>

    <div class="sales-boxes">
      <div class="recent-sales box">
        <div class="title">Người cho thuê trọ</div>
        <div class="sales-details">
          <table class="table">
            <thead>
              <tr>
                <th><a-checkbox></a-checkbox></th>
                <th>Tên</th>
                <th>Giới tính</th>
                <th>Địa chỉ</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a-checkbox></a-checkbox></td>
                <td>Trương Hoàng Long</td>
                <td><a-tag color="green">Nam</a-tag></td>
                <td>Số nhà 22, phường Yết Kiêu, quận Hà Đông</td>
                <td>john@example.com</td>
                <td>12355555555555</td>
                <td>
                  <a-button type="danger">Từ chối</a-button
                  ><a-button type="primary">Đồng ý</a-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div >
          <!-- <a-pagination
            v-model="current"
            :total="50"
            @change="getArticle"
            style="float: right"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.icon-static {
  font-size: 30px;
}
</style>
