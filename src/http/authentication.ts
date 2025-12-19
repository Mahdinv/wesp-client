import { RegisterForm } from "../schemas/register-form";
import UserModel from "../models/user.model";
import api from "../api/axios";
import { LoginForm } from "../schemas/login-form";

export async function authRegister(formData: RegisterForm) {
  const model = new UserModel().deserialize(formData || {});
  model.mode = "register";

  const response = await api.post("/auth/register/", model.toServer());
  return response;
}

export async function authLogin(formData: LoginForm) {
  const model = new UserModel().deserialize(formData || {});
  model.mode = "login";

  const response = await api.post("/auth/login/", model.toServer());
  return response;
}
