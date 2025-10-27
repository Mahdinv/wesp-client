import { useContext, useEffect } from "react";
import Modal, { type ModalContentConfig } from "../../base/Modal";
import UserProgressContext from "../../store/userProgressContext";
import PasswordBox from "../../base/PasswordBox";
import EmailBox from "../../base/EmailBox";
import TextBox from "../../base/TextBox";
import { FaUser } from "react-icons/fa6";
import Button from "../../base/Button";
import { Form, useActionData, useNavigate } from "react-router-dom";

const registerModalConfig: ModalContentConfig = {
  imageUrl: "/images/register-image.png",
  headline: "ایجاد حساب کاربری",
  title: "یک حساب‌کاربری، یک قدم بزرگ برای سلامتی و سیاره.",
  footerText: "قبلا ثبت‌نام کردی؟",
  footerActionText: "وارد شو",
};

const Register = () => {
  const navigate = useNavigate();
  const { progress, showLogin, hiddenRegister } =
    useContext(UserProgressContext);

  const data = useActionData();
  useEffect(() => {
    if (!!data || (data !== undefined && data.mode === "register")) {
      if (data.response.status === 201) {
        showLogin();
        navigate("?mode=login");
      }
    }
  }, [data, showLogin, navigate]);

  return (
    <Modal
      open={progress === "register"}
      onClose={progress === "register" ? hiddenRegister : undefined}
      config={{
        ...registerModalConfig,
        onFooterActionTextClick: () => showLogin(),
      }}
    >
      <Form method="post" className="flex flex-col gap-3 my-4">
        <div className="flex flex-row">
          <TextBox placeHolder="نام" icon={<FaUser />} name="firstName" />
          <TextBox
            placeHolder="نام‌خانوادگی"
            icon={<FaUser />}
            name="lastName"
          />
        </div>
        <EmailBox placeHolder="ایمیل" hasIcon name="email" />
        <PasswordBox placeHolder="رمز عبور" hasIcon name="password" />
        <PasswordBox placeHolder="تکرار رمز عبور" hasIcon name="re-password" />
        <Button
          classes="btn btn-gradient !rounded-md mx-1 mt-2"
          title="ثبت‌نام"
        />
      </Form>
    </Modal>
  );
};

export default Register;
