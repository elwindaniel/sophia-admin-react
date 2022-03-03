import axios from "axios";
import { API_URL } from "./constant";

const axiosInstance = axios.create({
  baseURL: `${API_URL}`,
  headers:{'Authorization':'Bearer '+localStorage.getItem('token')}
});

export default axiosInstance;