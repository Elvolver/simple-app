import axios from "axios";

export const API_URL = `http://localhost:8081`

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.request.use((config) => {
    const access_token = localStorage.getItem('access_token')
    if (access_token !== null)
        config.headers.Authorization = `Bearer ${access_token}`
    return config;
})

export default api