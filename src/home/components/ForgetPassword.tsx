import { useContext, useEffect } from "react";
import Modal, { type ModalContentConfig } from "../../base/Modal";
import UserProgressContext from "../../store/userProgressContext";
import { Form, useActionData, useNavigate } from "react-router-dom";
import EmailBox from "../../base/EmailBox";
import NumberBox from "../../base/NumberBox";
import Button from "../../base/Button";

const forgetPasswordModalConfig: ModalContentConfig = {
  imageUrl: "/images/login-image.png",
  headline: "احراز هویت",
  title: "قبل از تغییر رمز، باید احراز هویت انجام دهید",
  footerText: "قصد تغییر رمز نداری؟",
  footerActionText: "ورود",
};

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { progress, setProgress } = useContext(UserProgressContext);
  const data = useActionData();
  useEffect(() => {
    if (
      (!!data || data !== undefined) &&
      !!data.actionType &&
      data.actionType === "verify-otp" &&
      data.response.status === 200 &&
      progress === "forget-password"
    ) {
      setProgress("reset-password");
      navigate("?mode=reset-password");
    }
  }, [data, progress, setProgress, navigate]);
  return (
    <Modal
      open={progress === "forget-password"}
      onClose={
        progress === "forget-password" ? () => setProgress("") : undefined
      }
      config={{
        ...forgetPasswordModalConfig,
        onFooterActionTextClick: () => setProgress("login"),
      }}
    >
      <Form method="post" className="flex flex-col gap-3 my-4 w-full">
        <div className="flex flex-row items-center w-full gap-2">
          <div className="flex-grow">
            <EmailBox placeHolder="آدرس ایمیل" name="email" hasIcon />
          </div>
          <button
            type="submit"
            name="sendOtp"
            value="sendOtp"
            className="hover:cursor-pointer font-bold duration-300 hover:underline underline-offset-4 decoration-2"
          >
            ارسال کد
          </button>
        </div>
        <NumberBox placeHolder="کد امنیتی" name="otp" />
        <Button
          classes="btn btn-gradient !rounded-md mx-1 mt-2"
          title="احراز هویت"
        />
      </Form>
    </Modal>
  );
};

export default ForgetPassword;
