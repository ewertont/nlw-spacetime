import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.1.1.5:3333",
});
