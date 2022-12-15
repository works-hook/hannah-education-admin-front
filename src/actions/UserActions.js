import instance from "./MyAxios";

// promise 요청 타임아웃 시간 선언
// const TIME_OUT = 300 * 1000;

// 에러 처리를 위한 status 선언
// const statusError = {
//     status: false,
//     json: {
//         error: ["연결이 원활하지 않습니다. 잠시 후 다시 시도해 주세요"]
//     }
// };

// promise 타임아웃 처리
// const timeoutPromise = () => {
//     return new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), TIME_OUT));
// };

export const getTags = async() => {
    const { data } = await instance.get(`/lecture/tags`);
    return data;
}

export const loginUser = async(dataToSubmit) => {
    return instance.post(`/users/login`, dataToSubmit)
        .then(response => response.data)
}

export const checkAccountDuplicate = async(dataToSubmit) => {
    const { data } = await instance.post("/users/account", dataToSubmit);
    return data;
}

export const certificationSend = async(dataToSubmit) => {
    const { data } = await instance.post("/user-certification", dataToSubmit);
    return data;
}

export const certificationCheck = async(dataToSubmit) => {
    const { data } = await instance.post("/user-certification/check", dataToSubmit);
    return data;
}

export const registerUser = async(dataToSubmit) => {
    const { data } = await instance.post("/users", dataToSubmit);
    return data;
}
