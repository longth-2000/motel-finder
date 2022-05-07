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
    filterArticle(page, query) {
        let endpoint = '/accomodations/user/accomod?page=' + page + '&limit=' + query.limit + '&id=' + query.id
        let paramsArray = ['isRented', 'state', 'sortByDate', 'sortByTitle', 'title', 'isExpired', 'status']
        paramsArray.forEach(element => {
            if (query[element] !== undefined)
                endpoint += '&' + element + '=' + query[element]
        })
        return BaseRepository.get(endpoint);
    },
    filterArticleByUser(id) {
        return BaseRepository.get(`/accomodations/user/accomod?id=${id}`)
    },
    deleteMultiple(idArr) {
        return BaseRepository.post('accomodations/delete-multiple', {
            ids: idArr
        });
    },
    searchArticleByDistrict(district) {
        return BaseRepository.get(`/accomodations/renter/list?district=${district}`)
    },
    getFavouriteArticle(limit) {
        return BaseRepository.get(`/accomodations/renter/list?sortbyLike=true&&limit=${limit}`)
    },
    getNewArticle(limit) {
        return BaseRepository.get(`/accomodations/renter/list?limit=${limit}`)
    },
    searchByKeyword(page, limit, query) {
        let endpoint = '/accomodations/renter/list?page=' + page + '&limit=' + limit
        let paramsArray = ['district', 'minArea', 'maxArea', 'bedRoom', 'type', 'minPrice', 'maxPrice', 'public_location']
        paramsArray.forEach(element => {
            if (query[element] !== undefined)
                endpoint += '&' + element + '=' + query[element]
        })
        return BaseRepository.get(endpoint);
    },
    increaseLike(articleID) {
        return BaseRepository.post(`/accomodations/increase-like/${articleID}`);
    },
    decreaseLike(articleID) {
        return BaseRepository.delete(`/accomodations/decrease-like/${articleID}`);
    },
    getSummary() {
        return BaseRepository.get('/accomodations/manage/summary')
    },
    getAllPosts(query) {
        return BaseRepository.get(`/accomodations/manage/posts?limit=${query.limit}&page=${query.page}`);
    },
    payment(idArticle) {
        return BaseRepository.get(`accomodations/payment/${idArticle}`);
    },
    comment(idArticle, comment) {
        return BaseRepository.post('report/comment', {
            id: idArticle,
            type: 'comment',
            comment: comment
        });
    },
    updateState(id, query) {
        return BaseRepository.put(`/accomodations/manage/update-state/${id}`, query)
    },
    rate(idArticle, rate) {
        return BaseRepository.post('report', {
            id: idArticle,
            type: 'evaluation',
            content: rate
        });
    },
    getRate(id) {
        return BaseRepository.get(`/report/evaluation/${id}`)
    },
    getPrivateFavouriteArticle(page, id, limit) {
        return BaseRepository.get(`/user/favorite/accomod?page=${page}&limit=${limit}&id=${id}`)
    },
    report(idArticle, detail, moreDetail) {
        return BaseRepository.post('report', {
            id: idArticle,
            type: 'report',
            content: {
                detail: detail,
                moreDetail: moreDetail
            }
        });
    },
    getReport() {
        return BaseRepository.get('/report/reports')
    },
    deleteReport(id) {
        return BaseRepository.delete(`/report/${id}`);
    }
}