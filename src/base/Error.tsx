import { useNavigate } from "react-router-dom";
import Button from "./inputs/Button";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 items-center mx-auto xs:w-full xl:w-2/5 mt-20">
      <h3 className="text-black">متاسفانه صفحه مورد نظر پیدا نشد</h3>
      <img src="/images/not-found.png" alt="not-found-image" />
      <Button
        classes="btn btn-primary !rounded-2xl"
        title="بازگشت به صفحه اصلی"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Error;
