import { RepositoryFactory } from "../../../repository/factory";
export const actions = {
    async getArticle({ commit }, articleID) {
        const { data } = await RepositoryFactory.get('article').getArticle(articleID);
        commit('GET_ARTICLE', data)
        return data;
    }
}