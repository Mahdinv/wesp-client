import { Gender, Mode } from "./user.type";

export interface IUser {
  id: number;
  fullName: string;
  age: number;
  gender: Gender;
  email: string;
  password: string;
  rePassword: string;
  newPassword: string;
  otp: number;
  mode: Mode;
}
