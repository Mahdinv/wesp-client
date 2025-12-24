import { memo, type ReactNode } from "react";
import type React from "react";

const QuestionCard: React.FC<{
  icon: ReactNode;
  label: string;
  title?: string;
  children: ReactNode;
}> = (props) => {
  return (
    <div className="bg-gray-50 flex flex-col justify-center gap-4 rounded-2xl shadow-md px-6 py-4">
      <div className="flex flex-row gap-2 items-center">
        <div className="bg-[#e6f6ec] text-[#1f7e5a] text-xl p-4 rounded-full">
          {props.icon}
        </div>
        <h6 className="text-black font-bold">{props.label}</h6>
        {props.title && (
          <small className="text-black opacity-60 font-bold !font-peyda">
            {props.title}
          </small>
        )}
      </div>
      {props.children}
    </div>
  );
};

export default memo(QuestionCard);
