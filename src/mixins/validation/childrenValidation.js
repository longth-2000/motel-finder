import VALIDATION_MESSAGE from "../../constants/validation"
var childrenValidationMixin = {
    props: {
        validation: {
            default: () => ({}),
            type: Object,
        },
        title: {
            type: String,
        },
        isSubmit: {
            type: Boolean,
        },
        value: {
            type: Object
        }
    },
    data() {
        return {
            validation_message: VALIDATION_MESSAGE,
        };
    },
    watch: {
        value() {
            this.$emit("input", this.value)
        }
    }

}
export default childrenValidationMixin