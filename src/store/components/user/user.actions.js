import { RepositoryFactory } from "../../../repository/factory";
export const actions = {
    async getUserInfor({ commit }) {
        const user = localStorage.getItem('user')
        if (user) {
            const { id } = JSON.parse(user)
            const { data } = await RepositoryFactory.get('user').getUser(id);
            commit('GET_USER', data)
            return data;
        }

    }
}