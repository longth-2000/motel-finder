<template>
  <div style="background:white; height:100%">
    <div id="title-component-profile">
      <span>THAY ĐỔI MẬT KHẨU</span>
    </div>
    <div id="content" >
      <form action="">
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td class="label">Mật khẩu mới</td>
              <td class="form">
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
              </td>
            </tr>
            <tr>
              <td class="label">Nhắc lại mật khẩu</td>
              <td class="form">
                <a-input
                  type="password"
                  v-model="confirmPass"
                  :class="{
                    'is-invalid-form':
                      check.isSubmit && this.$v.confirmPass.$error,
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
              </td>
            </tr>
            <tr>
              <td class="label"></td>
              <td class="form">
                <a-button type="primary" @click="changePassword()">
                  Lưu
                </a-button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div>
</template>
<script>
import {
  required,
  minLength,
  sameAs,
  alphaNum,
} from "vuelidate/lib/validators";
import VALIDATION_MESSAGE from "../../constants/validation";
import { RepositoryFactory } from "../../repository/factory";

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
    async changePassword() {
      let check = this.checkValidation(this.check, this.$v);
      if (!check) return;
      let { id } = this.checkLogged();
      try {
        const { data } = await RepositoryFactory.get("user").updatePassword({
          id,
          password: this.newPass,
        });
        this.openNotification("Thành công", data.message, "success");
      } catch (error) {
        console.log(error.response);
      }
    },
  },
};
</script>
<style scoped>
#title {
  width: 100%;
  background: #055699;
  height: 30px;
  color: white;
  font-weight: bold;
  padding-left: 10px;
  line-height: 30px;
  font-family: Tahoma;
  font-size: 12px;
}
#content {
  margin-top: 20px;
}
.is-invalid-form {
  border-color: red;
  box-shadow: none;
}
</style>
