<template>
  <div>
    <div class="password-title modal-title">
      <h3>Khôi phục mật khẩu</h3>
    </div>
    <div class="password-form">
      <a-form>
        <a-form-item>
          <a-input
            placeholder="Nhập email của bạn"
            :class="{
              'is-invalid-form': check.isSubmit && $v.email.$error,
            }"
            v-model="email"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
          <p
            v-if="check.isSubmit && !$v.email.required"
            class="condition"
          >
            {{ validation_message.require }}
          </p>
          <p
            v-if="check.isSubmit && !$v.email.email"
            class="condition"
          >
            {{ validation_message.email }}
          </p>
        </a-form-item>
        <a-form-item>
          <a-button
            type="danger"
            style="width: 100%; height: 40px; border-radius: 5px"
            @click="handleForgotPassword()"
          >
            Lấy lại mật khẩu
          </a-button>
          <a-modal v-model="isVisible.notifyPassword" :footer="null">
            <Notification  />
          </a-modal>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
import VALIDATION_MESSAGE from "../../constants/validation";
import { mapGetters } from "vuex";
import { RepositoryFactory } from "../../repository/factory";

export default {
  components: {
    Notification: () => import("./NotificationPassword.vue"),
  },
  computed: {
    ...mapGetters("modal", ["isVisible"]),
  },
  data() {
    return {
      email: "",
      check: {
        isSubmit: false,
      },
      name: "changePassword",
      validation_message: VALIDATION_MESSAGE,
    };
  },
  validations: {
    email: { required, email },
  },
  methods: {
    async handleForgotPassword() {
      let check = this.checkValidation(this.check, this.$v);
      if (!check) return;
      try {
        const { data } = await RepositoryFactory.get('app').requestEmail(this.email)
        console.log(data)
        this.redirectTo("notifyPassword");
      } catch (error) {
        this.openNotification('Cảnh báo', 'Vui lòng chờ 5 phút trước khi request lại', 'error')
      }
        
    },
  },
};
</script>
<style scoped>
.password-title {
  margin-bottom: 20px;
}
::v-deep .ant-input {
  padding-top: 25px;
  padding-bottom: 25px;
}
::v-deep .is-invalid-form .ant-input {
  border-color: red;
  box-shadow: none;
}
::v-deep .condition {
  margin-top: -10px;
  margin-bottom: 0;
}
</style>
