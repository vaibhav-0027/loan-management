import axios from "axios"
import { getUserAccessToken, getUserInfo } from "./localStorage";

const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
}

const LOCAL_SERVER_URL = "http://localhost:8000";

const dash_api = axios.create({
    baseURL: `${LOCAL_SERVER_URL}/api`,
    ...defaultHeaders,
});

dash_api.interceptors.request.use(
    (config) => {
        const token = getUserAccessToken()
        const user = getUserInfo().email;

        if(token) {
            config.headers = {
                ...config.headers,
                'jwt_token': token,
                'user_id': user,
            };
        }

        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default dash_api