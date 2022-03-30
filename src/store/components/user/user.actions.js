import { RepositoryFactory } from "../../../repository/factory";
export const actions = {
    async getUserInfor({ commit }) {
        const { data } = await RepositoryFactory.get('user').getUser();
        commit('GET_USER', data)
        return data;
    }
}