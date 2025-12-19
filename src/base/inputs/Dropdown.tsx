import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSpeedometer, PiUserCircleLight } from "react-icons/pi";
import UserProgressContext from "../../store/userProgressContext";
import logout from "../../utils/auth";

const Dropdown: React.FC<{ onClick: () => void }> = (props) => {
  const { setAccessToken } = useContext(UserProgressContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setShowDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center gap-2 w-full"
    >
      <div
        className="w-full flex flex-row xxs:gap-9 sm:gap-12 xl:gap-16 bg-primary text-white xxs:py-2 xl:py-3 xxs:px-3 sm:px-2 md:px-3 rounded-lg duration-300 hover:bg-primary-dark"
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <h6 className="text-white font-medium">سید مهدی نوردی</h6>
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: showDropdown ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-auto self-center xxs:text-xs md:text-lg lg:text-xl cursor-pointer"
        >
          <FaAngleUp />
        </motion.span>
      </div>
      <AnimatePresence initial={false}>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showDropdown ? 1 : 0 }}
            exit={{ display: "hidden", opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-1/2 translate-y-10 w-full flex flex-col items-center bg-white shadow-lg rounded-lg"
          >
            <div className="flex flex-col md:gap-1 items-center py-2">
              <img
                src="/images/user-profile.jpg"
                alt="user-profile"
                className="w-[60%] aspect-square rounded-full object-cover mb-2 xxs:border-2 md:border-4 border-green-500"
              />
              <label className="md:text-xs lg:text-sm font-bold font-yekan text-center">
                پارسا متینی
              </label>
              <small className="font-yekan">info@gmail.com</small>
            </div>
            <ul className="w-full flex flex-col items-center self-start border border-t-[#A8A8A8]">
              <li className="w-full flex flex-row items-center gap-2 xxs:px-2 xxs:py-2 md:px-2 md:py-2 duration-300 bg-[#F3F3F5] hover:bg-[#D8D8D8]">
                <PiSpeedometer
                  className="xxs:text-base sm:text-lg md:text-xl lg:text-2xl"
                  strokeWidth={2}
                />
                <label className="md:text-xs lg:text-sm font-medium !font-yekan">
                  داشبورد
                </label>
              </li>
              <li className="w-full flex flex-row items-center gap-2 xxs:px-2 xxs:py-2 md:px-2 md:py-2 duration-300 bg-[#F3F3F5] hover:bg-[#D8D8D8]">
                <PiUserCircleLight
                  className="xxs:text-base sm:text-lg md:text-xl lg:text-2xl"
                  strokeWidth={2}
                />
                <label className="md:text-xs lg:text-sm font-medium !font-yekan">
                  پروفایل
                </label>
              </li>
              <li className="w-full flex flex-row items-center gap-2 xxs:px-2 xxs:py-2 md:px-2 md:py-2 duration-300 bg-[#F3F3F5] hover:bg-[#D8D8D8]">
                <IoSettingsOutline
                  className="xxs:text-base sm:text-lg md:text-xl lg:text-2xl"
                  strokeWidth={2}
                />
                <label className="md:text-xs lg:text-sm font-medium !font-yekan">
                  تنظیمات
                </label>
              </li>
              <li
                className="w-full flex flex-row items-center gap-2 xxs:px-2 xxs:py-2 md:px-2 md:py-2 duration-300 bg-[#F3F3F5] hover:bg-[#D8D8D8] text-red-800 rounded-b-lg"
                onClick={props.onClick}
              >
                <IoIosLogOut
                  className="xxs:text-base sm:text-lg md:text-xl lg:text-2xl"
                  strokeWidth={2}
                />
                <label className="md:text-xs lg:text-sm font-medium !font-yekan">
                  خروج
                </label>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
