import { FiMail } from "react-icons/fi";

const EmailBox: React.FC<{
  label?: string;
  hasIcon?: boolean;
  classes?: string;
  placeHolder: string;
  name: string;
}> = (props) => {
  return (
    <div className="w-full flex flex-col items-center">
      {props.label && (
        <label
          htmlFor={props.name}
          className="xs:text-xs sm:text-sm font-peyda self-start mr-1 text-black mb-1"
        >
          {props.label}
        </label>
      )}
      <div
        className={`${props.classes} h-12 2xl:h-14 flex flex-row items-center w-full justify-between rounded-2xl border-2 border-gray-200 group focus-within:border-gray-300`}
      >
        {props.hasIcon && (
          <span className="px-1 pr-3">
            <FiMail
              className="text-xl 2xl:text-2xl text-[#BFBFBF]"
              strokeWidth={2}
            />
          </span>
        )}
        <input
          id={props.name}
          type="email"
          placeholder={props.placeHolder}
          className="flex-1 w-full h-full px-2 rounded-2xl bg-transparent text-gray-600 font-peyda outline-none xxs:text-xs xl:text-sm"
          name={props.name}
        />
      </div>
    </div>
  );
};

export default EmailBox;
