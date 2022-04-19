<template>
  <div>
    <div class="register-title modal-title">
      <h3>Đăng kí tài khoản</h3>
    </div>
    <div class="register-form">
      <a-form>
        <a-form-item>
          <a-input
            :class="{
              'is-invalid-form': check.isSubmit && $v.user.email.$error,
            }"
            v-model="user.email"
            placeholder="Email"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
          <p v-if="check.isSubmit && !$v.user.email.required" class="condition">
            {{ validationMessage.require }}
          </p>
          <p v-if="check.isSubmit && !$v.user.email.email" class="condition">
            {{ validationMessage.email }}
          </p>
        </a-form-item>
        <a-form-item style="margin-bottom: 20px">
          <div class="input-form-register" style="display: flex; justify-content:space-between">
            <div class="input-form-item" style="width:49%">
              <a-input
                type="password"
                placeholder="Mật khẩu"
                v-model="user.password"
                :class="{
                  'is-invalid-form': check.isSubmit && $v.user.password.$error,
                }"
                
              >
                <a-icon
                  slot="prefix"
                  type="lock"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
              <p
                v-if="check.isSubmit && !$v.user.password.required"
                class="condition"
              >
                {{ validationMessage.require }}
              </p>
              <p
                v-if="check.isSubmit && !$v.user.password.minLength"
                class="condition"
              >
                Mật khẩu phải có ít nhất 6 kí tự
              </p>
              <p
                v-if="check.isSubmit && !$v.user.password.alphaNum"
                class="condition"
              >
                Mật khẩu chỉ bao gồm chữ cái và số
              </p>
            </div>
            <div class="input-form-item" style="width:49%">
              <a-input
                type="password"
                placeholder="Nhập lại mật khẩu"
                
                :class="{
                  'is-invalid-form':
                    check.isSubmit && $v.user.confirmPassword.$error,
                }"
                v-model="user.confirmPassword"
              >
                <a-icon
                  slot="prefix"
                  type="lock"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
              <p
                v-if="check.isSubmit && !$v.user.confirmPassword.required"
                class="condition"
              >
                {{ validationMessage.require }}
              </p>
              <p
                v-if="
                  user.confirmPassword &&
                  !$v.user.confirmPassword.sameAsPassword
                "
                class="condition"
              >
                {{ validationMessage.confirmPassword }}
              </p>
            </div>
          </div>
        </a-form-item>
        <a-form-item>
          <label for="">Bạn là</label>
          <div>
            <a-radio-group v-model="user.role">
              <a-radio :value="2"> Chủ trọ </a-radio>
              <a-radio :value="3"> Người thuê trọ </a-radio>
            </a-radio-group>
          </div>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            style="width: 100%; height: 38px"
            @click="handleSignup()"
          >
            Đăng kí tài khoản
          </a-button>
        </a-form-item>
      </a-form>
      <div class="register-contact" style="margin-bottom: 30px">
        <p style="margin-bottom: 5px; color: black">
          <span style="font-weight: bold">Chú ý:</span> Thông tin Tên đăng nhập,
          email không thể thay đổi sau khi đăng ký.
        </p>
        <p style="margin: 0; color: black">
          Để được trợ giúp, vui lòng liên hệ tổng đài CSKH
          <span style="color: red">1234556667</span> hoặc email
          <span style="color: red"> hotro@batdongsan.com.vn</span>
        </p>
      </div>
      <div
        class="register-login"
        style="text-align: center; margin-bottom: 20px"
      >
        <span
          >Đã là có tài khoản?
          <span style="color: red; cursor: pointer" @click="redirectTo('login')"
            >Đăng nhập</span
          >
          <a-modal v-model="isVisible.login" :footer="null">
            <Login />
          </a-modal>
          tại đây
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { RepositoryFactory } from "../repository/factory";
import signMixin from "../mixins/sign";
import {
  required,
  sameAs,
  minLength,
  alphaNum,
  email,
} from "vuelidate/lib/validators";

export default {
  components: {
    Login: () => import("./Login.vue"),
  },
  mixins: [signMixin],
  data() {
    return {
      name: "register",
      user: {
        role: 2,
      },
    };
  },
  validations: {
    user: {
      email: { required, email },
      password: { required, minLength: minLength(6), alphaNum },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
    },
  },

  methods: {
    async handleSignup() {
      let validation = this.checkValidation(this.check, this.$v);
      console.log(validation);
      if (!validation) return;
      else { 
       try {
          const { data } = await RepositoryFactory.get("user").register({
            email: this.user.email,
            password: this.user.password,
            role: this.user.role,
          });
          console.log(data);
          this.handleAfterSign(data.data);
        } catch (error) {
          console.log(error.response);
          this.openNotification("Error", error.response.data.message, "error");
        }
     } 
    },
  },
};
</script>
<style>
.register-form {
  margin-top: 30px;
}
.register-form .is-invalid-form .ant-input {
  border-color: red;
  box-shadow: none;
}
.register-form .condition {
  margin-top: -10px;
  margin-bottom: 0;
}
@media only screen and (max-width: 576px) {
  .input-form-register {
    display: block !important;
  }
  .input-form-item {
    width: 100% !important;
  }
}
</style>
