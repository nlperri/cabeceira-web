import axios from "axios";

export const api = axios.create({
  baseURL: "https://cabeceira-api.onrender.com",
});
