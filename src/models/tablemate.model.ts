import { BaseModel } from "./base.model";

export default class TablemateModel extends BaseModel {
  id!: number;
  name = "";
  sharedMealsCount!: number;
  relationshipLevel!: "family" | "friend" | "colleague" | "other" | "";
  influenceLevel!: "nothing" | "low" | "medium" | "high" | "very-high" | "";

  getData() {
    return {
      ...(this.id !== null && { id: this.id }),
      name: this.name,
      sharedMealsCount: this.sharedMealsCount,
      relationshipLevel: this.relationshipLevel,
      influenceLevel: this.influenceLevel,
    };
  }
}
