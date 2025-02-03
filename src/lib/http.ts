import axios from "axios";
import { getToken } from "../utils/auth-storage";
import { toast } from "react-toastify";

const url: string | undefined = import.meta.env.VITE_BASE_URL;

const http = axios.create({
    baseURL: url,
    timeout: 20000,
});

http.interceptors.request.use(
    function (config) {
        if (getToken()) {
            config.headers["Authorization"] = `Bearer ${getToken()}`;
        }
        return config;
    },
    function (error) {
        toast.error("Error from request interceptors");
        return Promise.reject(error);
    }
);

export default http;
