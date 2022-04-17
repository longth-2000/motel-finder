import BaseRepository from "../BaseRepository";
export default {
    uploadImage(image) {
        return BaseRepository.post('/file/upload', image);
    },
    deleteImage(public_id) {
        return BaseRepository.post('/file/destroy', { public_id });
    },
    refreshToken() {
        const refreshToken = localStorage.getItem('refreshToken')
        return BaseRepository.get(`user/token/refresh-token?refreshToken=${refreshToken}`);
    },
    loginGoogle(token, role) {
        return BaseRepository.post('user/google/login', {
            token: token,
            role: role
        });
    },
    requestEmail(email) {
        return BaseRepository.post('user/request-password', {
            email: email
        })
    },
    resetPassword(token, password) {
        return BaseRepository.post('user/reset-password', {
            token: token,
            password: password
        })
    }


}