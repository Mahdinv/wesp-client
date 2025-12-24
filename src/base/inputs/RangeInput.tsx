import React, { type ChangeEvent } from "react";

const RangeInput: React.FC<{
  options: { title: string; value: string }[];
  min: number;
  max: number;
  step: number;
  initialValue: number;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}> = (props) => {
  const valueIndex = React.useMemo(() => {
    if (props.value === "" || props.value == null) {
      return props.initialValue;
    }

    const index = props.options.findIndex(
      (option) => option.value === props.value
    );

    return index !== -1 ? index : props.initialValue;
  }, [props.value, props.options, props.initialValue]);

  return (
    <div className="flex flex-col w-full gap-4 items-center">
      {props.error && (
        <small className="text-red-500 self-start font-peyda mr-2 mt-1">
          {props.error}
        </small>
      )}
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={valueIndex}
        step={props.step}
        className="w-full h-2 accent-green-800 opacity-50 rounded-lg cursor-pointer"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const index = Number(e.target.value);
          const option = props.options[index];
          if (option) {
            props.onChange(option.value);
          }
        }}
      ></input>
      <p className="font-bold text-xs">{props.options[valueIndex].title}</p>
    </div>
  );
};

export default RangeInput;
