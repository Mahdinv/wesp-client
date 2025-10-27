import { useContext, useEffect } from "react";
import Modal, { type ModalContentConfig } from "../../base/Modal";
import UserProgressContext from "../../store/userProgressContext";
import { Form, useActionData, useNavigate } from "react-router-dom";
import EmailBox from "../../base/EmailBox";
import NumberBox from "../../base/NumberBox";
import Button from "../../base/Button";
import PasswordBox from "../../base/PasswordBox";

const resetPasswordModalConfig: ModalContentConfig = {
  imageUrl: "/images/login-image.png",
  headline: "تغییر رمز عبور",
  title: "ببینم بلدی یه رمزی بذاری که فراموش نکنی :)",
  footerText: "کد امنیتی منقضی شده؟",
  footerActionText: "دریافت کد امنیتی",
};

const ResetPassword = () => {
  const navigate = useNavigate();
  const { progress, hiddenResetPassword, showForgetPassword, showLogin } =
    useContext(UserProgressContext);
  const data = useActionData();
  useEffect(() => {
    if (
      (!!data || data !== undefined) &&
      data.response.status === 200 &&
      progress === "reset-password"
    ) {
      debugger;
      showLogin();
      navigate("?mode=login");
    }
  }, [data, progress]);
  return (
    <Modal
      open={progress === "reset-password"}
      onClose={progress === "reset-password" ? hiddenResetPassword : undefined}
      config={{
        ...resetPasswordModalConfig,
        onFooterActionTextClick: () => showForgetPassword(),
      }}
    >
      <Form method="post" className="flex flex-col gap-3 my-4 w-full">
        <EmailBox placeHolder="ایمیل" name="email" />
        <NumberBox placeHolder="کد امنیتی" name="otp" />
        <PasswordBox placeHolder="رمز عبور جدید" name="new-password" />
        <PasswordBox placeHolder="تکرار رمز عبور جدید" name="re-new-password" />
        <Button classes="btn btn-gradient !rounded-md mx-1 mt-2" title="ثبت" />
      </Form>
    </Modal>
  );
};

export default ResetPassword;
