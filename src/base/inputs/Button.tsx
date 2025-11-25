import { motion } from "framer-motion";
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
  motion?: boolean;
  onClick?: () => void;
}> = (props) => {
  return (
    <>
      {props.motion && (
        <motion.button
          animate={{
            scale: [1, 1.03, 1],
            boxShadow: [
              "0 0 0 0 rgba(134, 239, 172, 0.7)",
              "0 0 0 20px rgba(134, 239, 172, 0)",
              "0 0 0 0 rgba(134, 239, 172, 0.7)",
            ],
          }}
          transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
          className={`${props.classes} xs:text-[14px] sm:text-xs md:text-sm lg:text-base leading-none duration-300 py-2 outline-none`}
          onClick={props.onClick}
        >
          {props.title}
        </motion.button>
      )}

      {!props.motion && (
        <button
          type={props.type}
          className={`${props.classes} xs:text-[14px] sm:text-xs lg:text-base leading-none duration-300 py-1 outline-none pb-2`}
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
            {props.title}
            <span className={`${props.iconClasses} self-center`}>
              {props.icon}
            </span>
          </div>
        </button>
      )}
    </>
  );
};

export default Button;
