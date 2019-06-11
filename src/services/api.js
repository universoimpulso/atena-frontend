import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4390"
});

export default api;
