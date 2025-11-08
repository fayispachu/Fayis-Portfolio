import axios from "axios";

axios.defaults.withCredentials = true;

export const axiosInstance = axios.create({
  baseURL: "https://fayis-portfolio-1.onrender.com/api",

  withCredentials: true,
});

