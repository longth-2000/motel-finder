import AddressRepository from "../AddressRepository";
export default {
    getDistrict() {
        return AddressRepository.get('/p/1?depth=2');
    },
    getWard(districtID) {
        return AddressRepository.get(`/d/${districtID}?depth=2`);
    }

}