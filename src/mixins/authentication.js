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
            localStorage.removeItem('accessToken');
            window.location.href = "/"
        },
        createPost() {
            this.$router.push({ path: '/dang-tin' });
            this.closeNav()
        },
    },
}
export default authenticationMixin