import api from "../api/axios";
import handleAxiosError from "../api/axios-error-handler";

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
