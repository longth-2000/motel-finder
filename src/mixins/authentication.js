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
            var accessToken = this.getCookie("accessToken");
            this.isLogin = accessToken === "" ? false : true;
        },
        getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(";");
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == " ") {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        deleteCookie(name) {
            document.cookie =
                name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        },
        isLogout() {
            this.deleteCookie('accessToken');
            window.location.href = "/"
        },
    },
}
export default authenticationMixin