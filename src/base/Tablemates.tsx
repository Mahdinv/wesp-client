import { PiUsersThree } from "react-icons/pi";
import QuestionCard from "./QuestionCard";
import Button from "./inputs/Button";
import { AiOutlineUserAdd } from "react-icons/ai";
import TablemateAccordion from "./TablemateAccordion";
import { useState } from "react";

const Tablemates = () => {
  const [tablemateAccordion, setTablemateAccordion] = useState<number[]>([]);
  function addTablemateAccordion() {
    setTablemateAccordion((prev) => [...prev, prev.length]);
  }

  function handleRemoveTablemate(accordion: number) {
    setTablemateAccordion((prev) => {
      return prev.filter((tablemate) => tablemate !== accordion);
    });
  }
  return (
    <QuestionCard icon={<PiUsersThree />} label="همسفره‌ها">
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
            isOpen={tablemateAccordion.length === 1}
            tablematesNumber={index + 1}
            onRemoveClick={() => handleRemoveTablemate(accordion)}
          />
        ))}
      {tablemateAccordion.length >= 1 && (
        <Button
          classes="btn !rounded-md !text-[14px] mt-10 px-3"
          type="button"
          title="افزودن همسفره"
          icon={<AiOutlineUserAdd />}
          iconClasses="text-2xl"
          iconFirst={true}
          onClick={addTablemateAccordion}
        />
      )}
    </QuestionCard>
  );
};

export default Tablemates;
