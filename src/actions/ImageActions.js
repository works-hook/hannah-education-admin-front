import axios from "axios";
import {getCookieToken} from "../token/Cookies";

const BASE_URL = "/image-upload";

const instance = axios.create();

instance.interceptors.request.use(
  config => {
    config.headers['auth'] = getCookieToken();
    config.headers['Content-Type'] = 'multipart/form-data';
    return config
  },
  error => {
    Promise.reject(error).then(r => alert(r.message))
  }
)

export const uploadImage = (path, file) => {
  return instance
    .request({
      method: "POST",
      url: `${BASE_URL}/${path}`,
      data: file
    });
}
