import BaseRepository from "../BaseRepository";
import authHeader from "../../helper/authHeader";

export default {
    createArticle(article) {
        return BaseRepository.post(`/accomodations`, article, { headers: authHeader() });
    },
    getArticle(articleID) {
        return BaseRepository.get(`/accomodations/${articleID}`, { headers: authHeader() });
    },
    updateArticle(article, articleID) {
        return BaseRepository.put(`/accomodations/${articleID}`, article, { headers: authHeader() });
    },
    getMultipleArticle() {
        return BaseRepository.get('/accomodations', { headers: authHeader() });
    },
    deleteArticle(articleID) {
        return BaseRepository.delete(`/accomodations/${articleID}`, { headers: authHeader() });
    },
    updateStateArticle(articleID) {
        return BaseRepository.put(`/accomodations/update-state/${articleID}`, {}, { headers: authHeader() });
    },
    filterArticle(page, status, query) {
        let endpoint = '/accomodations/user/accomod?page=' + page + '&limit=' + query.limit + '&id=' + query.id + '&status=' + status
        let paramsArray = ['isRented', 'isApproved', 'sortByDate', 'sortByTitle', 'title', 'isExpired']
        paramsArray.forEach(element => {
            if (query[element] !== undefined)
                endpoint += '&' + element + '=' + query[element]
        })
        return BaseRepository.get(endpoint, { headers: authHeader() });
    },
    deleteMultiple(idArr) {
        return BaseRepository.post('accomodations/delete-multiple', {
            ids: idArr
        }, { headers: authHeader() });
    }
}