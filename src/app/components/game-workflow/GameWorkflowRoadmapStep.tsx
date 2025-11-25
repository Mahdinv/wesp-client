import type React from "react";
import { toPersianDigits } from "../../../utils/public";

const GameWorkflowRoadmapStep: React.FC<{
  isOdd: boolean;
  counter: number;
  imageName: string;
  title: string;
}> = (props) => {
  return (
    <div className="relative my-9">
      <div
        className={`absolute xs:w-6 sm:w-7 lg:w-10 aspect-square bg-green-500 rounded-full z-10 ${
          props.isOdd
            ? "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
            : "right-0 -bottom-[18%] translate-x-1/2 translate-y-1/2"
        }`}
      ></div>
      <div
        className={`absolute w-1/2 xs:h-[2px] sm:h-[3px] md:h-1 bg-green-500 ${
          props.isOdd
            ? "left-0 top-1/2 -translate-y-1/2"
            : "right-0 -bottom-[18%]"
        }`}
      ></div>
      <div
        className={`absolute xs:w-[2px] lg:w-1 bg-[#003526] ${
          props.counter !== 1
            ? "xs:h-[160%] sm:h-[150%] top-1/2"
            : "h-1/2 bottom-0"
        } ${
          props.isOdd ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
        }`}
      ></div>
      <div
        className={`relative ${
          !props.isOdd ? "bottom-0 translate-y-2/3" : undefined
        } flex flex-col items-center xs:gap-2 sm:gap-4 lg:gap-6 xs:w-9/12 sm:w-8/12 md:w-5/12 lg:w-6/12 xl:w-2/5 xs:rounded-lg lg:rounded-2xl xs:shadow-lg lg:shadow-2xl bg-white xs:border-2 md:border-4 border-green-500 mx-auto xs:py-2 lg:py-6`}
      >
        <div
          className={`bg-green-500 rounded-full absolute xs:w-9 sm:w-14 md:w-16 lg:w-20 xl:w-24 aspect-square flex items-center justify-center xs:text-base lg:text-5xl text-white ${
            props.isOdd
              ? "top-0 right-0 translate-x-1/2 -translate-y-1/2"
              : "top-0 left-0 -translate-x-1/2 -translate-y-1/2"
          }`}
        >
          <div className="font-rokh xs:text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-5xl xs:translate-y-1 lg:translate-y-2">
            {toPersianDigits(props.counter)}
          </div>
        </div>
        <div className="xs:w-20 sm:w-28 md:w-32 lg:w-40 xl:w-44 aspect-square overflow-hidden rounded-full border border-[#001F17]">
          <img
            src={`/images/forms-catalog-roadmap-step/${props.imageName}.jpg`}
            alt=""
            className="object-cover scale-125"
          />
        </div>
        <h4 className="text-[#007A55] text-center !font-peyda">
          {props.title}
        </h4>
      </div>
    </div>
  );
};

export default GameWorkflowRoadmapStep;
