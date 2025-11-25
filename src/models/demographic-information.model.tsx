import type { ProvinceValue } from "../types/province.type";
import { BaseModel } from "./base.model";

export default class DemographicInformationModel extends BaseModel {
  id!: number;
  name = "";
  age!: number;
  gender!: "male" | "female" | "other";
  heightCm?: number;
  weightKg?: number;
  education?: string;
  jobState?: "employed" | "student" | "other";
  incomeBracket?: "0-10" | "10-30" | "30-50" | "50-70" | "70-90" | "90+";
  dietIncomePercent?: number;
  province?: ProvinceValue;
  maritalStatus?: "single" | "married";
  familyMembers?: number;
  sportDaysPerWeek?: number;
  createdAt?: string;

  getData() {
    const data = {
      id: this.id,
      name: this.name,
      age: this.age,
      gender: this.gender,
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
