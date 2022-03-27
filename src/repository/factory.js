import AddressRepository from "./entity/Address";
import ArticleRepository from "./entity/Article";
import UserRepository from "./entity/User";
import AppRepository from "./entity/App";
const repositories = {
    address: AddressRepository,
    article: ArticleRepository,
    user: UserRepository,
    app: AppRepository

}
export const RepositoryFactory = {
    get: (name) => repositories[name]
}