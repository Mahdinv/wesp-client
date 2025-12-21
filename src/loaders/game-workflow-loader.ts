import api from "../api/axios-config";
import handleAxiosError from "../api/error-handling";

export async function loader() {
  try {
    const response = await api.get("/forms/");
    if (!!response && response.status === 200) {
      return response;
    }
  } catch (error) {
    return handleAxiosError(error);
  }
}
