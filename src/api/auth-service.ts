// api/auth.service.ts
import axios from "axios";
import { getLocalStorageRefreshToken } from "../utils/token";

const BASE_URL = "http://127.0.0.1:8000/api";

export const refreshTokenRequest = () => {
  return axios.post(`${BASE_URL}/auth/token/refresh/`, {
    refresh: getLocalStorageRefreshToken(),
  });
};
