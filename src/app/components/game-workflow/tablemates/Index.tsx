import { PiUsersThree } from "react-icons/pi";
import QuestionCard from "../../../../base/QuestionCard";
import Button from "../../../../base/inputs/Button";
import { AiOutlineUserAdd } from "react-icons/ai";
import TablemateAccordion from "./TablemateAccordion";
import { useCallback, useEffect, useState } from "react";
import Intro from "../../../../base/Intro";
import { FaRegSquareCheck } from "react-icons/fa6";
import { Form, useActionData, useNavigation } from "react-router-dom";

const Tablemates = () => {
  const [tablemateAccordion, setTablemateAccordion] = useState<number[]>([]);
  const res = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (res) {
      if (res.success) {
        // toast.success(res.message);
      } else {
        // toast.error(res.message);
      }
    }
  }, [res]);

  function addTablemateAccordion() {
    if (tablemateAccordion.length < 10) {
      setTablemateAccordion((prev) => [...prev, prev.length]);
    } else {
      // toast.error("شما تنها می‌توانید 10 همسفره به لیست خود اضافه کنید.");
      return;
    }
  }

  const handleRemoveTablemate = useCallback(function handleRemoveTablemate(
    accordion: number
  ) {
    setTablemateAccordion((prev) => {
      return prev.filter((tablemate) => tablemate !== accordion);
    });
  },
  []);

  return (
    <>
      <Intro
        headingTitle="همسفره‌های خود را مشخص کنید"
        title="افرادی که معمولا با آنها غذا میخورید."
      />
      <Form
        method="POST"
        className="flex flex-col gap-10 mt-12 xs:w-auto xs:mx-4 sm:w-11/12 sm:mx-auto md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12"
      >
        <QuestionCard icon={<PiUsersThree />} label="همسفره‌ها">
          <div className="w-full h-auto space-y-4">
            {tablemateAccordion.length === 0 && (
              <div className="w-full h-auto border-2 border-dashed border-gray-300 rounded-xl text-center py-20">
                <Button
                  classes="btn !rounded-2xl !text-[14px] px-3"
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
                  isOpen={
                    tablemateAccordion.length === index + 1 ? true : false
                  }
                  tablematesNumber={index + 1}
                  onRemoveClick={() => handleRemoveTablemate(accordion)}
                />
              ))}
            {tablemateAccordion.length >= 1 && (
              <Button
                classes="w-full btn !rounded-2xl !text-[14px] mt-10 px-3"
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
        <Button
          classes="btn btn-primary !rounded-2xl"
          title={`${isSubmitting ? "در حال ارسال..." : "ارسال همسفره‌ها"}`}
          icon={!isSubmitting ? <FaRegSquareCheck /> : undefined}
          iconClasses="text-xl"
          itemsGap={12}
        />
      </Form>
    </>
  );
};

export default Tablemates;
