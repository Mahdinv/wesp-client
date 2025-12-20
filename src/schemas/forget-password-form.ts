import z, { string } from "zod";

export const forgetPasswordFormSchema = z.object({
  email: string().nonempty("لطفا ایمیل را وارد کنید").email("ایمیل معتبر نیست"),
});

export type ForgetPasswordForm = z.infer<typeof forgetPasswordFormSchema>;
