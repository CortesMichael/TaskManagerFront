import axios from "axios";
import { useState } from 'react';

const api = axios.create({
    baseURL:"https://localhost:5000/api",
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
    }
});

api.interceptors.request.use(async config =>{
    const token = localStorage.getItem('token');

    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;