import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../../base/inputs/Button";
import EmailBox from "../../../base/inputs/EmailBox";
import {
  ForgetPasswordForm,
  forgetPasswordFormSchema,
} from "../../../schemas/forget-password-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useMutation } from "@tanstack/react-query";
import { authForgetPassword } from "../../../http/authentication";
import { toast } from "sonner";
import handleAxiosError from "../../../api/error-handling";
import { useState } from "react";
import VerifyOtp from "./VerifyOtp";
import { motion } from "framer-motion";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [otpIsSent, setOtpIsSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetPasswordForm>({
    resolver: zodResolver(forgetPasswordFormSchema),
  });
  const { mutate, isPending } = useMutation({
    mutationFn: authForgetPassword,
    onSuccess: () => {
      toast.success("کد امنیتی به ایمیل شما ارسال شد");
      setOtpIsSent(true);
    },
    onError: (error) => {
      toast.error(handleAxiosError(error).message);
    },
  });

  const onForgetPasswordFormHandler: SubmitHandler<ForgetPasswordForm> = (
    data
  ) => {
    setEmail(data.email);
    mutate(data.email);
  };

  return (
    <>
      {!otpIsSent && (
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onSubmit={handleSubmit(onForgetPasswordFormHandler)}
          className="xxs:w-full md:w-9/12 mx-auto flex flex-col justify-center xxs:gap-6 md:gap-10 md:py-10 xxs:px-4 sm:px-8 md:px-0"
        >
          <h2 className="!font-peyda font-bold text-center md:pt-6">
            بازیابی رمزعبور
          </h2>
          <EmailBox
            classes="!bg-[#F3F3F5]"
            label="ایمیل"
            placeHolder="ایمیل خود را وارد کنید"
            hasIcon
            {...register("email")}
            error={errors.email?.message}
          />
          <Button
            classes="btn btn-primary w-full !rounded-2xl xxs:!py-2 sm:!py-0"
            title={isPending ? "در حال ارسال..." : "ارسال کد تایید"}
            icon={<FaArrowLeftLong />}
            itemsGap={20}
            disable={isPending}
          />
        </motion.form>
      )}

      {otpIsSent && (
        <VerifyOtp onBackClick={() => setOtpIsSent(false)} email={email} />
      )}
    </>
  );
};

export default ForgetPassword;
