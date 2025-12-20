import z from "zod";

export const registerFormSchema = z
  .object({
    fullName: z.string().nonempty("لطفا نام‌و‌نام‌خانوادگی را وارد کنید"),
    email: z
      .string()
      .nonempty("لطفا ایمیل را وارد کنید")
      .email("ایمیل معتبر نیست"),
    password: z
      .string()
      .nonempty("لطفا رمزعبور را وارد کنید")
      .min(8, "رمزعبور نمیتواند کمتر از 8 رقم باشد"),
    rePassword: z.string().nonempty("لطفا تکرار رمزعبور را وارد کنید"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "رمزعبور و تکرار آن یکسان نیستند",
    path: ["rePassword"],
  });

export type RegisterForm = z.infer<typeof registerFormSchema>;
