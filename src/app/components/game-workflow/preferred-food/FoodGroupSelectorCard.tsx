import React, { memo } from "react";

const FoodGroupSelectorCard: React.FC<{
  foodGroupCard: {
    id: number;
    imageName: string;
    title: string;
    subTitle: string;
  };
  isSelected: boolean;
  disable: boolean;
  handleSelectCart: (foodGroupId: number) => void;
}> = (props) => {
  return (
    <div
      className={`flex flex-col gap-3 items-center justify-center w-full h-full bg-white border-[6px] ${
        props.isSelected ? "border-[#3CFE84]" : "border-white"
      } shadow-lg rounded-xl py-1 cursor-pointer transform transition-all duration-200 ease-out ${
        props.disable ? "opacity-50" : "hover:-translate-y-1 hover:shadow-xl"
      }`}
      onClick={() =>
        !props.disable && props.handleSelectCart(props.foodGroupCard.id)
      }
    >
      <div className="aspect-square sm:w-10/12 md:w-11/12 xl:w-10/12 2xl:w-7/12 bg-[#ABFFCA] rounded-full flex items-center justify-center overflow-hidden transform-gpu translate-z-0">
        <img
          src={`/images/food-group-selector-images/${props.foodGroupCard.imageName}-ill.png`}
          alt={props.foodGroupCard.imageName}
          className="object-contain w-fit"
        />
      </div>
      <div className="flex flex-col items-center justify-center xs:text-[13px] sm:text-xxs md:text-[11px] lg:text-xxs xl:text-xs 2xl:text-xs font-bold text-nowrap text-center">
        {props.foodGroupCard.title}
        {props.foodGroupCard.subTitle !== "" && (
          <div className="xs:text-[10px] sm:text-[80%]">
            {props.foodGroupCard.subTitle}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(FoodGroupSelectorCard);
