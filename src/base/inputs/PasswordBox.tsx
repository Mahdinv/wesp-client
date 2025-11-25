import { useState } from "react";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa6";

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
    <div className="flex flex-col items-center gap-1">
      {props.label && (
        <label className="text-[16px] mr-1 self-start text-[#004B1C] mb-2">
          {props.label}
        </label>
      )}
      <div className="flex flex-row items-center w-full justify-between rounded-xl border-2 border-gray-300 group focus-within:border-gray-400">
        {props.hasIcon && (
          <span className="px-2 pr-3">
            <FaLock className="opacity-60" />
          </span>
        )}
        <input
          type={type}
          placeholder={props.placeHolder}
          className={`flex-1 w-full ${props.classes} px-2 py-3 bg-transparent rounded-s-xl font-noto outline-none text-[16px]`}
          name={props.name}
        />
        <span className={`${props.classes} px-2 pl-3 text-green-800`}>
          {type === "password" ? (
            <FaEyeSlash onClick={() => setType("text")} />
          ) : (
            <FaEye onClick={() => setType("password")} />
          )}
        </span>
      </div>
    </div>
  );
};

export default PasswordBox;
