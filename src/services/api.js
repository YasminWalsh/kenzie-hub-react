import axios from "axios";
import { getData } from "./handleData";

const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  headers: {
    Authorization: `Bearer ${getData()?.token}`,
  },
});

export default api;
