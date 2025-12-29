import { PastWeekIntakeForm } from "../schemas/past-week-intake-form";

export async function addPastWeekIntake(formData: PastWeekIntakeForm) {
  console.log(formData);
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
