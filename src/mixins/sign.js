import VALIDATION_MESSAGE from "../constants/validation"
import { mapGetters } from 'vuex';

var signMixin = {
    data() {
        return {
            user: {},
            check: {
                isSubmit: false,
            },
            validationMessage: VALIDATION_MESSAGE
        };

    },
    computed: {
        ...mapGetters('modal', ['isVisible'])
    },
}
export default signMixin