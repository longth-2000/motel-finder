import VueJwtDecode from "vue-jwt-decode";
import cookie from "../helper/cookie"

export default {
    install(Vue) {
        Vue.mixin({
            methods: {
                checkLogged() {
                    let accessToken = cookie.getCookie('accessToken')
                    if (!accessToken) {
                        return false
                    } else {
                        const { id, email, role } = VueJwtDecode.decode(accessToken);
                        return {
                            id,
                            email,
                            role
                        }
                    }
                }
            }
        })
    }
}