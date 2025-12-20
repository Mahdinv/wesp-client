import z, { email, string } from "zod";

export const resetPasswordFormSchema = z
  .object({
    email: email("لطفا ایمیل را وارد کنید"),
    newPassword: string()
      .nonempty("لطفا رمزعبور جدید را وارد کنید")
      .min(8, "رمزعبور نمیتواند کمتر از 8 رقم باشد"),
    rePassword: string().nonempty("لطفا تکرار رمزعبور را وارد کنید"),
  })
  .refine((data) => data.newPassword === data.rePassword, {
    message: "رمزعبور جدید و تکرار آن یکسان نیستند",
    path: ["rePassword"],
  });

export type ResetPasswordForm = z.infer<typeof resetPasswordFormSchema>;
