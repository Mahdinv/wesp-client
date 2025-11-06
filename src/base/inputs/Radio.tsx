import React, { useState } from "react";

const Radio: React.FC<{
  label?: string;
  gridColClasses: string;
  options: { title: string; value: string }[];
  name: string;
}> = (props) => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="flex flex-col gap-2 justify-center">
      <label className="xs:text-xs sm:text-sm font-lalezar self-start mr-1 text-colorHeaderTitle">
        {props.label}
      </label>
      <div className={`grid ${props.gridColClasses} gap-4`}>
        {props.options.map((option) => (
          <label
            onClick={() => setValue(option.value)}
            className={`duration-300 transition-all text-center font-noto text-textDark rounded-xl border-2 border-green-300 backdrop-blur-md py-2 cursor-pointer ${
              value === option.value
                ? "border-green-400 bg-[#c1f7d4] shadow-[0_4px_30px_rgba(34,197,94,0.2)] font-bold"
                : "bg-[#effaf3]"
            }`}
          >
            {option.title}
          </label>
        ))}
      </div>
      <input type="hidden" name={props.name} value={value} />
    </div>
  );
};

export default Radio;
