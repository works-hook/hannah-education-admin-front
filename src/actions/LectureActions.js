import instance from "./MyAxios";

const getLectures = async() => {
  const { data } = await instance.get("/lecture");
  return data;
}

const saveLecture = async(body) => {
  const { data } = await instance.post("", body)
  return data
}

export { getLectures, saveLecture }
