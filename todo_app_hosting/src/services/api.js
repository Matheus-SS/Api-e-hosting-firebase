import axios from "axios";

const api = axios.create({
  baseURL:
    "https://us-central1-first-firebase-api-1c7d8.cloudfunctions.net/App",
});

export default api;
