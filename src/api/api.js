import axios from "axios";

const api = axios.create({
    baseURL:"https://localhost:5000/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    }
});

api.interceptors.request.use(async config =>{

    const token = "";

    if(token){
        api.defaults.headers.authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;