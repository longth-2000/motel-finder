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
            var accessToken = cookie.getCookie("accessToken");
            this.isLogin = accessToken === "" ? false : true;
        },
        isLogout() {
            cookie.deleteCookie('accessToken');
            window.location.href = "/"
        },
    },
}
export default authenticationMixin