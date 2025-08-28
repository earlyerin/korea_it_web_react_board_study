import axios from "axios";

export const jsonInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const instance = axios.create({
  baseURL: "http://localhost:8080",
});
