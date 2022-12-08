import axios from 'axios';

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

const BASE_URL = "http://localhost:8080/users";

export function loginUser(dataToSubmit) {
    return axios.post(`${BASE_URL}/login`, dataToSubmit)
        .then(response => response.data)
}
