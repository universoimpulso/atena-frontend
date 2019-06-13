import axios from "axios";

const api = axios.create({
  baseURL: "https://staging-atena-network.herokuapp.com"
});

export default api;
