import React, { memo } from "react";

const FoodFrequencyCard: React.FC<{
  code: number;
  title: string;
  imageName: string;
  valuesColor: string;
  value?: number;
  onClick: (value: number, foodFrequencyCode: number) => void;
}> = (props) => {
  return (
    <div className="flex flex-col items-center gap-2 bg-gray-100 rounded-[20px] shadow-sm py-4 px-0 w-full">
      <div className="flex flex-col items-center gap-3">
        <img
          src={`/images/food-frequency/${props.imageName}.jpg`}
          alt={props.imageName}
          loading="lazy"
          className="xs:w-[100px] sm:w-[90px] md:w-[110px] lg:w-[100px] xl:w-[110px] aspect-square rounded-full"
        />
        <label className="xs:text-[14px] sm:text-[12px] md:text-[14px] xl:text-[17px] font-bold text-[#494949] text-nowrap">
          {props.title}
        </label>
      </div>
      <div className="flex flex-row items-center gap-1 mt-1">
        {[1, 2, 3, 4].map((v) => (
          <div
            className="xs:w-7 sm:w-5 md:w-7 lg:w-6 xl:w-7 aspect-square duration-300 rounded-full"
            style={{
              backgroundColor:
                props.value && props.value >= v ? props.valuesColor : "#d1d5db",
            }}
            onClick={() =>
              props.onClick(props.value !== v ? v : v - 1, props.code)
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default memo(FoodFrequencyCard);
