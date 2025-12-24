import z from "zod";

export const demographicInformationFormSchema = z.object({
  email: z.email("لطفا ایمیل را وارد کنید"),
  fullName: z.string().nonempty("لطفا نام خود را وارد کنید"),
  age: z.string().nonempty("لطفا سن خود را وارد کنید"),
  gender: z.string().nonempty("لطفا جنسیت خود را انتخاب کنید"),
  properties: z.object({
    heightCm: z.preprocess((val) => {
      if (val === "" || val === null || val === undefined) return undefined;
      const num = typeof val === "string" ? Number(val) : val;
      return Number.isNaN(num) ? undefined : num;
    }, z.number("لطفا مقدار عدد وارد کنید").int("لطفا عدد صحیح وارد کنید (مثال: 175)").positive("عدد باید بزرگ‌تر از صفر باشد").optional()),
    weightKg: z.preprocess((val) => {
      if (val === "" || val === null || val === undefined) return undefined;
      const num = typeof val === "string" ? Number(val) : val;
      return Number.isNaN(num) ? undefined : num;
    }, z.number("لطفا مقدار عدد وارد کنید").positive("عدد باید بزرگ‌تر از صفر باشد").optional()),
    education: z.string().optional(),
    jobState: z.string().optional(),
    incomeBracket: z.string().optional(),
    dietIncomePercent: z.preprocess((val) => {
      if (val === "" || val === null || val === undefined) return undefined;
      const num = typeof val === "string" ? Number(val) : val;
      return Number.isNaN(num) ? undefined : num;
    }, z.number("لطفا مقدار عدد وارد کنید").positive("عدد باید بزرگ‌تر از صفر باشد").optional()),
    province: z.string().optional(),
    maritalStatus: z.string().optional(),
    familyMembers: z.preprocess((val) => {
      if (val === "" || val === null || val === undefined) return undefined;
      const num = typeof val === "string" ? Number(val) : val;
      return Number.isNaN(num) ? undefined : num;
    }, z.number("لطفا مقدار عدد وارد کنید").int("لطفا عدد صحیح وارد کنید (مثال: 2)").positive("عدد باید بزرگ‌تر از صفر باشد").optional()),
    sportDaysPerWeek: z.string().optional(),
  }),
});

export type DemographicInformationForm = z.infer<
  typeof demographicInformationFormSchema
>;
