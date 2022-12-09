import instance from "./MyAxios";

const BASE_URL = "/lecture-teacher";

export const getLectures = async() => {
  const { data } = await instance.get(`${BASE_URL}`);
  return data;
}

export const getLecture = async(id) => {
  const { data } = await instance.get(`${BASE_URL}/${id}`);
  return data;
}

export const saveLecture = async(body) => {
  const { data } = await instance.post(`${BASE_URL}`, body)
  return data
}

export const updateLecture = async(id, body) => {
  const { data } = await instance.patch(`${BASE_URL}/${id}`, body)
  return data
}

export const deleteLecture = async(id) => {
  const { data } = await instance.delete(`${BASE_URL}/${id}`);
  return data;
}