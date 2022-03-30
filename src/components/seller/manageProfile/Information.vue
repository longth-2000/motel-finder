<template>
  <div>
    <div class="change-title">{{ title }}</div>
    <div class="change-content">
      <table class="table table-borderless">
        <tbody>
          <tr>
            <td class="label">
              Họ và tên <span class="require-sign">(*)</span>
            </td>
            <td class="form">
              <a-input
                placeholder="Nhập tên của bạn"
                v-model="value.name"
                :class="{
                  'is-invalid-form': isSubmit && validation.name.$error,
                }"
                
              />
              <div
                v-if="isSubmit && !validation.name.required"
                class="condition"
              >
                {{ validation_message.require }}
              </div>
            </td>
          </tr>
          <tr>
            <td class="label">
              Ngày sinh <span class="require-sign">(*)</span>
            </td>
            <td class="form">
              <a-date-picker
                v-model="value.birthDay"
                :class="{
                  'is-invalid-form': isSubmit && validation.birthDay.$error,
                }"
              />
              <div
                v-if="isSubmit && !validation.birthDay.required"
                class="condition"
              >
                {{ validation_message.require }}
              </div>
            </td>
          </tr>
          <tr>
            <td class="label">
              Giới tính <span class="require-sign">(*)</span>
            </td>
            <td class="form">
              <a-radio-group v-model="value.sex">
                <a-radio :value="true">Nam </a-radio>
                <a-radio :value="false">Nữ</a-radio>
              </a-radio-group>
            </td>
          </tr>
          <tr>
            <td class="label">Địa chỉ <span class="require-sign">(*)</span></td>
            <td class="form">
              <div style="display: flex; padding-right: 20px">
                <div>
                  <a-select
                    class="address"
                    placeholder="Quận/huyện"
                    style="width: 200px"
                    @change="getWard"
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
                <div>
                  <a-select
                    class="address"
                    placeholder="Phường xã"
                    style="width: 200px"
                    v-model="value.address.ward"
                    :class="{
                      'is-invalid-form':
                        isSubmit && validation.address.ward.$error,
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
                <div>
                  <a-input
                    class="address"
                    placeholder="Địa chỉ cụ thể"
                    v-model="value.address.detail"
                    :class="{
                      'is-invalid-form':
                        isSubmit && validation.address.detail.$error,
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import adddressMixin from "../../../mixins/address";
import childrenValidation from "../../../mixins/validation/childrenValidation";

export default {
  props: {
    title: {
      default: "",
      type: String,
    }
  },
  mixins: [adddressMixin, childrenValidation],
  data() {
    return {
      plainOptions: ["Nam", "Nữ"],
    };
  },
  computed:{
    getDistrict() {
      return this.value.address.district
    }
  },
  watch:{
    getDistrict(newVal, oldVal) {
      if(oldVal !== undefined) {
        this.value.address = {
          district:newVal
        }
      }
    }
  }
  
  
};
</script>
<style scoped>
.address {
  margin-right: 20px;
}
</style>
