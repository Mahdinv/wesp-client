import { useState } from "react";
import { Form } from "react-router-dom";
import EmailBox from "../../../base/inputs/EmailBox";
import NumberBox from "../../../base/inputs/NumberBox";
import Button from "../../../base/inputs/Button";
import PasswordBox from "../../../base/inputs/PasswordBox";
import Timer from "../../../base/Timer";

const ResetPassword = () => {
  const [timer, setTimer] = useState(
    localStorage.getItem("otpTimer") ? true : false
  );

  function onFinishTime() {
    setTimer(false);
  }

  return (
    <Form method="post" className="flex flex-col gap-3 my-4 w-full">
      <EmailBox placeHolder="ایمیل" name="email" />
      <PasswordBox placeHolder="رمز عبور جدید" name="new-password" />
      <PasswordBox placeHolder="تکرار رمز عبور جدید" name="re-new-password" />
      <div className="flex flex-row items-center w-full gap-2">
        <div className="flex-grow">
          <NumberBox placeHolder="کد امنیتی" name="otp" />
        </div>
        {!timer && (
          <Button
            name="sendOtp"
            value="sendOtp"
            classes="btn !text-[12px] !rounded-md !px-4 !py-3"
            title="ارسال کد"
          />
        )}
        {timer && <Timer initialTime={120} onFinish={onFinishTime} />}
      </div>
      <Button classes="btn btn-gradient !rounded-md mx-1 mt-2" title="ثبت" />
    </Form>
  );
};

export default ResetPassword;
