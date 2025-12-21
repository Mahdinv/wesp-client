import PasswordBox from "../../../base/inputs/PasswordBox";
import EmailBox from "../../../base/inputs/EmailBox";
import TextBox from "../../../base/inputs/TextBox";
import { FaArrowLeftLong, FaChevronRight } from "react-icons/fa6";
import Button from "../../../base/inputs/Button";
import { Link, useNavigate } from "react-router-dom";
import { PiUserBold } from "react-icons/pi";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterForm,
  registerFormSchema,
} from "../../../schemas/register-form";
import { useMutation } from "@tanstack/react-query";
import { authRegister } from "../../../http/authentication";
import { toast } from "sonner";
import handleAxiosError from "../../../api/error-handling";
import { useUserStore } from "../../../store/user-store";
import { motion } from "framer-motion";
import { setLocalStorageTokens } from "../../../utils/token";

const Register = () => {
  const navigate = useNavigate();
  const setToken = useUserStore((state) => state.setToken);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: authRegister,
    onSuccess: (res) => {
      toast.success("عملیات‌ ثبت‌نام شما با موفقیت انجام شد");
      setLocalStorageTokens(res.data.access, res.data.refresh);
      setToken(res.data.access, res.data.refresh);
      navigate("/");
    },
    onError: (error) => {
      toast.error(handleAxiosError(error).message);
    },
  });

  const onRegisterFormHandler: SubmitHandler<RegisterForm> = (data) =>
    mutate(data);

  return (
    <motion.form
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onSubmit={handleSubmit(onRegisterFormHandler)}
      className="xxs:w-full md:w-9/12 mx-auto flex flex-col justify-center gap-6 xxs:py-8 md:py-10 xxs:px-4 sm:px-8 md:px-0"
    >
      <div className="relative md:py-2 lg:py-6">
        <h2 className="!font-peyda font-bold text-center">ایجاد حساب کاربری</h2>
        <Link
          to={"/auth/login"}
          className="absolute top-1/2 right-0 -translate-y-1/2 border border-primary rounded-full xxs:p-1 lg:p-2 duration-300 hover:scale-90"
        >
          <FaChevronRight
            className="xxs:text-lg md:text-xl lg:text-2xl text-primary-dark"
            strokeWidth={0}
          />
        </Link>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full space-y-4">
          <TextBox
            classes="!bg-[#F3F3F5]"
            label="نام و نام‌خانوادگی"
            placeHolder="مثال: فریدون پاکزاد"
            icon={<PiUserBold strokeWidth={1} />}
            {...register("fullName")}
            error={errors.fullName?.message}
          />
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
          <PasswordBox
            classes="!bg-[#F3F3F5]"
            label="تکرار رمزعبور"
            placeHolder="تکرار رمز‌عبور خود را وارد کنید"
            hasIcon
            {...register("rePassword")}
            error={errors.rePassword?.message}
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center xxs:gap-3 md:gap-2 2xl:gap-4">
        <Button
          classes="btn btn-primary w-full !rounded-2xl xxs:!py-2 sm:!py-0"
          title={isPending ? "در حال ارسال..." : "ثبت‌نام"}
          icon={<FaArrowLeftLong />}
          itemsGap={20}
          disable={isPending}
        />
        <small>
          قبلا ثبت‌نام کرده‌اید؟{" "}
          <Link
            to={"/auth/login"}
            className="text-primary !font-peyda underline underline-offset-[6px] decoration-[2px] duration-300 hover:text-primary-dark"
          >
            ورود به حساب
          </Link>
        </small>
      </div>
    </motion.form>
  );
};

export default Register;
