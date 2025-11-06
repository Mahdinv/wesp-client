import React, { useState, type ChangeEvent } from "react";

const RangeInput: React.FC<{
  rangeTitles: string[];
  min: number;
  max: number;
  step: number;
  initialValue: number;
  name: string;
}> = (props) => {
  const [value, setValue] = useState(props.initialValue);
  const valueTitle = props.rangeTitles[value];

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
      <p className="font-bold text-xs">{valueTitle}</p>
      <input type="hidden" name={props.name} value={valueTitle} />
    </div>
  );
};

export default RangeInput;
