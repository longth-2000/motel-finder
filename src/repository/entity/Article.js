import BaseRepository from "../BaseRepository";

export default {
    createArticle(article) {
        return BaseRepository.post(`/accomodations`, article);
    },
    getArticle(articleID) {
        return BaseRepository.get(`/accomodations/${articleID}`);
    },
    updateArticle(article, articleID) {
        return BaseRepository.put(`/accomodations/${articleID}`, article);
    },
    getMultipleArticle() {
        return BaseRepository.get('/accomodations');
    },
    deleteArticle(articleID) {
        return BaseRepository.delete(`/accomodations/${articleID}`);
    },
    updateStateArticle(articleID) {
        return BaseRepository.put(`/accomodations/update-state/${articleID}`, {});
    },
    filterArticle(page, status, query) {
        let endpoint = '/accomodations/user/accomod?page=' + page + '&limit=' + query.limit + '&id=' + query.id + '&status=' + status
        let paramsArray = ['isRented', 'isApproved', 'sortByDate', 'sortByTitle', 'title', 'isExpired']
        paramsArray.forEach(element => {
            if (query[element] !== undefined)
                endpoint += '&' + element + '=' + query[element]
        })
        return BaseRepository.get(endpoint);
    },
    deleteMultiple(idArr) {
        return BaseRepository.post('accomodations/delete-multiple', {
            ids: idArr
        });
    }
}