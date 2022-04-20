import cookie from "../helper/cookie"
var authenticationMixin = {
    data() {
        return {
            isLogin: false,
        };
    },
    created() {
        this.logged();
    },
    methods: {
        logged() {
            this.isLogin = this.checkLogged();
        },
        isLogout() {
            cookie.deleteCookie('accessToken');
            window.location.href = "/"
        },
    },
}
export default authenticationMixin