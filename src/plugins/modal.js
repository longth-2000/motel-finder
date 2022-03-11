export default {
    install(Vue) {
        Vue.mixin({
            data() {
                return {
                    isVisible: {
                        login: false,
                        register: false,
                        post: false
                    }
                }
            },
            methods: {
                showModal(action) {
                    this.isVisible[action] = true
                }
            }
        })
    }
}