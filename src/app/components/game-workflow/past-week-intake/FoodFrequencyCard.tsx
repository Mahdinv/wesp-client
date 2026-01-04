import React, { memo, useState } from "react";

const FoodFrequencyCard: React.FC<{
  fCard: {
    id: number;
    code: number;
    title: string;
    properties: {
      weeklyConsumptionOption: number[];
      imageName: string;
    };
  };
  valuesColor: string;
  value?: number;
  onClick: (value: number, foodFrequencyId: number) => void;
}> = (props) => {
  const [hoverState, setHoverState] = useState({
    isHover: false,
    hoveredValue: 0,
  });

  return (
    <div className="flex flex-col items-center gap-2 bg-gray-100 rounded-[20px] shadow-sm py-4 px-0 w-full last:xxs:-translate-x-1/2 last:sm:translate-x-0">
      <div className="flex flex-col items-center gap-3">
        <img
          src={`/images/food-frequency/${props.fCard.properties.imageName}.jpg`}
          alt={props.fCard.properties.imageName}
          loading="lazy"
          className="xxs:w-16 xs:w-[90px] sm:w-[110px] md:w-[100px] lg:w-[110px] aspect-square rounded-full"
        />
        <label className="xxs:text-[14px] sm:text-[12px] md:text-[14px] xl:text-[17px] font-bold text-[#494949] text-nowrap">
          {props.fCard.title}
        </label>
      </div>
      <div className="flex flex-row items-center gap-1 mt-1">
        {props.fCard.properties.weeklyConsumptionOption.map((v, index, arr) => (
          <div
            className="xxs:w-5 xs:w-7 sm:w-7 aspect-square duration-300 rounded-full cursor-pointer"
            style={{
              backgroundColor:
                (props.value && props.value >= v) ||
                (hoverState.isHover &&
                  hoverState.hoveredValue > 0 &&
                  hoverState.hoveredValue >= v)
                  ? props.valuesColor
                  : "#d1d5db",
            }}
            onMouseEnter={() =>
              setHoverState({ isHover: true, hoveredValue: v })
            }
            onMouseLeave={() =>
              setHoverState({ isHover: false, hoveredValue: v })
            }
            onClick={() => {
              const value =
                props.value !== v
                  ? v
                  : arr[index - 1] !== undefined
                  ? arr[index - 1]
                  : 0;
              props.onClick(value, props.fCard.id);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default memo(FoodFrequencyCard);
