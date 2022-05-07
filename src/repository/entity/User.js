import BaseRepository from "../BaseRepository";
export default {
    login(user) {
        return BaseRepository.post('/user/log-in', user);
    },
    register(user) {
        return BaseRepository.post('/user/sign-in', user);
    },
    getUser(id) {
        return BaseRepository.get(`/user/${id}`);
    },
    updateUser(user) {
        return BaseRepository.put('/user/update', user);
    },
    updatePassword(password) {
        return BaseRepository.post('/user/update-password', password);
    },
    getSummary() {
        return BaseRepository.get('/user/manage/summary')
    },
    getOwners(query) {
        return BaseRepository.get(`/user/manage/owners?limit=${query.limit}&page=${query.page}`)
    },
    updateState(id, query) {
        return BaseRepository.put(`/user/manage/update-state/${id}`, query)
    },
    getStatistic() {
        return BaseRepository.get(`/user/manage/statistic`)
    },

}