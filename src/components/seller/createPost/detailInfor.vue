<template>
  <div class="information-post">
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <div class="content">
      <div id="area" class="content-items">
        <p class="label">Diện tích</p>
        <a-input placeholder="Nhập diện tích (m²)"></a-input>
      </div>
      <div id="price" class="content-items">
        <p class="label">Mức giá</p>
        <div>
          <a-input
            class="price"
            placeholder="Nhập giá"
            style="width: 64%"
          ></a-input>
          <a-select
            class="price"
            id="time-price"
            default-value="Tháng"
            style="width: 34%; margin-left: 10px"
          >
            <a-select-option value="month">Tháng</a-select-option>
            <a-select-option value="quarter">Quý</a-select-option>
            <a-select-option value="year">Năm</a-select-option>
          </a-select>
        </div>
      </div>
      <div id="publice-place" class="content-items">
        <p class="label">Địa điểm công cộng gần phòng trọ</p>
        <a-input
          placeholder="Nhập các địa điểm công cộng gần nhà trọ"
        ></a-input>
      </div>
      <div id="owner" class="content-items">
        <p class="label">Tình trạng chủ</p>
        <a-radio-group>
          <a-radio value="true">Chung chủ</a-radio>
          <a-radio value="false">Không chung chủ</a-radio>
        </a-radio-group>
      </div>
      <div id="infrastructure" class="content-items">
        <p class="label">Cơ sở vật chất</p>
        <div>
          <table class="table table-borderless">
            <tbody>
              <tr>
                <th scope="row">Số phòng ngủ</th>
                <td>
                  <a-input-number
                    :default-value="1"
                    id="inputNumber"
                    :min="1"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Phòng tắm</th>
                <td>
                  <a-radio-group>
                    <a-radio value="true">Chung </a-radio>
                    <a-radio value="false">Khép kín</a-radio>
                  </a-radio-group>
                </td>
              </tr>
              <tr>
                <th scope="row">Phòng bếp</th>
                <td>
                  <a-radio-group>
                    <a-radio value="true">Chung </a-radio>
                    <a-radio value="false">Riêng</a-radio>
                  </a-radio-group>
                </td>
              </tr>
              <tr>
                <th scope="row">Điều hòa</th>
                <td>
                  <a-radio-group>
                    <a-radio value="true">Có </a-radio>
                    <a-radio value="false">Không</a-radio>
                  </a-radio-group>
                </td>
              </tr>
              <tr>
                <th scope="row">Ban công</th>
                <td>
                  <a-radio-group>
                    <a-radio value="true">Có </a-radio>
                    <a-radio value="false">Không</a-radio>
                  </a-radio-group>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
#infrastructure table th {
  font-weight: normal;
  font-family: Roboto;
  font-size: 14px;
}
@media only screen and (max-width: 950px) {
  #time-price {
    margin: 10px 0 !important;
  }
  .price {
    width: 100% !important;
  }
}

</style>
