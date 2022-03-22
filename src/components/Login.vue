<template>
  <div>
    <div class="login-title">
      <h3>Đăng nhập</h3>
    </div>
    <div class="login-form">
      <a-form id="components-form-demo-normal-login" class="login-form">
        <a-form-item>
          <a-input
            v-model="user.email"
            placeholder="Email"
            class="is-invalid-forms"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
          <div v-if="isSubmit && !$v.user.email.required" class="condition">
            hvdhsvjdhsvkjdhsvhdsklv
          </div>
        </a-form-item>
        <a-form-item style="margin-bottom: 10px">
          <a-input
            type="password"
            placeholder="Password"
            v-model="user.password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox> Nhớ tài khoản </a-checkbox>
          <router-link
            to=""
            class="router-link"
            style="float: right; color: red"
            >Quên mật khẩu</router-link
          >
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            style="width: 100%; height: 38px"
            @click="handleSubmit()"
          >
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="login-seperate">Hoặc</div>
    <div class="login-Oauth">
      <div class="login-google">
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
    </div>
    <div class="login-register" style="text-align: center">
      Chưa có tài khoản?
      <router-link to="" class="router-link" style="color: red"
        >Đăng kí</router-link
      >
      tại đây
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import { RepositoryFactory } from "../repository/factory";
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      user: {},
      isSubmit: false,
    };
  },
  methods: {
    ...mapMutations("user", ["LOG_IN"]),
    async handleSubmit() {
      try {
        const { data } = await RepositoryFactory.get("user").login(this.user);
        console.log(data.message);
        this.$router.push("/dang-tin");
      } catch (error) {
        console.log(error.response);
        this.openNotification('Error', error.response.data.message, 'error')
      }
    },
  },
  computed: {
    ...mapGetters("user", ["isLogged"]),
  },
  validations: {
    user: {
      email: { required },
      password: { required },
    },
  },
};
</script>
<style scoped>
.login-title h3 {
  font-size: 18px;
}
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
.is-invalid-forms {
  border-color: red;
  box-shadow: none;
}
.condition {
  margin-top: -10px;
}
</style>
