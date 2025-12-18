import { RegisterForm } from "../schemas/register-form";
import UserModel from "../models/user.model";
import api from "../api/axios";

export async function authRegister(formData: RegisterForm) {
  const model = new UserModel().deserialize(formData);
  model.mode = "register";

  const response = await api.post("/auth/register/", model.toServer());
  return response;
}
