import { FaAngleUp, FaTrashCan } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";
import TextBox from "./inputs/TextBox";
import NumberBox from "./inputs/NumberBox";
import Radio from "./inputs/Radio";
import React, { useEffect, useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { toPersianDigits } from "../utils/public";

const communicationLevelOptions = [
  { title: "خانواده", value: "family" },
  { title: "دوست", value: "friend" },
  { title: "همکار", value: "colleague" },
  { title: "سایر", value: "other" },
];

const dietImpactOptions = [
  { title: "هیچ", value: "nothing" },
  { title: "کم", value: "low" },
  { title: "متوسط", value: "medium" },
  { title: "زیاد", value: "high" },
  { title: "خیلی‌زیاد", value: "very-high" },
];

const TablemateAccordion: React.FC<{
  index: number;
  isOpen: boolean;
  tablematesNumber?: number;
  onRemoveClick: () => void;
}> = (props) => {
  const [open, setOpen] = useState(props.isOpen);

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]);
  return (
    <div className="flex flex-col justify-center rounded-xl bg-gray-50 border border-gray-300 px-4 py-3 gap-4">
      <div className="flex flex-row w-full items-center justify-between">
        <div
          className="flex flex-row items-center justify-center gap-2"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="text-xl p-4 rounded-full bg-[#e6f6ec] text-[#1f7e5a] cursor-pointer">
            <LuUserRound />
          </div>
          <p className="cursor-pointer">
            همسفره شماره {toPersianDigits(Number(props.tablematesNumber))}
          </p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <span
            className="text-xs opacity-50 duration-300 hover:opacity-100 text-red-900"
            onClick={props.onRemoveClick}
          >
            <FaTrashCan />
          </span>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3, ease: easeInOut }}
            className="text-lg duration-300 opacity-50 hover:opacity-100"
            onClick={() => setOpen((prev) => !prev)}
          >
            <FaAngleUp />
          </motion.div>
        </div>
      </div>
      <AnimatePresence initial={false}>
        <motion.div
          initial={false}
          animate={{
            height: open ? "auto" : 0,
            opacity: open ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex flex-col gap-8 overflow-hidden origin-top"
        >
          <TextBox
            label="نام"
            placeHolder="اینجا بنویس"
            name={`tablemates[${props.index}][name]`}
          />
          <div className="w-1/4">
            <NumberBox
              label="تعداد وعده‌های مشترک"
              name={`tablemates[${props.index}][sharedMealQuantity]`}
              defaultValue={1}
            />
          </div>
          <Radio
            label="سطح ارتباط"
            gridColClasses="xs:grid-cols-2 md:grid-cols-3 gap-4 xl:grid-cols-4 2xl:grid-cols-5"
            options={communicationLevelOptions}
            name={`tablemates[${props.index}][communicationLevel]`}
          />
          <Radio
            label="به نظر شما، این فرد چقدر بر روی رژیم شما تاثیر می‌گذارد"
            gridColClasses="xs:grid-cols-2 md:grid-cols-3 gap-4 xl:grid-cols-4 2xl:grid-cols-5"
            options={dietImpactOptions}
            name={`tablemates[${props.index}][dietImpact]`}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TablemateAccordion;
