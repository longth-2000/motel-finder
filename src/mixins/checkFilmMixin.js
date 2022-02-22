import { RepositoryFactory } from "../repository/factory";
export const checkFilmMixin = {
    data() {
        return {
            films: []
        }
    },
    created() {
        console.log(RepositoryFactory);
        this.fetch();
    },
    methods: {
        async fetch() {
            const { data } = await RepositoryFactory.get("films").get();
            this.films = data;
        },
    },
}