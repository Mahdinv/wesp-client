import type React from "react";
import { toPersianDigits } from "../../../utils/public";

const FormsCatalogRoadmapStep: React.FC<{
  isOdd: boolean;
  counter: number;
  imageName: string;
  title: string;
}> = (props) => {
  return (
    <div className="relative">
      <div
        className={`absolute xs:w-6 xs:h-6 sm:w-7 sm:h-7 lg:w-10 lg:h-10 bg-green-500 rounded-full z-10 top-1/2 -translate-y-1/2 ${
          props.isOdd ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
        }`}
      ></div>
      <div
        className={`absolute w-1/2 xs:h-[2px] sm:h-[3px] md:h-1 bg-green-500 top-1/2 -translate-y-1/2 ${
          props.isOdd ? "left-0" : "right-0"
        }`}
      ></div>
      <div
        className={`absolute xs:w-[2px] lg:w-1 ${
          props.counter !== 1 ? "h-full top-0" : "h-1/2 bottom-0"
        } bg-[#003526] z-0 ${
          props.isOdd ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
        }`}
      ></div>
      <div className="relative flex flex-col items-center xs:gap-2 sm:gap-4 lg:gap-6 xs:w-9/12 sm:w-8/12 md:w-5/12 lg:w-6/12 xl:w-2/5 xs:rounded-lg lg:rounded-2xl xs:shadow-lg lg:shadow-2xl bg-white xs:border-2 md:border-4 border-green-500 mx-auto xs:py-2 lg:py-6">
        <div
          className={`bg-green-500 rounded-full absolute xs:w-9 xs:h-9 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 flex items-center justify-center xs:text-base lg:text-5xl text-white ${
            props.isOdd
              ? "top-0 right-0 translate-x-1/2 -translate-y-1/2"
              : "top-0 left-0 -translate-x-1/2 -translate-y-1/2"
          }`}
        >
          {toPersianDigits(props.counter)}
        </div>
        <div className="xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 overflow-hidden rounded-full border border-[#001F17]">
          <img
            src={`/images/forms-catalog-roadmap-step/${props.imageName}.jpg`}
            alt=""
            className="object-cover scale-125"
          />
        </div>
        <h6 className="text-[#007A55] xs:text-[12px] sm:text-[14px] md:text-xs lg:text-base xl:text-xl text-center">
          {props.title}
        </h6>
      </div>
    </div>
  );
};

export default FormsCatalogRoadmapStep;
