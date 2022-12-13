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

export const uploadImage = async (path, file) => {
  const url = `${BASE_URL}/${path}`
  console.log(url)
  const { data } = await instance
    .request({
      method: "POST",
      url: `${BASE_URL}/LECTURE`,
      data: file
    });
  return data;
}
