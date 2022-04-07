import BaseRepository from "../BaseRepository";
export default {
    login(user) {
        return BaseRepository.post('/user/log-in', user);
    },
    register(user) {
        return BaseRepository.post('/user/sign-in', user);
    },
    getUser() {
        const { id } = JSON.parse(localStorage.getItem('user'))
        return BaseRepository.get(`/user/${id}`);
    },
    updateUser(user) {
        return BaseRepository.put('/user/update', user);
    },
    updatePassword(password) {
        return BaseRepository.post('/user/update-password', password);
    }

}