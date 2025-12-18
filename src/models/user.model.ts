import { BaseModel } from "./base.model";

export default class UserModel extends BaseModel {
  id!: number;
  fullName = "";
  age!: number;
  height!: number;
  weight!: number;
  gender!: "male" | "female" | "other";
  email = "";
  password = "";
  rePassword = "";
  newPassword = "";
  otp!: number;
  mode: "register" | "login" | "reset-password" | "forget-password" =
    "register";

  getData() {
    if (this.mode === "register") {
      return {
        fullName: this.fullName,
        email: this.email,
        password: this.password,
      };
    }
    if (this.mode === "login") {
      return {
        email: this.email,
        password: this.password,
      };
    }
    if (this.mode === "forget-password") {
      return {
        email: this.email,
      };
    }
    if (this.mode === "reset-password") {
      return {
        email: this.email,
        otp: this.otp,
        newPassword: this.newPassword,
      };
    }
  }
}
