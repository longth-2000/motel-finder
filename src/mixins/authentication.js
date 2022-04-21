import cookie from "../helper/cookie"
import { subject } from "@casl/ability";

var authenticationMixin = {
    data() {
        return {
            isLogin: false,
        };
    },
    created() {
        this.logged();
    },
    computed: {
        setCheckPermisson() {
            return this.$can("create", subject("User", this.user));
        },
    },
    methods: {
        logged() {
            this.isLogin = this.checkLogged();
        },
        isLogout() {
            cookie.deleteCookie('accessToken');
            window.location.href = "/"
        },
        createPost() {
            this.$router.push({ path: '/dang-tin' });
            this.closeNav()
        },
    },
}
export default authenticationMixin