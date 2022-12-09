import axios from "axios";
import { getCookieToken } from "../token/Cookies";

const instance = axios.create();

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