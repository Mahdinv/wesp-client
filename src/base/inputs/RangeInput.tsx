import React, { useState, type ChangeEvent } from "react";

const RangeInput: React.FC<{
  rangeTitles: { title: string; value: string }[];
  min: number;
  max: number;
  step: number;
  initialValue: number;
  name: string;
}> = (props) => {
  const [value, setValue] = useState(props.initialValue);

  return (
    <div className="flex flex-col w-full gap-4 items-center">
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={value}
        step={props.step}
        className="w-full h-2 accent-green-800 opacity-50 rounded-lg cursor-pointer"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(Number(e.target.value))
        }
      ></input>
      <p className="font-bold text-xs">{props.rangeTitles[value].title}</p>
      <input
        type="hidden"
        name={props.name}
        value={props.rangeTitles[value].value}
      />
    </div>
  );
};

export default RangeInput;
