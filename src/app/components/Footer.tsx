import { AiOutlineMail } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { PiPlantLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { toPersianDigits } from "../../utils/public";

const Footer = () => {
  return (
    <div className="flex flex-col w-full items-center gap-8 justify-center mx-auto mt-28 py-10 xs:px-4 sm:px-10 md:px-10 lg:px-4 xl:px-40 bg-emerald-600 text-[#B0E3C3]">
      <div className="flex xs:flex-col md:flex-row w-full items-start xs:justify-center md:justify-between gap-10">
        <div className="flex flex-col items-center w-full gap-2">
          <div className="flex flex-row self-start items-center gap-1 w-full">
            <PiPlantLight
              strokeWidth={5}
              className="w-[56px] h-auto text-emerald-50"
            />
            <h6 className="text-emerald-50">رژیم سبز</h6>
          </div>
          <p className=" w-full">همراه شما در مسیر سلامتی و تغذیه بهتر</p>
        </div>
        <div className="w-full flex xs:flex-col sm:flex-row xs:gap-6 lg:gap-10 justify-end">
          <ul className="xs:w-auto sm:w-full flex flex-col gap-2 xs:items-center sm:items-start md:items-end text-xs">
            <Link to="/">
              <li className=" duration-200 hover:text-emerald-200">خانه</li>
            </Link>
            <Link to="/diets">
              <li className=" duration-200 hover:text-emerald-200">
                رژیم‌های غذایی
              </li>
            </Link>
            <Link to="/news">
              <li className=" duration-200 hover:text-emerald-200">اخبار</li>
            </Link>
            <Link to="/articles">
              <li className=" duration-200 hover:text-emerald-200">مقالات</li>
            </Link>
            <Link to="/podcasts">
              <li className=" duration-200 hover:text-emerald-200">پادکست</li>
            </Link>
          </ul>
          <div className="flex flex-col items-start self-start gap-2">
            <div className="flex flex-row gap-2 items-center">
              <AiOutlineMail className="text-2xl" />
              <Link to="" className="text-sm">
                info@gmail.com
              </Link>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <GrLocation className="text-2xl" />
              <p>تهران</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#B0E3C3] to-transparent" />
      <div className="flex xs:flex-col md:flex-row xs:gap-4 md:gap-0 w-full justify-between items-center">
        <p>&copy; {toPersianDigits(1404)} رژیم سبز، تمامی حقوق محفوظ است.</p>
        <p>
          Created with <span className="text-lg font-extrabold">&#9825;</span>{" "}
          in IRAN
        </p>
      </div>
    </div>
  );
};

export default Footer;
