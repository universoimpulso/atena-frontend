import axios from "axios";

const api = axios.create({
  baseURL: process.env.API
});

export default api;

