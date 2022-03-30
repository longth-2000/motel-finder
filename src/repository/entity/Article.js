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
    }
}