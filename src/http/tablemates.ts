import api from "../api/axios-config";
import TablemateModel from "../models/tablemate.model";
import { TablematesForm } from "../schemas/tablemates-form";

export async function addTablemates(formData: TablematesForm) {
  const model = new TablemateModel().deserialize(formData || {});
  const response = await api.post("/forms/form2/", model.toServer());
  return response;
}
