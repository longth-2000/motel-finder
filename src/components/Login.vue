<template>
  <div :class="{ authenticated: isAuthenticated }">
    <div class="login-title modal-title">
      <h3></h3>
    </div>
    <div class="login-form">
      <a-form>
        <a-form-item>
          <a-input
            v-model="user.email"
            placeholder="Email"
            :class="{
              'is-invalid-form': check.isSubmit && $v.user.email.$error,
            }"
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
        <a-form-item style="margin-bottom: 10px">
          <a-input
            type="password"
            placeholder="Password"
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
        </a-form-item>
        <a-form-item>
          <a-checkbox> Nhớ tài khoản </a-checkbox>
          <span
            to=""
            style="float: right; color: red; cursor: pointer"
            @click="redirectTo('changePassword')"
            >Quên mật khẩu</span
          >
          <a-modal v-model="isVisible.changePassword" :footer="null">
            <ChangePassword />
          </a-modal>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            style="width: 100%; height: 38px"
            @click="handleLogin()"
          >
            Đăng nhập
          </a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="login-seperate">Hoặc</div>
    <div class="login-Oauth">
      <div class="login-google" @click="showModal('role')">
        <div class="image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"
            alt=""
          />
        </div>
        <div class="google">
          <h3>Google</h3>
        </div>
      </div>
      <a-modal v-model="isVisible.role" title="Bạn là " @ok="authGoogle">
        <a-radio-group name="radioGroup" v-model="role">
          <a-radio :value="2"> Chủ trọ </a-radio>
          <a-radio :value="3"> Người thuê trọ </a-radio>
        </a-radio-group>
      </a-modal>
    </div>
    <div class="login-register" style="text-align: center">
      Chưa có tài khoản?
      <span style="color: red; cursor: pointer" @click="redirectTo('register')"
        >Đăng ký</span
      >
      <a-modal v-model="isVisible.register" :footer="null">
        <Register />
      </a-modal>
      tại đây
    </div>
  </div>
</template>
<script>
import { RepositoryFactory } from "../repository/factory";
import signMixin from "../mixins/sign";
import { required, email, minLength, alphaNum } from "vuelidate/lib/validators";

export default {
  props: {
    isAuthenticated: {
      default: false,
      type: Boolean,
    },
  },
  mixins: [signMixin],
  components: {
    Register: () => import("./Register.vue"),
    ChangePassword: () => import("./password/ChangePassword.vue"),
  },
  data() {
    return {
      name: "login",
      role: 2,
    };
  },
  validations: {
    user: {
      email: { required, email },
      password: { required, minLength: minLength(6), alphaNum },
    },
  },

  methods: {
    async handleLogin() {
      let validation = this.checkValidation(this.check, this.$v);
      console.log(validation);
      if (!validation) return;
      else {
        try {
          const { data } = await RepositoryFactory.get("user").login(this.user);
          this.handleAfterSign(data.data);
        } catch (error) {
          console.log(error.response);
          this.openNotification("Error", error.response.data.message, "error");
        }
      }
    },
    async authGoogle() {
      const google = await this.$gAuth.signIn();
      console.log(google);
      const { id_token } = (google.xc) ? google.xc : google.wc;
      const { data } = await RepositoryFactory.get("app").loginGoogle(
        id_token,
        this.role
      );
      this.handleAfterSign(data.data) 
    },
  },
};
</script>
<style scoped>
.login-form {
  margin-top: 30px;
}
.login-Oauth {
  width: 100%;
  height: 38px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}
.login-Oauth:hover {
  cursor: pointer;
}
.login-google {
  height: 100%;
  margin: 5px auto;
  width: 100px;
  display: flex;
  justify-content: space-between;
}
.login-google img {
  width: 20px;
  height: 20px;
}
.login-google .google h3 {
  font-size: 18px;
  margin-top: 1px;
}
.login-seperate {
  margin-bottom: 25px;
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  position: relative;
}
.login-seperate::before {
  left: 0;
  content: "";
  position: absolute;
  width: 45%;
  height: 1px;
  top: calc(50% - 0.5px);
  background: darkgray;
}
.login-seperate::after {
  right: 0;
  content: "";
  position: absolute;
  width: 45%;
  height: 1px;
  top: calc(50% - 0.5px);
  background: darkgray;
}
::v-deep .is-invalid-form .ant-input {
  border-color: red;
  box-shadow: none;
}
.condition {
  margin-top: -10px;
  margin-bottom: 0;
}
.authenticated {
  margin: 20px;
  background: white;
  border-radius: 5px;
  padding: 15px;
}
</style>
