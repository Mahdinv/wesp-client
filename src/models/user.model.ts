import { IUser } from "../types-interfaces/user.interface";
import {
  Gender,
  IncomeBracket,
  JobState,
  MaritalStatus,
  Mode,
  Province,
} from "../types-interfaces/user.type";
import { BaseModel } from "./base.model";

export default class UserModel extends BaseModel implements IUser {
  id!: number;
  fullName = "";
  age!: number;
  gender!: Gender;
  email = "";
  password = "";
  rePassword = "";
  newPassword = "";
  otp!: number;
  mode: Mode = "register";
  properties = new UserPropertiesModel();

  deserialize(input: any = {}): this {
    super.deserialize(input);
    this.properties = new UserPropertiesModel().deserialize(
      input.properties || {}
    );
    return this;
  }

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
    if (this.mode === "verify-otp") {
      return {
        email: this.email,
        otp: this.otp,
      };
    }
    if (this.mode === "reset-password") {
      return {
        email: this.email,
        newPassword: this.newPassword,
      };
    }
    if (this.mode === "demographic-information") {
      return {
        fullName: this.fullName,
        age: this.age,
        gender: this.gender,
        email: this.email,
        properties: this.properties.getData(),
      };
    }
  }
}

export class UserPropertiesModel extends BaseModel {
  heightCm?: number;
  weightKg?: number;
  education?: string;
  jobState?: JobState;
  incomeBracket?: IncomeBracket;
  dietIncomePercent?: number;
  province?: Province;
  maritalStatus?: MaritalStatus;
  familyMembers?: number;
  sportDaysPerWeek?: number;

  getData() {
    const data = {
      heightCm: this.heightCm,
      weightKg: this.weightKg,
      education: this.education,
      jobState: this.jobState,
      incomeBracket: this.incomeBracket,
      dietIncomePercent: this.dietIncomePercent,
      province: this.province,
      maritalStatus: this.maritalStatus,
      familyMembers: this.familyMembers,
      sportDaysPerWeek: this.sportDaysPerWeek,
    };

    const filteredData = Object.fromEntries(
      Object.entries(data).filter(
        ([, v]) => v !== null && v !== undefined && v !== ""
      )
    );

    return filteredData;
  }
}
