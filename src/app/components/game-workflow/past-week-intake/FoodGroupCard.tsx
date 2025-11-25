import type { ReactNode } from "react";
import type React from "react";
import { IoIosRefresh } from "react-icons/io";

const FoodGroupCard: React.FC<{
  title: string;
  bgColor: string;
  iconColor: string;
  titleColor: string;
  children: ReactNode;
}> = (props) => {
  return (
    <div
      className="relative flex flex-col gap-8 items-start xs:p-6 sm:p-5 md:py-8 md:px-12 lg:py-6 lg:px-10 xl:py-[34px] xl:px-[60px] rounded-3xl shadow-md"
      style={{ backgroundColor: props.bgColor }}
    >
      <span
        className="flex items-center justify-center absolute top-0 left-0 translate-x-5 translate-y-5 xs:w-[35px] sm:w-[42px] md:w-[50px] aspect-square rounded-full duration-300 hover:scale-95"
        style={{ backgroundColor: props.iconColor }}
      >
        <IoIosRefresh className="xs:text-lg sm:text-xl md:text-3xl" />
      </span>
      <h5 style={{ color: props.titleColor }}>{props.title}</h5>
      <div className="w-full">{props.children}</div>
    </div>
  );
};

export default FoodGroupCard;
