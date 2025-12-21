import { RegisterForm } from "../schemas/register-form";
import UserModel from "../models/user.model";
import api from "../api/axios-config";
import { LoginForm } from "../schemas/login-form";
import { ResetPasswordForm } from "../schemas/reset-password-form";
import { VerifyOtpForm } from "../schemas/verify-otp-form";

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

export async function authForgetPassword(email: string) {
  const response = await api.post("/auth/forgot-password/", { email });
  return response;
}

export async function authVerifyOtp(formData: VerifyOtpForm) {
  const model = new UserModel().deserialize(formData || {});
  model.mode = "verify-otp";

  const response = await api.post("/auth/verify-otp/", model.toServer());
  return response;
}

export async function authResetPassword(formData: ResetPasswordForm) {
  const model = new UserModel().deserialize(formData || {});
  model.mode = "reset-password";

  const response = await api.post("/auth/reset-password/", model.toServer());
  return response;
}

export async function authLogout(refreshToken: string) {
  const response = await api.post("/auth/logout/", { refresh: refreshToken });
  return response;
}
