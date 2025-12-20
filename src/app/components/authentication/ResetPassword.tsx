import { FaArrowLeftLong, FaChevronRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import PasswordBox from "../../../base/inputs/PasswordBox";
import { motion } from "framer-motion";
import Button from "../../../base/inputs/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import {
  ResetPasswordForm,
  resetPasswordFormSchema,
} from "../../../schemas/reset-password-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authResetPassword } from "../../../http/authentication";
import { toast } from "sonner";
import handleAxiosError from "../../../api/error-handling";

const ResetPassword: React.FC<{ email: string }> = (props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordForm>({
    defaultValues: { email: props.email },
    resolver: zodResolver(resetPasswordFormSchema),
  });
  const { mutate, isPending } = useMutation({
    mutationFn: authResetPassword,
    onSuccess: () => {
      toast.success("رمزعبور شما با موفقیت تغییر پیدا کرد");
      navigate("/auth/login");
    },
    onError: (error) => {
      toast.error(handleAxiosError(error).message);
    },
  });

  const onResetPasswordFormHandler: SubmitHandler<ResetPasswordForm> = (data) =>
    mutate(data);
  return (
    <motion.form
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onSubmit={handleSubmit(onResetPasswordFormHandler)}
      className="xxs:w-full md:w-9/12 mx-auto flex flex-col justify-center xxs:gap-6 md:py-10 xxs:px-4 sm:px-8 md:px-0"
    >
      <div className="relative lg:py-4">
        <h2 className="!font-peyda font-bold text-center">تغییر رمزعبور</h2>
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
      <div className="flex flex-col justify-center gap-6">
        <PasswordBox
          classes="!bg-[#F3F3F5]"
          label="رمز‌عبور جدید"
          placeHolder="رمز‌عبور جدید خود را وارد کنید"
          hasIcon
          {...register("newPassword")}
          error={errors.newPassword?.message}
        />
        <PasswordBox
          classes="!bg-[#F3F3F5]"
          label="تکرار رمزعبور جدید"
          placeHolder="تکرار رمز‌عبور جدید خود را وارد کنید"
          hasIcon
          {...register("rePassword")}
          error={errors.rePassword?.message}
        />
      </div>
      <Button
        classes="btn btn-primary w-full !rounded-2xl xxs:!py-2 sm:!py-0"
        title={isPending ? "در حال ارسال..." : "اعتبارسنجی"}
        icon={<FaArrowLeftLong />}
        itemsGap={20}
        disable={isPending}
      />
    </motion.form>
  );
};

export default ResetPassword;
