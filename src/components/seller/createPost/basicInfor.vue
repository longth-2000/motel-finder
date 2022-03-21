<template>
  <div class="information-post">
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <div class="content">
      <div id="type" class="content-items">
        <p class="label">
          Loại phòng trọ <span class="require-sign">(*)</span>
        </p>
        <a-select
          v-model="value.type.motel"
          placeholder="Chọn loại phòng trọ"
          style="width: 100%"
          :class="{ 'is-invalid-form': isSubmit && validation.type.$error }"
        >
          <a-select-option
            v-for="(type, index) in types"
            :key="index"
            :value="type"
          >
            {{ type }}
          </a-select-option>
        </a-select>
        <div v-if="isSubmit && !validation.type.required" class="condition">
          {{ validation_message.require }}
        </div>
      </div>
      <div id="address" class="content-items">
        <p class="label">Địa chỉ <span class="require-sign">(*)</span></p>
        <div class="address-box">
          <div class="address">
            <a-select
              class="address-component"
              @change="getWard"
              placeholder="Quận/huyện"
              v-model="value.address.district"
              :class="{
                'is-invalid-form':
                  isSubmit && validation.address.district.$error,
              }"
            >
              <a-select-option
                v-for="district in districts"
                :key="district.code"
                :value="district.name"
              >
                {{ district.name }}
              </a-select-option>
            </a-select>
            <div
              v-if="isSubmit && !validation.address.district.required"
              class="condition"
            >
              {{ validation_message.require }}
            </div>
          </div>
          <div class="empty-space"></div>
          <div class="address">
            <a-select
              class="address-component"
              placeholder="Phường xã"
              v-model="value.address.ward"
              :class="{
                'is-invalid-form': isSubmit && validation.address.ward.$error,
              }"
            >
              <a-select-option
                v-for="ward in wards"
                :key="ward.code"
                :value="ward.name"
              >
                {{ ward.name }}
              </a-select-option>
            </a-select>
            <div
              v-if="isSubmit && !validation.address.ward.required"
              class="condition"
            >
              {{ validation_message.require }}
            </div>
          </div>
          <div class="empty-space"></div>
          <div class="address">
            <a-input
              class="address-component"
              placeholder="Địa chỉ cụ thể"
              v-model="value.address.detail"
              :class="{
                'is-invalid-form': isSubmit && validation.address.detail.$error,
              }"
            />
            <div
              v-if="isSubmit && !validation.address.detail.required"
              class="condition"
            >
              {{ validation_message.require }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import addressMixin from "../../../mixins/address";
import childrenValidationMixin from "../../../mixins/validation/childrenValidation";
export default {
  mixins: [addressMixin, childrenValidationMixin],
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
.address {
  margin-bottom: 20px;
  width: 100%;
}
.address-component {
  width: 100%;
}

@media only screen and (min-width: 1200px) {
  .address-box {
    display: flex;
  }
  .address {
    width: 32%;
  }
  .empty-space {
    width: 2%;
  }
  .address-component {
    width: 100%;
  }
}
</style>
