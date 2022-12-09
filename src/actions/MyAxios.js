import axios from "axios";
import { getCookieToken } from "../token/Cookies";

const BASE_URL = "/lecture-teacher";

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  config => {
    config.headers['auth'] = getCookieToken();
    config.headers['Content-Type'] = 'application/json';
    return config
  },
  error => {
    Promise.reject(error).then(r => alert(r.message))
  }
)

export default instance