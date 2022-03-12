import Repository from "../repository";
export default {
    getDistrict() {
        return Repository.get('/p/1?depth=2');
    },
    getWard(districtID) {
        return Repository.get(`/d/${districtID}?depth=2`);
    }

}