import { useContext } from "react";
import Modal, { type ModalContentConfig } from "../../base/Modal";
import UserProgressContext from "../../store/userProgressContext";
import PasswordBox from "../../base/PasswordBox";
import EmailBox from "../../base/EmailBox";
import TextBox from "../../base/TextBox";
import { FaUser } from "react-icons/fa6";
import Button from "../../base/Button";

const registerModalConfig: ModalContentConfig = {
  imageUrl: "/images/register-image.png",
  headline: "ایجاد حساب کاربری",
  title: "یک حساب‌کاربری، یک قدم بزرگ برای سلامتی و سیاره.",
  footerText: "قبلا ثبت‌نام کردی؟",
  footerActionText: "وارد شو",
};

const Register = () => {
  const userProgressContext = useContext(UserProgressContext);

  return (
    <Modal
      open={userProgressContext.progress === "register"}
      onClose={
        userProgressContext.progress === "register"
          ? userProgressContext.hiddenRegister
          : undefined
      }
      config={{
        ...registerModalConfig,
        onFooterActionTextClick: () => userProgressContext.showLogin(),
      }}
    >
      <div className="flex flex-col gap-3 my-4">
        <TextBox placeHolder="نام" icon={<FaUser />} />
        <EmailBox placeHolder="ایمیل" hasIcon />
        <PasswordBox placeHolder="رمز عبور" hasIcon />
        <PasswordBox placeHolder="تکرار رمز عبور" hasIcon />
        <Button
          classes="btn btn-gradient !rounded-md mx-1 mt-2"
          title="ثبت‌نام"
        />
      </div>
    </Modal>
  );
};

export default Register;
