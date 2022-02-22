import Repository from "../repository";
console.log(Repository)
export default {
    get() {
        return Repository.get('/films');
    }
}