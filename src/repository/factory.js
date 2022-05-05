import AddressRepository from "./entity/Address";
import ArticleRepository from "./entity/Article";
import UserRepository from "./entity/User";
import AppRepository from "./entity/App";
import TypeRepository from "./entity/Type";

const repositories = {
    address: AddressRepository,
    article: ArticleRepository,
    user: UserRepository,
    app: AppRepository,
    type: TypeRepository

}
export const RepositoryFactory = {
    get: (name) => repositories[name]
}