import { InputHTMLAttributes, useState } from "react";
import { GoLock } from "react-icons/go";
import { PiEye, PiEyeClosed } from "react-icons/pi";

type PasswordBoxProps = {
  label?: string;
  hasIcon?: boolean;
  classes?: string;
  placeHolder: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const PasswordBox: React.FC<PasswordBoxProps> = ({
  label,
  hasIcon,
  classes,
  placeHolder,
  error,
  ...props
}) => {
  const [type, setType] = useState<"password" | "text">("password");
  return (
    <div className="w-full flex flex-col items-center">
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
        {hasIcon && (
          <span className="px-1 pr-3">
            <GoLock
              className="text-xl 2xl:text-2xl text-text-input"
              strokeWidth={1}
            />
          </span>
        )}
        <input
          id={props.name}
          type={type}
          placeholder={placeHolder}
          className="flex-1 w-full h-full px-2 bg-transparent text-gray-600 rounded-s-2xl font-peyda outline-none xxs:text-xs xl:text-sm"
          {...props}
        />
        <span className="px-2 pl-3 text-text-input">
          {type === "password" ? (
            <PiEyeClosed
              className="text-xl 2xl:text-2xl"
              strokeWidth={5}
              onClick={() => setType("text")}
            />
          ) : (
            <PiEye
              className="text-xl 2xl:text-2xl"
              strokeWidth={5}
              onClick={() => setType("password")}
            />
          )}
        </span>
      </div>
      {!label && error && (
        <small className="text-red-500 self-start font-peyda mr-2 mt-1">
          {error}
        </small>
      )}
    </div>
  );
};

export default PasswordBox;
