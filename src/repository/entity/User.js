import BaseRepository from "../BaseRepository";
export default {
    login(user) {
        return BaseRepository.post('/user/log-in', user);
    },
    register(user) {
        return BaseRepository.post('/user/sign-in', user);
    },
    getUser(userID, headers) {
        return BaseRepository.get(`/user/${userID}`, {
            headers
        });
    },
    updateUser(user, headers) {
        return BaseRepository.put('/user/update', user, { headers });
    }

}