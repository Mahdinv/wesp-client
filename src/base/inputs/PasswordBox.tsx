import { useState } from "react";
import { GoLock } from "react-icons/go";
import { PiEye, PiEyeClosed } from "react-icons/pi";

const PasswordBox: React.FC<{
  label?: string;
  hasIcon?: boolean;
  classes?: string;
  type?: "password" | "text";
  placeHolder: string;
  name: string;
}> = (props) => {
  const [type, setType] = useState<"password" | "text">("password");
  return (
    <div className="w-full flex flex-col items-center">
      {props.label && (
        <label
          htmlFor={props.name}
          className="xs:text-xs sm:text-sm font-peyda mr-1 self-start text-black mb-1"
        >
          {props.label}
        </label>
      )}
      <div
        className={`${props.classes} h-12 2xl:h-14 flex flex-row items-center w-full justify-between rounded-2xl border-2 border-gray-200 group focus-within:border-gray-300`}
      >
        {props.hasIcon && (
          <span className="px-1 pr-3">
            <GoLock
              className="text-xl 2xl:text-2xl text-[#BFBFBF]"
              strokeWidth={1}
            />
          </span>
        )}
        <input
          id={props.name}
          type={type}
          placeholder={props.placeHolder}
          className="flex-1 w-full h-full px-2 bg-transparent text-gray-600 rounded-s-2xl font-peyda outline-none xxs:text-xs xl:text-sm"
          name={props.name}
        />
        <span className="px-2 pl-3 text-[#BFBFBF]">
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
    </div>
  );
};

export default PasswordBox;
