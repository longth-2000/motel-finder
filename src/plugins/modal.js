import { mapMutations } from "vuex";
export default {
    install(Vue) {
        Vue.mixin({
            methods: {
                ...mapMutations("modal", ["showModal", "closeModal"]),
            }
        })
    }
}