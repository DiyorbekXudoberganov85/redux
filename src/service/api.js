import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";


axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    const authorisation = token ? `Token ${token}` : "";
    config.headers.Authorization = authorisation;
    console.log(authorisation)
    return config;
});
export default axios;