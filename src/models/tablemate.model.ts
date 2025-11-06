import { BaseModel } from "./base.model";

export default class TablemateModel extends BaseModel {
  id!: number;
  key = "";
  name = "";
  sharedMealQuantity!: number;
  communicationLevel!: "family" | "friend" | "colleague" | "other";
  dietImpact!: "nothing" | "low" | "medium" | "high" | "very-high";
}
