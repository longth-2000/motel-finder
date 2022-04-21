import VALIDATION_MESSAGE from "../constants/validation"
import { mapGetters } from 'vuex';
import VueJwtDecode from "vue-jwt-decode";

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
    methods: {
        handleAfterSign(data) {
            let { accessToken, refreshToken } = data;
            let decodeToken = VueJwtDecode.decode(accessToken);
            document.cookie = `accessToken=${accessToken}`;
            localStorage.setItem("refreshToken", refreshToken);
            const { role } = decodeToken;
            let endpoint =
                role === 3 ? "/" : role === 2 ? "/ho-so" : "/admin/manage";
            console.log(endpoint)
            window.location.href = endpoint;
        }
    }
}
export default signMixin