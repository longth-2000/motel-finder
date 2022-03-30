import BaseRepository from "../BaseRepository";
import authHeader from "../../helper/authHeader";
export default {
    login(user) {
        return BaseRepository.post('/user/log-in', user);
    },
    register(user) {
        return BaseRepository.post('/user/sign-in', user);
    },
    getUser() {
        const { id } = JSON.parse(localStorage.getItem('user'))
        return BaseRepository.get(`/user/${id}`, {
            headers: authHeader()
        });
    },
    updateUser(user) {
        return BaseRepository.put('/user/update', user, { headers: authHeader() });
    },
    updatePassword(password) {
        return BaseRepository.post('/user/update-password', password, { headers: authHeader() });
    }

}