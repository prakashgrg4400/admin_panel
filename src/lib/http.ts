import axios from "axios";

const url: string | undefined = import.meta.env.VITE_BASE_URL;

const http = axios.create({
    baseURL: url,
    timeout: 20000,
});

export default http;
