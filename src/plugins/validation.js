export default {
    install(Vue) {
        Vue.mixin({
            methods: {
                checkValidation(check, validation) {
                    check.isSubmit = true;
                    validation.$touch();
                    if (validation.$invalid) return false;
                    else return true
                },
                redirectTo(nextpoint) {
                    this.closeModal(this.name);
                    this.showModal(nextpoint)
                }
            }
        })
    }
}