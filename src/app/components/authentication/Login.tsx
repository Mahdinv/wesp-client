import EmailBox from "../../../base/inputs/EmailBox";
import PasswordBox from "../../../base/inputs/PasswordBox";
import Button from "../../../base/inputs/Button";
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <Form method="post" className="flex flex-col gap-3 my-4">
      <EmailBox placeHolder="ایمیل" hasIcon name="email" />
      <PasswordBox placeHolder="رمز عبور" hasIcon name="password" />
      <Link to="/auth/reset-password">
        <small className="hover:cursor-pointer font-bold duration-300 hover:underline underline-offset-4 decoration-2">
          رمز عبور رو فراموش کردی؟
        </small>
      </Link>
      <Button classes="btn btn-gradient !rounded-md mx-1 mt-2" title="ورود" />
    </Form>
  );
};

export default Login;
