import AddressRepository from "./entity/Address";
import ArticleRepository from "./entity/Article";

const repositories = {
    address: AddressRepository,
    article: ArticleRepository
}
export const RepositoryFactory = {
    get: (name) => repositories[name]
}