import axios from 'axios';
import {BASE_URL} from 'react-native-dotenv';

const instance = axios.create({
  baseURL: BASE_URL,
});

export function setAuthToken(token) {
  if (token) {
    instance.defaults.headers.common.Authorization = token;
  }
}

export default instance;
