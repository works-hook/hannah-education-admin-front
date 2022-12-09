import instance from "./MyAxios";

export const getLectures = async() => {
  const { data } = await instance.get("");
  return data;
}

export const getLecture = async(id) => {
  const { data } = await instance.get(`/${id}`);
  return data;
}

export const saveLecture = async(body) => {
  const { data } = await instance.post("", body)
  return data
}

export const updateLecture = async(id, body) => {
  const { data } = await instance.patch(`/${id}`, body)
  return data
}

export const deleteLecture = async(id) => {
  const { data } = await instance.delete(`${id}`);
  return data;
}