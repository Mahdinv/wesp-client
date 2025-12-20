import { FaArrowLeftLong, FaChevronRight } from "react-icons/fa6";
import Button from "../../../base/inputs/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  VerifyOtpForm,
  verifyOtpFormSchema,
} from "../../../schemas/verify-otp-form";
import { useMutation } from "@tanstack/react-query";
import {
  authForgetPassword,
  authVerifyOtp,
} from "../../../http/authentication";
import { toast } from "sonner";
import handleAxiosError from "../../../api/error-handling";
import { useNavigate } from "react-router-dom";
import TextBox from "../../../base/inputs/TextBox";
import { TbPassword } from "react-icons/tb";
import React, { useState } from "react";
import Timer from "../../../base/Timer";
import { motion } from "framer-motion";

const VerifyOtp: React.FC<{ onBackClick: () => void; email: string }> = (
  props
) => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(verifyOtpFormSchema) });

  const { mutate: forgetPasswordMutate, isPending: forgetPasswordPending } =
    useMutation({
      mutationFn: authForgetPassword,
      onSuccess: () => {
        toast.success("کد امنیتی به ایمیل شما ارسال شد");
        setTimer(true);
      },
      onError: (error) => {
        toast.error(handleAxiosError(error).message);
      },
    });

  const { mutate: verifyOtpMutate, isPending: verifyOtpPending } = useMutation({
    mutationFn: authVerifyOtp,
    onSuccess: () => {
      toast.success("اعتبارسنجی با موفقیت انجام شد");
      navigate("/auth/reset-password", { state: { email: props.email } });
    },
    onError: (error) => {
      toast.error(handleAxiosError(error).message);
    },
  });

  const onVerifyOtpFormHandler: SubmitHandler<VerifyOtpForm> = (data) =>
    verifyOtpMutate({ email: props.email, otp: data.otp });

  return (
    <motion.form
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onSubmit={handleSubmit(onVerifyOtpFormHandler)}
      className="xxs:w-full md:w-9/12 mx-auto flex flex-col justify-center xxs:gap-6 md:gap-10 md:py-10 xxs:px-4 sm:px-8 md:px-0"
    >
      <div className="relative md:py-2 lg:py-6">
        <h2 className="!font-peyda font-bold text-center">
          اعتبارسنجی کد امنیتی
        </h2>
        <span
          className={`absolute top-1/2 right-0 -translate-y-1/2 border ${
            timer ? "border-text-input" : "border-primary hover:scale-90"
          } rounded-full xxs:p-1 lg:p-2 duration-300`}
          onClick={!timer ? props.onBackClick : undefined}
        >
          <FaChevronRight
            className={`xxs:text-lg md:text-xl lg:text-2xl ${
              timer ? "border-text-field" : "text-primary-dark"
            }`}
            strokeWidth={0}
          />
        </span>
      </div>
      <div className="flex flex-col justify-center">
        <TextBox
          classes="!bg-[#F3F3F5]"
          label="کد امنیتی"
          icon={<TbPassword />}
          placeHolder="کد امنیتی خود را وارد کنید"
          {...register("otp")}
          error={errors.otp?.message}
        />
        {!!timer && (
          <Timer initialTime={120} onFinish={() => setTimer(false)} />
        )}
        {!timer && (
          <span
            className={`text-xs self-end mt-1 !font-peyda duration-300 ${
              !forgetPasswordPending
                ? "underline underline-offset-[6px] decoration-[2px] cursor-pointer"
                : undefined
            } ${
              verifyOtpPending
                ? "text-text-input"
                : "text-primary hover:text-primary-dark"
            }`}
            onClick={() =>
              !verifyOtpPending && forgetPasswordMutate(props.email)
            }
          >
            {forgetPasswordPending ? "در حال ارسال..." : "ارسال مجدد کد"}
          </span>
        )}
      </div>
      <Button
        classes="btn btn-primary w-full !rounded-2xl xxs:!py-2 sm:!py-0"
        title={verifyOtpPending ? "در حال ارسال..." : "اعتبارسنجی"}
        icon={<FaArrowLeftLong />}
        itemsGap={20}
        disable={verifyOtpPending || forgetPasswordPending}
      />
    </motion.form>
  );
};

export default VerifyOtp;
