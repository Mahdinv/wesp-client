import type React from "react";
import { toPersianDigits } from "../../../utils/public";
import Button from "../../../base/inputs/Button";
import { MdLockOutline } from "react-icons/md";

const GameWorkflowRoadmapStep: React.FC<{
  isOdd: boolean;
  counter: number;
  imageName: string;
  title: string;
  disable: boolean;
}> = (props) => {
  return (
    <div className="relative my-9">
      <div
        className={`absolute xxs:w-6 sm:w-7 lg:w-10 aspect-square bg-green-500 rounded-full z-10 ${
          props.isOdd
            ? "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
            : "right-0 -bottom-[18%] translate-x-1/2 translate-y-1/2"
        }`}
      ></div>
      <div
        className={`absolute w-1/2 xxs:h-[2px] sm:h-[3px] md:h-1 bg-green-500 ${
          props.isOdd
            ? "left-0 top-1/2 -translate-y-1/2"
            : "right-0 -bottom-[18%]"
        }`}
      ></div>
      <div
        className={`absolute xxs:w-[2px] lg:w-1 bg-[#003526] ${
          props.counter !== 1
            ? "xxs:h-[160%] sm:h-[150%] top-1/2"
            : "h-1/2 bottom-0"
        } ${
          props.isOdd ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
        }`}
      ></div>
      <div
        className={`relative ${
          !props.isOdd ? "bottom-0 translate-y-2/3" : undefined
        } flex flex-col items-center xxs:gap-1 md:gap-2 xxs:w-9/12 sm:w-8/12 md:w-5/12 lg:w-6/12 xl:w-2/5 xxs:rounded-lg lg:rounded-2xl xxs:shadow-lg lg:shadow-2xl bg-back-page xxs:border-2 md:border-4 ${
          props.disable ? "border-[#73CE95]" : "border-primary"
        } mx-auto xxs:py-2 lg:py-6 px-2`}
      >
        <div
          className={`absolute top-0 w-full h-full xxs:rounded-md lg:rounded-xl bg-white ${
            props.disable ? "opacity-50" : undefined
          }`}
        ></div>
        <div
          className={`${
            props.disable ? "bg-[#CBDED7]" : "bg-green-500"
          } rounded-full absolute xxs:w-9 xs:w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 aspect-square flex items-center justify-center xxs:text-base lg:text-5xl text-white ${
            props.isOdd
              ? "top-0 right-0 translate-x-1/2 -translate-y-1/2"
              : "top-0 left-0 -translate-x-1/2 -translate-y-1/2"
          }`}
        >
          <div
            className={`${
              !props.disable
                ? "font-rokh xxs:text-xs xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-5xl xxs:translate-y-1 lg:translate-y-2"
                : undefined
            }`}
          >
            {!props.disable ? (
              toPersianDigits(props.counter)
            ) : (
              <MdLockOutline className="text-[#737B76] xxs:w-6 xxs:h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16" />
            )}
          </div>
        </div>
        <div
          className={`xxs:w-20 sm:w-28 md:w-32 lg:w-40 xl:w-44 aspect-square overflow-hidden rounded-full border border-[#001F17] z-10 ${
            props.disable ? "opacity-50" : undefined
          }`}
        >
          <img
            src={`/images/forms-catalog-roadmap-step/${props.imageName}.jpg`}
            alt={props.imageName}
            className="object-cover scale-125"
          />
        </div>
        <h4
          className={`text-[#007A55] text-center !font-peyda relative z-10 ${
            props.disable ? "opacity-50" : undefined
          }`}
        >
          {props.title}
        </h4>
        {!props.disable && (
          <Button
            classes="btn btn-primary xxs:w-full sm:w-2/3 md:w-full lg:w-2/3 xxs:!py-[2px] md:!py-1 lg:!py-2 xl:!py-1 xxs:!text-xxs sm:!text-xs lg:!text-sm xl:!text-base 2xl:!text-lg !rounded-full relative z-10"
            title="شروع کن"
          />
        )}
      </div>
    </div>
  );
};

export default GameWorkflowRoadmapStep;
