import { Link } from "react-router-dom";
import EmailBox from "../../../base/inputs/EmailBox";
import PasswordBox from "../../../base/inputs/PasswordBox";
import Button from "../../../base/inputs/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="xxs:w-full md:w-9/12 mx-auto flex flex-col justify-center gap-6 md:py-10 xxs:px-4 sm:px-8 md:px-0">
      <h2 className="!font-peyda font-bold text-center md:pt-6">
        ورود به حساب کاربری
      </h2>
      <div className="w-full flex flex-col items-center">
        <div className="w-full space-y-4">
          <EmailBox
            classes="!bg-[#F3F3F5] xxs:!py-2 xl:!py-3 2xl:!py-4"
            label="ایمیل"
            placeHolder="ایمیل خود را وارد کنید"
            hasIcon
            name="email"
          />
          <PasswordBox
            classes="!bg-[#F3F3F5] xxs:!py-2 xl:!py-3 2xl:!py-4"
            label="رمز‌عبور"
            placeHolder="رمز‌عبور خود را وارد کنید"
            hasIcon
            name="password"
          />
        </div>
        <Link
          className="text-primary text-xs self-end mt-1 !font-peyda duration-300 hover:text-primary-dark"
          to={"/auth/reset-password"}
        >
          فراموشی رمزعبور
        </Link>
      </div>
      <div className="w-full flex flex-col items-center xxs:gap-3 md:gap-2 2xl:gap-4">
        <Button
          classes="btn btn-primary w-full !rounded-2xl xxs:!py-2 sm:!py-0"
          title="ورود"
          icon={<FaArrowLeftLong />}
          itemsGap={20}
        />
        <Button
          classes="btn btn-outline w-full !border !rounded-2xl xxs:!py-2 sm:!py-0"
          title="ورود با حساب گوگل"
          icon={<FcGoogle />}
          iconClasses="xxs:text-xl md:text-3xl"
          itemsGap={15}
        />
        <small>
          حساب کاربری ندارید؟{" "}
          <Link
            to={"/auth/register"}
            className="text-primary !font-peyda underline underline-offset-[6px] decoration-[2px] duration-300 hover:text-primary-dark"
          >
            ایجاد حساب جدید
          </Link>
        </small>
      </div>
    </div>
  );
};

export default Login;
