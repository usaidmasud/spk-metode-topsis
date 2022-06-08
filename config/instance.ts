import axios from "axios";

const baseURL = process.env.API_URL;
const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
});

export default instance