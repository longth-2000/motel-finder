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
                detailedPost: {
                    title: "",
                    content: ""
                },
                address: {},
                area: null,
                price: {},
                public_location: "",
                sameOwner: true,
                bedRoom: "",
                bathRoom: true,
                kitchen: true,
                aircondition: true,
                balcony: true,

            }
        }
    },

    validations: {
        formValidation: {
            type: { required },
            address: {
                district: { required },
                ward: { required },
                detail: { required },
            },
            area: { required, decimal },
            price: { required },
            public_location: { required },
            bedRoom: { required, numeric },
            detailedPost: {
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