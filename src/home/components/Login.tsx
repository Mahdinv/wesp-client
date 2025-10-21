import { useContext } from "react";
import Modal, { type ModalContentConfig } from "../../base/Modal";
import UserProgressContext from "../../store/userProgressContext";
import EmailBox from "../../base/EmailBox";
import PasswordBox from "../../base/PasswordBox";
import Button from "../../base/Button";

const loginModalConfig: ModalContentConfig = {
  imageUrl: "/images/login-image.png",
  headline: "خوش اومدی",
  title: "با ورودت، سفرت به دنیای سلامت و محیط‌زیست آغاز می‌شه.",
  footerText: "حساب کاربری نداری؟",
  footerActionText: "ثبت‌نام",
};

const Login = () => {
  const userProgressContext = useContext(UserProgressContext);
  return (
    <Modal
      open={userProgressContext.progress === "login"}
      onClose={
        userProgressContext.progress === "login"
          ? userProgressContext.hiddenLogin
          : undefined
      }
      config={{
        ...loginModalConfig,
        onFooterActionTextClick: () => userProgressContext.showRegister(),
      }}
    >
      <div className="flex flex-col gap-3 my-4">
        <EmailBox placeHolder="ایمیل" hasIcon />
        <PasswordBox placeHolder="رمز عبور" hasIcon />
        <small className="hover:cursor-pointer font-bold duration-300 hover:underline underline-offset-4 decoration-2">
          رمز عبور رو فراموش کردی؟
        </small>
        <Button classes="btn btn-gradient !rounded-md mx-1 mt-2" title="ورود" />
      </div>
    </Modal>
  );
};

export default Login;
