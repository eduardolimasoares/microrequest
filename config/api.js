import axios from "axios";
import env from './env-vars';

const api = axios.create({
  baseURL: env.api,
});

export default api;