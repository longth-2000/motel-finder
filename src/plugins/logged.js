import VueJwtDecode from "vue-jwt-decode";

export default {
    install(Vue) {
        Vue.mixin({
            methods: {
                checkLogged() {
                    let accessToken = localStorage.getItem('accessToken')
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