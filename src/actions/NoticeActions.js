import instance from "./MyAxios";

const BASE_URL = "/lecture-teacher";

export const getNotices = async(id) => {
  const { data } = await instance.get(`${BASE_URL}/notices/${id}`);
  return data;
}

export const getOneNotice = async(id) => {
  console.log(id)
  const { data } = await instance.get(`${BASE_URL}/notice/${id}`);
  return data
}

export const saveNotice = async(id, saveData) => {
  const { data } = await instance.post(`${BASE_URL}/notice/${id}`, saveData);
  return data;
}

export const updateNotice = async(id, updateData) => {
  const { data } = await instance.patch(`${BASE_URL}/notice/${id}`, updateData);
  return data;
}

export const deleteNotice = async(id) => {
  const { data } = await instance.delete(`${BASE_URL}/notice/${id}`);
  return data;
}
