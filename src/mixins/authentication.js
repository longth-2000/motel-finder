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
            let user = localStorage.getItem('user');
            this.isLogin = user ? true : false;
        },
        isLogout() {
            cookie.deleteCookie('accessToken');
            localStorage.removeItem("user");
            window.location.href = "/"
        },
    },
}
export default authenticationMixin