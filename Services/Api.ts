import axios from "axios";
const api = axios.create({
    baseURL:'http://192.168.159.37:5000'
})

export default api;