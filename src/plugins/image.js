import { RepositoryFactory } from "../repository/factory";
export default {
    install(Vue) {
        Vue.mixin({
            methods: {
                async deleteImage(image_array) {
                    const { data } = await RepositoryFactory.get('app').deleteImage(image_array);
                    console.log(data);
                }
            }
        })
    }
}