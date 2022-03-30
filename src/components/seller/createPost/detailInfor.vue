<template>
  <div class="information-post">
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <div class="content">
      <div id="area" class="content-items">
        <p class="label">Diện tích <span class="require-sign">(*)</span></p>
        <a-input
          placeholder="Nhập diện tích (m²)"
          v-model="value.area"
          :class="{ 'is-invalid-form': isSubmit && validation.area.$error }"
        ></a-input>
        <div v-if="isSubmit && !validation.area.required" class="condition">
          {{ validation_message.require }}
        </div>
        <div v-if="isSubmit && !validation.area.decimal" class="condition">
          {{ validation_message.numeric }}
        </div>
      </div>
      <div id="price" class="content-items">
        <p class="label">Mức giá <span class="require-sign">(*)</span></p>
        <div>
          <a-input
            class="price"
            placeholder="Nhập giá"
            v-model="value.price.quantity"
            :class="{ 'is-invalid-form': isSubmit && validation.price.$error }"
          ></a-input>
          <div v-if="isSubmit && !validation.price.required" class="condition">
            {{ validation_message.require }}
          </div>
         
          <div id="price-condition"></div>
          <a-select
            class="price"
            id="time-price"
            default-value="Tháng"
            style="width: 34%; margin-top:10px"
            v-model="value.price.unit"
          >
            <a-select-option value="month">Tháng</a-select-option>
            <a-select-option value="quarter">Quý</a-select-option>
            <a-select-option value="year">Năm</a-select-option>
          </a-select>
        </div>
      </div>
      <div id="public-place" class="content-items">
        <p class="label">
          Địa điểm công cộng gần phòng trọ <span class="require-sign">(*)</span>
        </p>
        <a-input
          placeholder="Nhập các địa điểm công cộng gần nhà trọ"
          v-model="value.public_location"
          :class="{ 'is-invalid-form': isSubmit && validation.public_location.$error }"
        ></a-input>
        <div v-if="isSubmit && !validation.price.required" class="condition">
          {{ validation_message.require }}
        </div>
      </div>
      <div id="owner" class="content-items">
        <p class="label">
          Tình trạng chủ <span class="require-sign">(*)</span>
        </p>
        <a-radio-group v-model="value.sameOwner">
          <a-radio :value="true">Chung chủ</a-radio>
          <a-radio :value="false">Không chung chủ</a-radio>
        </a-radio-group>
      </div>
      <div id="infrastructure" class="content-items">
        <p class="label">
          Cơ sở vật chất <span class="require-sign">(*)</span>
        </p>
        <div>
          <table class="table table-borderless">
            <tbody>
              <tr>
                <th scope="row">Số phòng ngủ</th>
                <td>
                  <a-input-number
                    placeholder="Chon"
                    id="inputNumber"
                    :min="1"
                    v-model="value.bedRoom"
                    :class="{
                      'is-invalid-form':
                        isSubmit && validation.bedRoom.$error,
                    }"
                  />
                  <div
                    v-if="
                      isSubmit && !validation.bedRoom.required
                    "
                    class="condition"
                  >
                    {{ validation_message.require }}
                  </div>
                  <div
                    v-if="isSubmit && !validation.bedRoom.numeric"
                    class="condition"
                  >
                    {{ validation_message.numeric }}
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Phòng tắm</th>
                <td>
                  <a-radio-group v-model="value.bathRoom">
                    <a-radio :value="true">Chung </a-radio>
                    <a-radio :value="false">Khép kín</a-radio>
                  </a-radio-group>
                </td>

              </tr>
              <tr>
                <th scope="row">Phòng bếp</th>
                <td>
                  <a-radio-group v-model="value.kitchen">
                    <a-radio :value="true">Chung </a-radio>
                    <a-radio :value="false">Riêng</a-radio>
                  </a-radio-group>
                </td>
              </tr>
              <tr>
                <th scope="row">Điều hòa</th>
                <td>
                  <a-radio-group v-model="value.aircondition">
                    <a-radio :value="true">Có </a-radio>
                    <a-radio :value="false">Không</a-radio>
                  </a-radio-group>
                </td>
              </tr>
              <tr>
                <th scope="row">Ban công</th>
                <td>
                  <a-radio-group v-model="value.balcony">
                    <a-radio :value="true">Có </a-radio>
                    <a-radio :value="false">Không</a-radio>
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
import childrenValidationMixin from "../../../mixins/validation/childrenValidation";

export default {
  mixins: [childrenValidationMixin],
};
</script>
<style scoped>
#infrastructure table th {
  font-weight: normal;
  font-family: Roboto;
  font-size: 14px;
}
#price {
  position: relative;
}
#price-condition {
  position: absolute;
  top: 65px;
  bottom: 20px;
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
