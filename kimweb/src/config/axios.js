import axios from "axios";

const BASE_URL = "http:127.0.01:8000/api/";
// const BASE_URL = "http://192.168.0.106/furaha/sms/";


export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const axiosPrivate = axios.create({
        baseURL : BASE_URL,
        headers: {'Content-Type': 'application/json'},
        withCredentials: false

})
