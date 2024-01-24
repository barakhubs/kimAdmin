import axios from "axios";

const BASE_URL = "https://admin.kimdigitary.com/api/";

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const axiosPrivate = axios.create({
        baseURL : BASE_URL,
        headers: {'Content-Type': 'application/json'},
        withCredentials: false
});

export const ASSET_URL = "https://admin.kimdigitary.com/public/storage/";
