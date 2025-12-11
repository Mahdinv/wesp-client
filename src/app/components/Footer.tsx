import { AiOutlineMail } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { PiPlantLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { toPersianDigits } from "../../utils/public";

const Footer = () => {
  return (
    <div className="flex flex-col w-full items-center gap-8 justify-center mx-auto mt-28 py-8 xxs:px-4 sm:px-10 md:px-20 lg:px-24 bg-primary-darker text-light-primary">
      <div className="flex xxs:flex-col md:flex-row w-full items-start xs:justify-center md:justify-between xxs:gap-4 sm:gap-6 md:gap-10">
        <div className="flex sm:flex-row md:flex-col items-center w-full gap-2">
          <div className="flex flex-row self-start items-center xxs:justify-center sm:justify-start gap-1 w-full">
            <PiPlantLight
              strokeWidth={5}
              className="xxs:w-[40px] sm:w-[56px] 2xl:w-[70px] h-auto text-emerald-50"
            />
            <h2 className="text-emerald-50 font-bold font-peyda">
              رژیم پایدار
            </h2>
          </div>
          <h6 className="w-full xxs:hidden sm:block sm:text-left md:text-right">
            همراه شما در مسیر سلامتی و تغذیه بهتر
          </h6>
        </div>
        <div className="w-full flex flex-row xxs:gap-2 lg:gap-10 xxs:justify-between sm:justify-end">
          <ul className="xs:w-auto sm:w-full flex xxs:flex-row md:flex-col xxs:gap-1 xs:gap-2 sm:gap-4 md:gap-3 lg:gap-2 xl:gap-4 xs:items-center xxs:items-center md:items-end">
            <Link to="/">
              <li>
                <h5 className="duration-200 text-white hover:text-dark-light-primary">
                  صفحه اصلی
                </h5>
              </li>
            </Link>
            <Link to="/diets">
              <li>
                <h5 className="duration-200 text-white hover:text-dark-light-primary">
                  پادکست
                </h5>
              </li>
            </Link>
            <Link to="/news">
              <li>
                <h5 className="duration-200 text-white hover:text-dark-light-primary">
                  مجله سلامت
                </h5>
              </li>
            </Link>
            <Link to="/articles">
              <li>
                <h5 className="duration-200 text-white hover:text-dark-light-primary">
                  درباره ما
                </h5>
              </li>
            </Link>
          </ul>
          <div className="flex flex-col items-start self-start xxs:gap-1 md:gap-3">
            <div className="flex flex-row gap-2 items-center">
              <AiOutlineMail className="text-2xl" />

              <h5 className="text-white font-medium">info@gmail.com</h5>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <GrLocation className="text-2xl" />
              <h5 className="text-white font-medium">تهران</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#B0E3C3] to-transparent"></div>
      <div className="flex flex-row xs:gap-4 md:gap-0 w-full justify-between items-center">
        <h5 className="text-white">
          &copy; {toPersianDigits(1404)} رژیم سبز، تمامی حقوق محفوظ است.
        </h5>
        <h5 className="text-white font-yekan">
          Created with <span className="text-lg font-extrabold">&#9825;</span>{" "}
          in IRAN
        </h5>
      </div>
    </div>
  );
};

export default Footer;
