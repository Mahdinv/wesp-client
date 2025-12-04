import PasswordBox from "../../../base/inputs/PasswordBox";
import EmailBox from "../../../base/inputs/EmailBox";
import TextBox from "../../../base/inputs/TextBox";
import { FaUser } from "react-icons/fa6";
import Button from "../../../base/inputs/Button";
import { Form } from "react-router-dom";

const Register = () => {
  return (
    <Form method="post" className="flex flex-col gap-3 my-4">
      <div className="flex flex-row">
        <TextBox placeHolder="نام" icon={<FaUser />} name="firstName" />
        <TextBox placeHolder="نام‌خانوادگی" icon={<FaUser />} name="lastName" />
      </div>
      <EmailBox placeHolder="ایمیل" hasIcon name="email" />
      <PasswordBox placeHolder="رمز عبور" hasIcon name="password" />
      <PasswordBox placeHolder="تکرار رمز عبور" hasIcon name="re-password" />
      <Button
        classes="btn btn-gradient !rounded-md mx-1 mt-2"
        title="ثبت‌نام"
      />
    </Form>
  );
};

export default Register;
