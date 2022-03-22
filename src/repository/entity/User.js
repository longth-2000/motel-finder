import Repository from "../repository";
export default {
    login(user) {
        return Repository.post('/user/log-in', user);
    },
    register(user) {
        return Repository.get('/user/sign-in', user);
    }

}