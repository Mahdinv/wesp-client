import z from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty("لطفا ایمیل را وارد کنید")
    .email("ایمیل معتبر نیست"),
  password: z.string().nonempty("لطفا رمزعبور را وارد کنید"),
});

export type LoginForm = z.infer<typeof loginFormSchema>;
