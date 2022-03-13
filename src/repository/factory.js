import AddressRepository from "./entity/Address";
const repositories = {
    address: AddressRepository,
}
export const RepositoryFactory = {
    get: (name) => repositories[name]
}