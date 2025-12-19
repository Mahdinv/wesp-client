import { IUser } from "../types-interfaces/user.interface";
import { Gender, Mode } from "../types-interfaces/user.type";
import { BaseModel } from "./base.model";

export default class UserModel extends BaseModel implements IUser {
  id!: number;
  fullName = "";
  age!: number;
  height!: number;
  weight!: number;
  gender!: Gender;
  email = "";
  password = "";
  rePassword = "";
  newPassword = "";
  otp!: number;
  mode: Mode = "register";

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
