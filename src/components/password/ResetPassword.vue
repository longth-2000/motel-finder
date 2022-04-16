<template>
  <div class="reset-password">
    <div class="reset-password-title">Thay đổi mật khẩu</div>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
        <label>Mật khẩu mới</label>
        <a-input
          type="password"
          v-model="newPass"
          :class="{
            'is-invalid-form': check.isSubmit && this.$v.newPass.$error,
          }"
        />
        <div
          v-if="check.isSubmit && !this.$v.newPass.required"
          class="condition"
        >
          {{ validation_message.require }}
        </div>
        <div
          v-if="check.isSubmit && !this.$v.newPass.minLength"
          class="condition"
        >
          Min la 6
        </div>
        <div
          v-if="check.isSubmit && !this.$v.newPass.alphaNum"
          class="condition"
        >
          {{ validation_message.alphaNum }}
        </div>
      </a-form-item>
      <a-form-item>
        <label>Nhập lại mật khẩu</label>
        <a-input
          type="password"
          v-model="confirmPass"
          :class="{
            'is-invalid-form': check.isSubmit && this.$v.confirmPass.$error,
          }"
        />
        <div
          v-if="check.isSubmit && !$v.confirmPass.required"
          class="condition"
        >
          {{ validation_message.require }}
        </div>
        <div
          v-if="confirmPass && !$v.confirmPass.sameAsPassword"
          class="condition"
        >
          {{ validation_message.confirmPassword }}
        </div>
      </a-form-item>
      <a-form-item>
        <a-button
          type="danger"
          html-type="submit"
          style="width: 100%; height: 50px"
          @click="resetPassword()"
        >
          Thay đổi
        </a-button>
      </a-form-item>
    </a-form>
    <div class="reset-password-notify">
      <span style="font-weight: bold; color: red; font-size: 14px"
        >Chú ý :</span
      >
      Mật khẩu phải có độ dài từ 6 ký tự, bao gồm ít nhất 1 ký tự viết hoa và 1
      chữ số.
    </div>
  </div>
</template>
<script>
import VALIDATION_MESSAGE from "../../constants/validation";
import {
  required,
  minLength,
  sameAs,
  alphaNum,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      newPass: "",
      confirmPass: "",
      check: {
        isSubmit: false,
      },
      validation_message: VALIDATION_MESSAGE,
    };
  },
  validations: {
    newPass: {
      required,
      minLength: minLength(6),
      alphaNum,
    },
    confirmPass: {
      required,
      sameAsPassword: sameAs("newPass"),
    },
  },
  methods: {
    resetPassword() {
      let check = this.checkValidation(this.check, this.$v);
      if (!check) return;
    },
  },
};
</script>
<style scoped>
.reset-password {
  width: 500px;
  margin: 50px auto;
  border: 1px solid rgb(0 0 0 / 0);
  padding: 50px 20px;
  box-shadow: 0 1px 4px rgb(0 0 0 / 15%);
}
.reset-password-title {
  font-weight: bold;
  text-align: center;
  font-family: itinial;
  font-size: 18px;
  margin-top: -15px;
}
.reset-password-notify {
  font-size: 13px;
  color: black;
}
::v-deep .ant-input {
  height: 50px;
}
.is-invalid-form {
  border-color: red;
  box-shadow: none;
}
</style>
