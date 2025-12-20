import z, { string } from "zod";

export const verifyOtpFormSchema = z.object({
  otp: string()
    .nonempty("لطفا کد امنیتی را وارد کنید")
    .max(6, "کد امنیتی نمی‌تواند بیشتر از 6 رقم باشد"),
});

export type VerifyOtpForm = z.infer<typeof verifyOtpFormSchema>;
