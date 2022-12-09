import instance from "./MyAxios";

const BASE_URL = "/class-teacher";

export const getClass = async(id) => {
  const { data } = await instance.get(`${BASE_URL}/lecture/${id}`);
  return data;
}

export const getOneClass = async(id) => {
  const { data } = await instance.get(`${BASE_URL}/${id}`);
  return data
}

export const saveClass = async(id, saveData) => {
  const { data } = await instance.post(`${BASE_URL}/${id}`, saveData);
  return data;
}

export const updateClass = async(id, updateData) => {
  const { data } = await instance.patch(`${BASE_URL}/${id}`, updateData);
  return data;
}

export const deleteClass = async(id) => {
  const { data } = await instance.delete(`${BASE_URL}/${id}`);
  return data;
}
