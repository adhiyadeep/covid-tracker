import axios from 'axios';
import { BASE_URL } from '../config/global.config';
import endPoint from '../utils/apiEndPoints';

const options = {
        headers: {'Content-Type': 'application/json',
        "Accept": "application/json",
        }
    };
  export const getApi = async(key) => {
    const response = await axios.get(BASE_URL+endPoint[key],options);
    return response.data;
  }

  export const postApi = async (key, body) => {
    const response = await axios.post(BASE_URL+endPoint[key], body, options);
    return response;
  }  