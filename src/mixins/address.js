import { RepositoryFactory } from "../repository/factory";
var addressMixin = {
    data() {
        return {
            districts: [],
            wards: {},
        };
    },
    created() {
        this.fetchDistrict();
    },
    methods: {
        async fetchDistrict() {
            const { data } = await RepositoryFactory.get("address").getDistrict();
            this.districts = data.districts;
        },
        async getWard(districtName) {
            var districtID = this.districts.filter(element => element.name === districtName)[0].code
            const { data } = await RepositoryFactory.get("address").getWard(
                districtID
            );
            this.wards = data.wards;
            console.log(data);
        },
    },
}
export default addressMixin