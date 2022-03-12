import axios from 'axios';
import { DISTRICT_URL } from '../constants/address';
export default axios.create({
    baseURL: DISTRICT_URL
})