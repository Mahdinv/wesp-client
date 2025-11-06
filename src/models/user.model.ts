import { BaseModel } from "./base.model";

export default class User extends BaseModel {
  id!: number;
  firstName = "";
  lastName = "";
  age!: number;
  height!: number;
  weight!: number;
  gender!: "male" | "female" | "other";
  email = "";
  password = "";
  newPassword = "";
  otp!: number;
  mode: string = "register";

  getData() {
    if (this.mode === "register") {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
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
    if (this.mode === "forgot-password") {
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
