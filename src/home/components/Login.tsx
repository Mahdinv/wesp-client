import { useContext, useEffect } from "react";
import Modal, { type ModalContentConfig } from "../../base/Modal";
import UserProgressContext from "../../store/userProgressContext";
import EmailBox from "../../base/EmailBox";
import PasswordBox from "../../base/PasswordBox";
import Button from "../../base/Button";
import { Form, Link, useActionData, useNavigate } from "react-router-dom";

const loginModalConfig: ModalContentConfig = {
  imageUrl: "/images/login-image.png",
  headline: "خوش اومدی",
  title: "با ورودت، سفرت به دنیای سلامت و محیط‌زیست آغاز می‌شه.",
  footerText: "حساب کاربری نداری؟",
  footerActionText: "ثبت‌نام",
};

const Login = () => {
  const navigate = useNavigate();
  const { progress, setProgress, setAccessToken } =
    useContext(UserProgressContext);
  const res = useActionData();
  useEffect(() => {
    if (!!res || (res !== undefined && res.mode === "login")) {
      if (res.success) {
        navigate("/", { replace: true });
        setProgress("");
        setAccessToken(res.data.access);
      }
    }
  }, [res, setProgress, navigate, setAccessToken]);
  return (
    <Modal
      open={progress === "login"}
      onClose={progress === "login" ? () => setProgress("") : undefined}
      config={{
        ...loginModalConfig,
        onFooterActionTextClick: () => setProgress("register"),
      }}
    >
      <Form method="post" className="flex flex-col gap-3 my-4">
        <EmailBox placeHolder="ایمیل" hasIcon name="email" />
        <PasswordBox placeHolder="رمز عبور" hasIcon name="password" />
        <Link to="/?mode=forget-password">
          <small
            className="hover:cursor-pointer font-bold duration-300 hover:underline underline-offset-4 decoration-2"
            onClick={() => {
              setProgress("forget-password");
            }}
          >
            رمز عبور رو فراموش کردی؟
          </small>
        </Link>
        <Button classes="btn btn-gradient !rounded-md mx-1 mt-2" title="ورود" />
      </Form>
    </Modal>
  );
};

export default Login;
