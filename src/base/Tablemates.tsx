import { PiUsersThree } from "react-icons/pi";
import QuestionCard from "./QuestionCard";
import Button from "./inputs/Button";
import { AiOutlineUserAdd } from "react-icons/ai";
import TablemateAccordion from "./TablemateAccordion";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Tablemates: React.FC<{ step?: number }> = (props) => {
  const [tablemateAccordion, setTablemateAccordion] = useState<number[]>([]);
  function addTablemateAccordion() {
    if (tablemateAccordion.length < 10) {
      setTablemateAccordion((prev) => [...prev, prev.length]);
    } else {
      toast.error("شما تنها می‌توانید 10 همسفره به لیست خود اضافه کنید.");
      return;
    }
  }

  function handleRemoveTablemate(accordion: number) {
    setTablemateAccordion((prev) => {
      return prev.filter((tablemate) => tablemate !== accordion);
    });
  }
  return (
    <QuestionCard icon={<PiUsersThree />} label="همسفره‌ها">
      <div
        className={`w-full ${props.step === 4 ? "h-auto" : "hidden"} space-y-4`}
      >
        {tablemateAccordion.length === 0 && (
          <div className="w-full h-auto border-2 border-dashed border-gray-300 rounded-xl text-center py-20">
            <Button
              classes="btn !rounded-md !text-[14px] px-3"
              type="button"
              title="افزودن همسفره"
              icon={<AiOutlineUserAdd />}
              iconClasses="text-2xl"
              iconFirst={true}
              onClick={addTablemateAccordion}
            />
          </div>
        )}
        {tablemateAccordion.length > 0 &&
          tablemateAccordion.map((accordion, index) => (
            <TablemateAccordion
              key={accordion}
              index={accordion}
              isOpen={tablemateAccordion.length === index + 1 ? true : false}
              tablematesNumber={index + 1}
              onRemoveClick={() => handleRemoveTablemate(accordion)}
            />
          ))}
        {tablemateAccordion.length >= 1 && (
          <Button
            classes="w-full btn !rounded-md !text-[14px] mt-10 px-3"
            type="button"
            title="افزودن همسفره"
            icon={<AiOutlineUserAdd />}
            iconClasses="text-2xl"
            iconFirst={true}
            onClick={addTablemateAccordion}
          />
        )}
      </div>
    </QuestionCard>
  );
};

export default Tablemates;
