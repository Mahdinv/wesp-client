import { Link, useNavigate } from "react-router-dom";
import EmailBox from "../../../base/inputs/EmailBox";
import PasswordBox from "../../../base/inputs/PasswordBox";
import Button from "../../../base/inputs/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginForm, loginFormSchema } from "../../../schemas/login-form";
import { useMutation } from "@tanstack/react-query";
import { authLogin } from "../../../http/authentication";
import { toast } from "sonner";
import handleAxiosError from "../../../api/error-handling";
import { motion } from "framer-motion";
import { setLocalStorageTokens } from "../../../utils/token";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: authLogin,
    onSuccess: (res) => {
      toast.success("ورود شما با موفقیت انجام شد. خوش آمدید");
      setLocalStorageTokens(res.data.access, res.data.refresh);
      navigate("/");
    },
    onError: (error) => {
      toast.error(handleAxiosError(error).message);
    },
  });

  const onLoginFormHandler: SubmitHandler<LoginForm> = (data) => mutate(data);

  return (
    <motion.form
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onSubmit={handleSubmit(onLoginFormHandler)}
      className="xxs:w-full md:w-9/12 mx-auto flex flex-col justify-center xxs:gap-6 md:gap-10 md:py-10 xxs:px-4 sm:px-8 md:px-0"
    >
      <h2 className="!font-peyda font-bold text-center md:pt-6">
        ورود به حساب کاربری
      </h2>
      <div className="w-full flex flex-col items-center">
        <div className="w-full xxs:space-y-4 md:space-y-6">
          <EmailBox
            classes="!bg-[#F3F3F5]"
            label="ایمیل"
            placeHolder="ایمیل خود را وارد کنید"
            hasIcon
            {...register("email")}
            error={errors.email?.message}
          />
          <PasswordBox
            classes="!bg-[#F3F3F5]"
            label="رمز‌عبور"
            placeHolder="رمز‌عبور خود را وارد کنید"
            hasIcon
            {...register("password")}
            error={errors.password?.message}
          />
        </div>
        <Link
          className="text-primary text-xs self-end mt-1 !font-peyda duration-300 hover:text-primary-dark"
          to={"/auth/forget-password"}
        >
          فراموشی رمزعبور
        </Link>
      </div>
      <div className="w-full flex flex-col items-center xxs:gap-3 md:gap-2 2xl:gap-4">
        <Button
          classes="btn btn-primary w-full !rounded-2xl xxs:!py-2 sm:!py-0"
          title={isPending ? "در حال ورود..." : "ورود"}
          icon={<FaArrowLeftLong />}
          itemsGap={20}
          disable={isPending}
        />
        <Button
          type="button"
          classes="btn btn-outline w-full !border !rounded-2xl xxs:!py-2 sm:!py-0"
          title="ورود با حساب گوگل"
          icon={<FcGoogle />}
          iconClasses="xxs:text-xl md:text-3xl"
          itemsGap={15}
          disable
        />
        <small>
          حساب کاربری ندارید؟{" "}
          <Link
            to={"/auth/register"}
            className="text-primary !font-peyda underline underline-offset-[6px] decoration-[2px] duration-300 hover:text-primary-dark"
          >
            ایجاد حساب جدید
          </Link>
        </small>
      </div>
    </motion.form>
  );
};

export default Login;
