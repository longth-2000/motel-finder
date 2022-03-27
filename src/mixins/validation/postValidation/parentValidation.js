import {
    required,
    maxLength,
    minLength,
    decimal,
    numeric,
} from "vuelidate/lib/validators";
var parentValidationMixin = {
    data() {
        return {
            formValidation: {
                article: {
                    title: "",
                    content: "",
                },
                basic: {
                    type: {},
                    address: {},
                },
                detail: {
                    area: "",
                    price: "",
                    public: "",
                    owner: true,
                    infrastructure: {
                        bedroom: "",
                        bathroom: true,
                        kitchen: true,
                        airC: true,
                        balcony: true,
                    },
                },
            }
        }
    },

    validations: {
        formValidation: {
            basic: {
                type: { required },
                address: {
                    district: { required },
                    ward: { required },
                    detail: { required },
                },
            },
            detail: {
                area: { required, decimal },
                price: { required, decimal },
                public: { required },
                infrastructure: {
                    bedroom: { required, numeric },
                },
            },
            article: {
                title: { required, maxLength: maxLength(90), minLength: minLength(30) },
                content: {
                    required,
                    maxLength: maxLength(3000),
                    minLength: minLength(30),
                },
            },
        },
        profileValidation: {
            manageProfile: {
                contact: {},
                information: {}
            },
            chagePassword: {
                oldPassword: {},
                newPassword: {},
                confirmPassword: {}
            }
        }
    },

}
export default parentValidationMixin