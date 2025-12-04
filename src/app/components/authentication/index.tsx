import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Modal, { ModalContentConfig } from "../../../base/Modal";
import { useEffect, useState } from "react";

const loginModalConfig: ModalContentConfig = {
  imageUrl: "/images/login-image.png",
  headline: "خوش اومدی",
  title: "با ورودت، سفرت به دنیای سلامت و محیط‌زیست آغاز می‌شه.",
  footerText: "حساب کاربری نداری؟",
  footerActionText: "ثبت‌نام",
};

const registerModalConfig: ModalContentConfig = {
  imageUrl: "/images/register-image.png",
  headline: "ایجاد حساب کاربری",
  title: "یک حساب‌کاربری، یک قدم بزرگ برای سلامتی و سیاره.",
  footerText: "قبلا ثبت‌نام کردی؟",
  footerActionText: "وارد شو",
};

const resetPasswordModalConfig: ModalContentConfig = {
  imageUrl: "/images/login-image.png",
  headline: "تغییر رمز عبور",
  title: "ببینم بلدی یه رمزی بذاری که فراموش نکنی :)",
  footerText: "رمزعبور یادت اومد؟",
  footerActionText: "ورود",
};

const Authentication = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthRoute =
    location.pathname.includes("login") ||
    location.pathname.includes("register") ||
    location.pathname.includes("reset-password");

  useEffect(() => {
    setOpen(isAuthRoute);
  }, [isAuthRoute]);

  const activeConfig = location.pathname.includes("login")
    ? loginModalConfig
    : location.pathname.includes("register")
      ? registerModalConfig
      : location.pathname.includes("reset-password")
        ? resetPasswordModalConfig
        : loginModalConfig;

  function handleFooterActionClick() {
    navigate(
      `/auth/${location.pathname.includes("register") || location.pathname.includes("reset-password") ? "login" : "register"}`
    );
  }

  function handleClose() {
    setOpen(false);
    setTimeout(() => {
      navigate("/");
    }, 200);
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      config={{
        ...activeConfig,
        onFooterActionTextClick: handleFooterActionClick,
      }}
    >
      <Outlet />
    </Modal>
  );
};

export default Authentication;
