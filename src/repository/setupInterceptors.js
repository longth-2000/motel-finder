import { RepositoryFactory } from "./factory";
import cookie from "../helper/cookie"

const setup = (axiosInstance) => {
    axiosInstance.interceptors.request.use(
        (config) => {
            let accessToken = cookie.getCookie("accessToken");
            if (accessToken) {
                config.headers["Authorization"] = 'Bearer ' + accessToken;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        });
    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        async(error) => {
            let { message } = error.response.data
            let originalConfig = error.config
            if (message === 'token hết hạn') {
                const {
                    data
                } = await RepositoryFactory.get('app').refreshToken()
                document.cookie = `accessToken=${data.accessToken}`;
                originalConfig.headers['Authorization'] = 'Bearer ' + data.accessToken
                return axiosInstance(originalConfig);
            }
            return Promise.reject(error);
        });
}
export default setup