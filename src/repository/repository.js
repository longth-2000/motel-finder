import axios from 'axios';
import { BASE_URL } from '../constants/index';

/* const BASE_URL = "https://ghibliapi.herokuapp.com"
 */
export default axios.create({
    baseURL: BASE_URL
})