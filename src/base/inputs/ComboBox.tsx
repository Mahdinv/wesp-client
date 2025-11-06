import type React from "react";

const ComboBox: React.FC<{
  name: string;
  placeholder: string;
  options: { title: string; value: string }[];
}> = (props) => {
  return (
    <div className="flex flex-col">
      <select
        name={props.name}
        className="flex-1 bg-gray-100 border-2 border-gray-300 w-full px-2 py-3 bg-transparent rounded-xl font-noto outline-none xl:text-[16px]"
      >
        <option className="font-medium font-noto text-gray-500" value="">
          {props.placeholder}
        </option>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;
