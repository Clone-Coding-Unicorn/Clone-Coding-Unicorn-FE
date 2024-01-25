import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    withCredentials: true,
    // withCredentials를 추가하여 CORS 문제를 해결
});


api.interceptors.request.use((api) => {
    const access_token = Cookies.get("token");
    if(api.url ==="/api/login" || api.url === "/api/signup"){
        return api
    }

    api.headers.Authorization = `${access_token}`;
    return api;
});

