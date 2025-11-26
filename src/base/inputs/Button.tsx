import type { ReactNode } from "react";
import type React from "react";

const Button: React.FC<{
  classes: string;
  isGradient?: boolean;
  icon?: ReactNode;
  iconClasses?: string;
  iconFirst?: boolean;
  itemsGap?: number;
  type?: "button" | "submit" | "reset";
  title: string;
  name?: string;
  value?: string;
  disable?: boolean;
  onClick?: () => void;
}> = (props) => {
  return (
    <>
      <button
        type={props.type}
        className={`${props.classes} xs:text-[14px] sm:text-xs lg:text-base leading-none duration-300 py-1 outline-none`}
        onClick={props.onClick}
        disabled={props.disable}
        name={props.name}
        value={props.value}
      >
        <div
          className={`flex ${
            props.iconFirst ? "flex-row-reverse" : "flex-row"
          } justify-center items-center px-4`}
          style={{ gap: props.icon ? props.itemsGap : 0 }}
        >
          <label>{props.title}</label>
          <span className={`${props.iconClasses} self-center`}>
            {props.icon}
          </span>
        </div>
      </button>
    </>
  );
};

export default Button;
