import FilmRepository from "./entity/Film";
const repositories = {
    films: FilmRepository
}
export const RepositoryFactory = {
    get: (name) => repositories[name]
}