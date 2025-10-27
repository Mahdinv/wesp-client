import { type ActionFunctionArgs } from "react-router-dom";
import api from "../../api/axios";

export async function action({ request }: ActionFunctionArgs) {
  const data = await request.formData();
  const url = new URL(request.url);
  const mode = url.searchParams.get("mode");

  if (
    mode !== "register" &&
    mode !== "login" &&
    mode !== "forget-password" &&
    mode !== "reset-password"
  ) {
    return {
      status: 500,
      message: "در حال حاضر امکان احراز هویت برای کاربر فراهم نیست",
    };
  }

  let enteredValue: {
    first_name?: FormDataEntryValue | null;
    last_name?: FormDataEntryValue | null;
    email: FormDataEntryValue | null;
    password?: FormDataEntryValue | null;
    otp?: FormDataEntryValue | null;
    new_password?: FormDataEntryValue | null;
  } = {
    email: data.get("email"),
  };

  if (mode === "forget-password" && data.get("sendOtp") === "sendOtp") {
    const response = await api.post("/auth/forgot-password/", enteredValue, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    if (response.status !== 201) {
      return response;
    }
    return { response, actionType: "send-otp" };
  } else if (
    mode === "forget-password" &&
    !data.get("sendOtp") &&
    data.get("sendOtp") !== "sendOtp"
  ) {
    enteredValue = { ...enteredValue, otp: data.get("otp") };
    const response = await api.post("/auth/verify-otp/", enteredValue, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return { response, actionType: "verify-otp" };
  }

  if (mode === "register") {
    enteredValue = {
      ...enteredValue,
      password: data.get("password"),
      first_name: data.get("firstName"),
      last_name: data.get("lastName"),
    };
  }

  if (mode === "login") {
    enteredValue = {
      ...enteredValue,
      password: data.get("password"),
    };
  }

  if (mode === "reset-password") {
    enteredValue = {
      ...enteredValue,
      new_password: data.get("new-password"),
      otp: data.get("otp"),
    };
  }

  const response = await api.post(`/auth/${mode}/`, enteredValue, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });

  if (mode === "login") {
    const expiration = new Date();
    expiration.setMinutes(expiration.getMinutes() + 5);
    localStorage.setItem("accessToken", response.data.access);
    localStorage.setItem("expiration", expiration.toString());
  }

  return {
    data: response.data,
    status: response.status,
    success: response.status === 200 || response.status === 201 ? true : false,
    mode,
  };
}
