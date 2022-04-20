<template>
  <div>
    <div class="change-title">{{ title }}</div>
    <div class="change-content">
      <table class="table table-borderless">
        <tbody>
          <tr>
            <td class="label">
              Email 
            </td>
            <td class="form">
               {{this.checkLogged().email}}
            </td>
          </tr>
          <tr>
            <td class="label">
              Số điện thoại <span class="require-sign">(*)</span>
            </td>
            <td class="form">
              <a-input
                placeholder="Nhập SĐT của bạn"
                v-model="value.phoneNumber"
                :class="{
                  'is-invalid-form': isSubmit && validation.phoneNumber.$error,
                }"
              />
              <div
                v-if="isSubmit && !validation.phoneNumber.required"
                class="condition"
              >
                {{ validation_message.require }}
              </div>
              <div
                v-if="isSubmit && !validation.phoneNumber.numeric"
                class="condition"
              >
                {{ validation_message.numeric }}
              </div>
              
            </td>
          </tr>
          <tr>
            <td class="label">
              Căn cước công dân <span class="require-sign">(*)</span>
            </td>
            <td class="form">
              <a-input
                placeholder="Nhập CCCD của bạn"
                v-model="value.CCCD"
                :class="{
                  'is-invalid-form': isSubmit && validation.CCCD.$error,
                }"
              />
              <div
                v-if="isSubmit && !validation.CCCD.required"
                class="condition"
              >
                {{ validation_message.require }}
              </div>
              <div
                v-if="isSubmit && !validation.CCCD.numeric"
                class="condition"
              >
                {{ validation_message.numeric }}
              </div>
            </td>
          </tr>
          <tr>
            <td class="label">Zalo (Nếu có)</td>
            <td class="form">
              <a-input v-model="value.zalo"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import childrenValidation from "../../../mixins/validation/childrenValidation";

export default {
  mixins: [childrenValidation],
  data() {
    return{
     
    }
  }
};
</script>
<style scoped></style>
