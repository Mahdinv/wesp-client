import React, { useState } from "react";

const FoodGroupSelectorCard: React.FC<{
  foodGroupCard: {
    id: number;
    imageName: string;
    title: string;
    subTitle: string;
  };
}> = (props) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={`flex flex-col gap-2 items-center justify-center w-full bg-white border-[6px] ${
        selected ? "border-[#3CFE84]" : "border-transparent"
      } shadow-lg rounded-xl py-1 duration-200 hover:-translate-y-1 will-change-transform`}
      onClick={() => setSelected((prev) => !prev)}
    >
      <div className="aspect-square sm:w-10/12 md:w-11/12 xl:w-10/12 2xl:w-7/12 bg-[#ABFFCA] rounded-full flex items-center justify-center overflow-hidden">
        <img
          src={`/images/food-group-selector-images/${props.foodGroupCard.imageName}-ill.png`}
          alt={props.foodGroupCard.imageName}
          className="object-contain w-fit"
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center xs:text-[13px] sm:text-[75%] md:text-[65%] lg:text-[75%] xl:text-[90%] 2xl:text-xs font-bold text-nowrap text-center">
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

export default FoodGroupSelectorCard;
