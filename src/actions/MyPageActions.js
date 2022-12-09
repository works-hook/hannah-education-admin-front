import instance from "./MyAxios";

const BASE_URL = "/users-teacher";

export const getUser = async() => {
  const { data } = await instance.get(`${BASE_URL}`);
  return data;
}

export const updateUser = async(updateDate) => {
  const { data } = await instance.patch(`${BASE_URL}`, updateDate);
  return data;
}
