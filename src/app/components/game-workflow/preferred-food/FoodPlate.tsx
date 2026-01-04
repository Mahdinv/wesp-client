import { IoIosRefresh } from "react-icons/io";
import React, { memo } from "react";

const FoodPlate: React.FC<{
  selectedFoodGroups: ({ imageName: string; title: string } | undefined)[];
  handleResetPlate: () => void;
}> = (props) => {
  return (
    <div
      className="relative w-full h-auto rounded-full bg-white
                 xs:[box-shadow:inset_0_0_0_10px_#ffdf5f,inset_0_0_0_25px_#FEF3C7] xs:p-[20px]
                 sm:[box-shadow:inset_0_0_0_10px_#ffdf5f,inset_0_0_0_35px_#FEF3C7] sm:p-[35px]
                 md:[box-shadow:inset_0_0_0_10px_#ffdf5f,inset_0_0_0_30px_#FEF3C7] md:p-[30px]
                 lg:[box-shadow:inset_0_0_0_10px_#ffdf5f,inset_0_0_0_40px_#FEF3C7] lg:p-[60px]
                 xl:[box-shadow:inset_0_0_0_15px_#ffdf5f,inset_0_0_0_45px_#FEF3C7] xl:p-[65px]"
    >
      <div className="grid grid-cols-2 w-fit h-auto mx-auto gap-2 p-4 overflow-hidden">
        {props.selectedFoodGroups.map((sfg, index) => {
          return sfg !== undefined ? (
            <div
              key={sfg.title + index}
              className={`${
                index % 2 === 0 ? "justify-self-end" : "justify-self-start"
              } aspect-square xs:w-[70%] sm:w-[60%] md:w-[70%] lg:w-[80%] xl:w-[65%] 2xl:w-[55%] rounded-full overflow-hidden bg-[#D9F2E2] flex flex-col items-center justify-center border-4 border-dashed border-green-500`}
            >
              <img
                src={`/images/food-group-selector-images/${sfg.imageName}-ill.png`}
                alt={sfg.imageName}
                className="flex-1 xs:w-[45%] md:w-1/2 aspect-square scale-150 object-contain"
              />
              <label className="h-1/5 xs:text-[9px] sm:text-[12px] md:text-[10px] lg:text-[13px] xl:text-[14px] 2xl:text-xs font-bold mb-3 text-wrap">
                {sfg.title}
              </label>
            </div>
          ) : (
            <div
              key={"noty" + index}
              className={`relative ${
                index % 2 === 0 ? "justify-self-end" : "justify-self-start"
              } aspect-square xs:w-[70%] sm:w-[60%] md:w-[70%] lg:w-[80%] xl:w-[65%] 2xl:w-[55%] rounded-full overflow-hidden bg-transparent text-[#626262] flex flex-col items-center justify-center border-4 border-dashed border-gray-500`}
            >
              <img
                src="/images/food-group-selector-images/not-found.png"
                alt="not-found"
                className="flex-1 xs:w-[45%] md:w-1/2 aspect-square scale-150 object-contain"
              />
              <label className="absolute top-1/2 -translate-y-5 h-1/5 xs:text-6xl sm:text-7xl md:text-6xl lg:text-7xl  font-bold mb-3 text-wrap !font-rokh text-[#626262]">
                {index + 1}
              </label>
            </div>
          );
        })}
      </div>
      <span
        className="justify-self-start absolute duration-300 bg-yellow-300 hover:scale-90 xs:w-[9%] sm:w-[7%] md:w-[6%] lg:w-[8%] xl:w-[7%] aspect-square flex items-center justify-center rounded-full left-[10%] top-1/2 -translate-y-1/2 transition"
        onClick={() =>
          props.selectedFoodGroups.some((item) => item !== undefined) &&
          props.handleResetPlate()
        }
      >
        <IoIosRefresh className="xs:text-base md:text-xs lg:text-xl xl:text-2xl" />
      </span>
    </div>
  );
};
export default memo(FoodPlate);
