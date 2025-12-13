import type { ChangeEvent, ReactNode } from "react";

const TextBox: React.FC<{
  label?: string;
  icon?: ReactNode;
  classes?: string;
  placeHolder: string;
  name: string;
  defaultValue?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
  return (
    <div className="flex flex-col items-center">
      {props.label && (
        <label
          htmlFor={props.name}
          className="xs:text-xs sm:text-sm font-peyda self-start mr-1 text-black mb-1"
        >
          {props.label}
        </label>
      )}
      <div
        className={`${props.classes} h-12 2xl:h-14 flex flex-row w-full items-center justify-between rounded-2xl border-2 border-gray-200 group focus-within:border-gray-300`}
      >
        {props.icon && (
          <span className="px-1 pr-3 text-xl 2xl:text-2xl text-[#BFBFBF]">
            {props.icon}
          </span>
        )}
        <input
          id={props.name}
          type="text"
          placeholder={props.placeHolder}
          className="flex-1 w-full h-full px-2 bg-transparent text-gray-600 rounded-2xl font-peyda outline-none xxs:text-xs xl:text-sm"
          name={props.name}
          onChange={props.onChange}
          defaultValue={props.defaultValue}
        />
      </div>
    </div>
  );
};

export default TextBox;
