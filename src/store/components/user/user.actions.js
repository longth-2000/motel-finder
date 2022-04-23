import { RepositoryFactory } from "../../../repository/factory";
import cookie from "../../../helper/cookie"
import VueJwtDecode from "vue-jwt-decode";

export const actions = {
    async getUserInfor({ commit }) {
        let accessToken = cookie.getCookie('accessToken')
        if (accessToken) {
            const { id } = VueJwtDecode.decode(accessToken);
            const { data } = await RepositoryFactory.get('user').getUser(id);
            commit('GET_USER', data)
            return data;
        }
    },
}