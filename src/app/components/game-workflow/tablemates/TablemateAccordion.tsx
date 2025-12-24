import { FaAngleUp, FaTrashCan } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";
import TextBox from "../../../../base/inputs/TextBox";
import Radio from "../../../../base/inputs/Radio";
import React, { memo, useEffect, useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import ComboBox from "../../../../base/inputs/ComboBox";
import { Controller, useFormContext } from "react-hook-form";
import { TablematesForm } from "../../../../schemas/tablemates-form";

const sharedMealsCount = [
  { title: "یک وعده", value: 1 },
  { title: "دو وعده", value: 2 },
  { title: "سه وعده", value: 3 },
  { title: "چهار وعده", value: 4 },
  { title: "پنج وعده", value: 5 },
];

const relationshipLevel = [
  { title: "خانواده", value: "family" },
  { title: "دوست", value: "friend" },
  { title: "همکار", value: "colleague" },
  { title: "سایر", value: "other" },
];

const influenceLevel = [
  { title: "هیچ", value: "none" },
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
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<TablematesForm>();

  const [open, setOpen] = useState(props.isOpen);
  const titles = [
    "اول",
    "دوم",
    "سوم",
    "چهارم",
    "پنجم",
    "ششم",
    "هفتم",
    "هشتم",
    "نهم",
    "دهم",
  ];
  const title = props.tablematesNumber
    ? titles[props.tablematesNumber - 1]
    : "";

  useEffect(() => {
    if (
      !!errors.tablemates &&
      Array.isArray(errors.tablemates) &&
      errors.tablemates?.length > 0 &&
      !!errors.tablemates?.[props.index]
    ) {
      setOpen(true);
    }
    if (!errors.tablemates) {
      setOpen(props.isOpen);
    }
  }, [errors.tablemates, props.index, props.isOpen]);

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
          <p className="cursor-pointer">همسفره {title}</p>
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
            classes="bg-[#F3F3F5] !rounded-full !px-2 !h-11"
            label="نام"
            placeHolder="اینجا بنویس"
            {...register(`tablemates.${props.index}.name`)}
            error={errors.tablemates?.[props.index]?.name?.message}
          />
          <div className="w-2/5">
            <Controller
              name={`tablemates.${props.index}.sharedMealsCount`}
              control={control}
              render={({ field }) => (
                <ComboBox
                  label="تعداد وعده‌های مشترک"
                  placeholder="لطفا انتخاب کنید"
                  options={sharedMealsCount}
                  value={field.value}
                  onChange={field.onChange}
                  error={
                    errors.tablemates?.[props.index]?.sharedMealsCount?.message
                  }
                />
              )}
            />
          </div>
          <Controller
            name={`tablemates.${props.index}.relationshipLevel`}
            control={control}
            render={({ field }) => (
              <Radio
                label="سطح ارتباط"
                gridColClasses="xs:grid-cols-2 md:grid-cols-3 gap-4 xl:grid-cols-4 2xl:grid-cols-5"
                options={relationshipLevel}
                value={field.value}
                onChange={field.onChange}
                error={
                  errors.tablemates?.[props.index]?.relationshipLevel?.message
                }
              />
            )}
          />
          <Controller
            name={`tablemates.${props.index}.influenceLevel`}
            control={control}
            render={({ field }) => (
              <Radio
                label="به نظر شما، این فرد چقدر بر روی رژیم شما تاثیر می‌گذارد"
                gridColClasses="xs:grid-cols-2 md:grid-cols-3 gap-4 xl:grid-cols-4 2xl:grid-cols-5"
                options={influenceLevel}
                value={field.value}
                onChange={field.onChange}
                error={
                  errors.tablemates?.[props.index]?.influenceLevel?.message
                }
              />
            )}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default memo(TablemateAccordion);
