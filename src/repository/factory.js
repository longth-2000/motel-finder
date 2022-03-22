import AddressRepository from "./entity/Address";
import ArticleRepository from "./entity/Article";
import UserRepository from "./entity/User"
const repositories = {
    address: AddressRepository,
    article: ArticleRepository,
    user: UserRepository

}
export const RepositoryFactory = {
    get: (name) => repositories[name]
}