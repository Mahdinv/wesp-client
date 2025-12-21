import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSpeedometer, PiUserCircleLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Dropdown: React.FC<{
  fullName?: string;
  email?: string;
  isFetchingData: boolean;
  onClick: () => void;
}> = (props) => {
  const navigate = useNavigate();
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
        className={`w-full flex flex-row xxs:gap-9 sm:gap-12 xl:gap-16 bg-primary text-white xxs:py-2 xl:py-3 rounded-lg duration-300 hover:bg-primary-dark cursor-pointer ${
          props.isFetchingData
            ? "xxs:px-12 sm:px-16 md:px-24"
            : "xxs:px-3 sm:px-2 md:px-3"
        }`}
        onClick={() =>
          !props.isFetchingData && setShowDropdown((prev) => !prev)
        }
      >
        {!props.isFetchingData && (
          <>
            <h6 className="text-white font-medium">{props.fullName}</h6>
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: showDropdown ? 180 : 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-auto self-center xxs:text-xs md:text-lg lg:text-xl cursor-pointer"
            >
              <FaAngleUp />
            </motion.span>
          </>
        )}
        {props.isFetchingData && (
          <div className="relative xxs:w-4 md:w-6 aspect-square rounded-full animate-spin bg-[conic-gradient(from_0deg,rgba(255,255,255,1),rgba(255,255,255,0.9),transparent_90%)]">
            <div className="absolute xxs:inset-[2px] md:inset-[4px] bg-primary rounded-full"></div>
          </div>
        )}
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
                {props.fullName}
              </label>
              <small className="font-yekan">{props.email}</small>
            </div>
            <ul className="w-full flex flex-col items-center self-start border border-t-[#A8A8A8]">
              <li
                className="w-full flex flex-row items-center gap-2 xxs:px-2 xxs:py-2 md:px-2 md:py-2 duration-300 bg-[#F3F3F5] hover:bg-[#D8D8D8] cursor-pointer"
                onClick={() => {
                  navigate("/game-workflow");
                  setShowDropdown(false);
                }}
              >
                <PiSpeedometer
                  className="xxs:text-base sm:text-lg md:text-xl lg:text-2xl"
                  strokeWidth={2}
                />
                <label className="md:text-xs lg:text-sm font-medium !font-yekan cursor-pointer">
                  داشبورد
                </label>
              </li>
              <li className="w-full flex flex-row items-center gap-2 xxs:px-2 xxs:py-2 md:px-2 md:py-2 duration-300 bg-[#F3F3F5] hover:bg-[#D8D8D8] cursor-pointer">
                <PiUserCircleLight
                  className="xxs:text-base sm:text-lg md:text-xl lg:text-2xl"
                  strokeWidth={2}
                />
                <label className="md:text-xs lg:text-sm font-medium !font-yekan cursor-pointer">
                  پروفایل
                </label>
              </li>
              <li className="w-full flex flex-row items-center gap-2 xxs:px-2 xxs:py-2 md:px-2 md:py-2 duration-300 bg-[#F3F3F5] hover:bg-[#D8D8D8] cursor-pointer">
                <IoSettingsOutline
                  className="xxs:text-base sm:text-lg md:text-xl lg:text-2xl"
                  strokeWidth={2}
                />
                <label className="md:text-xs lg:text-sm font-medium !font-yekan cursor-pointer">
                  تنظیمات
                </label>
              </li>
              <li
                className="w-full flex flex-row items-center gap-2 xxs:px-2 xxs:py-2 md:px-2 md:py-2 duration-300 bg-[#F3F3F5] hover:bg-[#D8D8D8] cursor-pointer text-red-800 rounded-b-lg"
                onClick={props.onClick}
              >
                <IoIosLogOut
                  className="xxs:text-base sm:text-lg md:text-xl lg:text-2xl"
                  strokeWidth={2}
                />
                <label className="md:text-xs lg:text-sm font-medium !font-yekan cursor-pointer">
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
