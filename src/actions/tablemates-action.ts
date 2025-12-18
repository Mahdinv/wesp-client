import type { ActionFunctionArgs } from "react-router-dom";
import qs from "qs";
import TablemateModel from "../models/tablemate.model";
import isEmpty from "../utils/validation";
import handleAxiosError from "../api/error-handling";
import api from "../api/axios";

export async function action({ request }: ActionFunctionArgs) {
  const fd = await request.text();
  const { tablemates = [] } = qs.parse(fd);
  const model = (Array.isArray(tablemates) ? tablemates : []).map((item) =>
    new TablemateModel().deserialize(item || {})
  );

  const titles = [
    "اول",
    "دوم",
    "سوم",
    "چهارم",
    "پنجم",
    "ششم",
    "هفتم",
    "هشتم",
    "نهم",
    "دهم",
  ];

  const findIndex = model.findIndex(
    (item) =>
      isEmpty(item.name) ||
      isEmpty(item.sharedMealsCount) ||
      isEmpty(item.relationshipLevel) ||
      isEmpty(item.influenceLevel)
  );

  if (findIndex !== -1) {
    return {
      success: false,
      message: `لطفا مشخصات همسفره ${titles[findIndex]} را به‌صورت کامل وارد کنید.`,
    };
  }
  try {
    const payload: TablemateModel[] = model.map((item) => item.toServer());
    const response = await api.post("/forms/middle/", payload);
    if (response.status === 201) {
      return {
        success: true,
        message: "عملیات ثبت همسفره‌ با موفقیت انجام شد",
      };
    }
  } catch (error) {
    return handleAxiosError(error);
  }
}
