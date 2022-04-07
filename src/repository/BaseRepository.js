import axios from 'axios';
import { BASE_URL } from '../constants/index';
import setup from "./setupInterceptors"

const apiInstance = axios.create({
    baseURL: BASE_URL
})
setup(apiInstance)
export default apiInstance;