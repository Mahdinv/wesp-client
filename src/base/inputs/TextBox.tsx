import type { ChangeEvent, ReactNode } from "react";

const TextBox: React.FC<{
  label?: string;
  icon?: ReactNode;
  classes?: string;
  placeHolder: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
  return (
    <div className="flex flex-col items-center">
      {props.label && (
        <label className="xs:text-xs sm:text-sm font-lalezar self-start mr-1 text-colorHeaderTitle">
          {props.label}
        </label>
      )}
      <div
        className={`${props.classes} flex flex-row items-center w-full justify-between rounded-xl border-2 border-gray-300 group focus-within:border-gray-400`}
      >
        {props.icon && (
          <span className="opacity-60 px-2 pr-3">{props.icon}</span>
        )}
        <input
          type="text"
          placeholder={props.placeHolder}
          className={`flex-1 w-full px-2 py-3 bg-transparent rounded-xl font-noto outline-none xl:text-[16px]`}
          name={props.name}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default TextBox;
