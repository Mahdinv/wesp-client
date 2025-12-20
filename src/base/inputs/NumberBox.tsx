import type { InputHTMLAttributes, ReactNode } from "react";

type NumberBoxProps = {
  label?: string;
  icon?: ReactNode;
  classes?: string;
  placeHolder?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const NumberBox: React.FC<NumberBoxProps> = ({
  label,
  icon,
  classes,
  placeHolder,
  error,
  ...props
}) => {
  return (
    <div className="flex flex-col items-center">
      {label && (
        <div className="flex flex-row items-center w-full mr-2 mb-1 justify-between gap-1">
          <label
            htmlFor={props.name}
            className="flex-shrink-0 xs:text-xs sm:text-sm font-peyda self-start text-black"
          >
            {label}
          </label>

          {error && (
            <small className="text-red-500 font-peyda font-medium ml-2">
              {error}
            </small>
          )}
        </div>
      )}
      <div
        className={`${classes} h-12 2xl:h-14 flex flex-row items-center w-full justify-between rounded-2xl border-2 border-gray-200 group focus-within:border-gray-300`}
      >
        {icon && (
          <span className="px-1 pr-3 text-xl 2xl:text-2xl text-text-input">
            {icon}
          </span>
        )}
        <input
          id={props.name}
          type="number"
          placeholder={placeHolder}
          className={`flex-1 w-full px-2 bg-transparent text-gray-600 rounded-2xl font-peyda outline-none xxs:text-xs xl:text-sm`}
          {...props}
        />
      </div>
      {!label && error && (
        <small className="text-red-500 self-start font-peyda mr-2 mt-1">
          {error}
        </small>
      )}
    </div>
  );
};

export default NumberBox;
