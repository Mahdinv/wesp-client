import api from "../api/axios-config";
import UserModel from "../models/user.model";
import { DemographicInformationForm } from "../schemas/demographic-information-form";

export async function updateUserProfile(formData: DemographicInformationForm) {
  const model = new UserModel().deserialize(formData || {});
  model.mode = "demographic-information";
  const response = await api.put("/forms/form1/", model.toServer());
  return response;
}
