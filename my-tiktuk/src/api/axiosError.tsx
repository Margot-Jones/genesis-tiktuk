import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "x-rapidapi-host": "tiktok33.p.rapidapi.com",
    "x-rapidapi-key": "151dd40a87msh1bd8ee1406e994cp1528c0jsna796a6e94e45",
  },
});
