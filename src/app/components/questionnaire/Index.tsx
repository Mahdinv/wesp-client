import QuestionCard from "../../../base/QuestionCard";
import TextBox from "../../../base/inputs/TextBox";
import { LuUserRound, LuUtensils, LuWeight } from "react-icons/lu";
import { RiCandleLine } from "react-icons/ri";
import Button from "../../../base/inputs/Button";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaRegSquareCheck,
} from "react-icons/fa6";
import ProgressBar from "../../../base/ProgressBar";
import Tablemates from "../../../base/Tablemates";
import { Form } from "react-router-dom";
import {
  PiBuildings,
  PiCoins,
  PiGraduationCap,
  PiPersonSimpleRun,
  PiRuler,
  PiUsers,
  PiUsersFourLight,
} from "react-icons/pi";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Radio from "../../../base/inputs/Radio";
import { TbGenderBigender } from "react-icons/tb";
import ComboBox from "../../../base/inputs/ComboBox";
import RangeInput from "../../../base/inputs/RangeInput";
import NumberBox from "../../../base/inputs/NumberBox";
import { BsPercent } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";

const genderOptions = [
  { title: "مرد", value: "male" },
  { title: "زن", value: "female" },
  { title: "سایر", value: "other" },
];

const educationOptions = [
  { title: "زیر دیپلم", value: "below-high-school" },
  { title: "دیپلم", value: "high-school-diploma" },
  { title: "فوق دیپلم", value: "associate-degree" },
  { title: "لیسانس", value: "bachelor-degree" },
  { title: "فوق لیسانس", value: "master-degree" },
  { title: "دکتری", value: "phd" },
  { title: "فوق دکتری", value: "postdoctoral" },
];

const jobStatusOptions = [
  { title: "شاغل", value: "employed" },
  { title: "محصل", value: "student" },
  { title: "سایر", value: "other" },
];

const rangeTitles = [
  "درآمد ندارم",
  "کمتر از 10 میلیون تومان",
  "بین 10 تا 20 میلیون تومان",
  "بین 20 تا 30 میلیون تومان",
  "بین 30 تا 40 میلیون تومان",
  "بین 40 تا 50 میلیون تومان",
  "بین 50 تا 60 میلیون تومان",
  "بیشتر از 60 میلیون تومان",
];

const provinceOptions = [
  { title: "شهر", value: "city" },
  { title: "روستا", value: "village" },
];

const marriageOptions = [
  { title: "متاهل", value: "married" },
  { title: "مجرد", value: "single" },
];

const exercisePerWeekOptions = [
  { title: "یک روز در هفته", value: "1" },
  { title: "دو روز در هفته", value: "2" },
  { title: "سه روز در هفته", value: "3" },
  { title: "چهار روز در هفته", value: "4" },
  { title: "پنج روز در هفته", value: "5" },
  { title: "شش روز در هفته", value: "6" },
  { title: "هر روز هفته", value: "7" },
];

const Questionnaire = () => {
  const [step, setStep] = useState<number>(1);
  const progressValue = (100 * step) / 4;

  const elementRef = useRef<HTMLDivElement | null>(null);

  const variants = {
    visible: { opacity: 1, y: 0, pointerEvents: "auto", height: "auto" },
    hidden: { opacity: 0, y: 5, pointerEvents: "none", height: 0 },
  };

  function handleScrollToTop() {
    if (elementRef.current) {
      const headerHeight = 80;
      const container = document.querySelector(".index-container");
      if (container) {
        const elementPosition =
          elementRef.current.getBoundingClientRect().top -
          container.getBoundingClientRect().top;
        container.scrollTo({
          top: elementPosition - headerHeight,
          behavior: "smooth",
        });
      }
    }
  }

  return (
    <div
      id="testScroll"
      className="flex flex-col gap-4 mt-12 xs:w-auto xs:mx-4 sm:w-11/12 sm:mx-auto md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12"
    >
      <div ref={elementRef} className="flex flex-col text-center text-pretty">
        <h4>برای شروع چند سوال کوتاه ازت داریم</h4>
        <p>
          با پاسخ دادن به سوالات این چهار مرحله، ما بهتر می‌فهمیم رژیم مناسب شما
          چطور باید باشه
        </p>
      </div>
      <ProgressBar
        initialValie={25}
        value={progressValue}
        step={step}
        maxStep={4}
      />
      <Form method="POST" className="flex flex-col gap-4">
        <motion.div
          initial="hidden"
          animate={step === 1 ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="space-y-2 overflow-hidden"
        >
          {/* ------------ STEP 1 ---------- */}
          <QuestionCard icon={<LuUserRound />} label="اسم بازیکن">
            <TextBox
              classes="bg-gray-50 !border-gray-200 !rounded-full !px-4"
              placeHolder="اینجا بنویس"
              name="firstName"
            />
          </QuestionCard>
          <QuestionCard
            icon={<RiCandleLine />}
            label="سن بازیکن"
            title="واجب برای شناخت نیازهای اولیه مواد مغذی بدنت"
          >
            <TextBox
              classes="bg-gray-50 !border-gray-200 !rounded-full !px-4"
              placeHolder="اینجا بنویس"
              name="age"
            />
          </QuestionCard>
          <QuestionCard
            icon={<TbGenderBigender />}
            label="جنسیت بازیکن"
            title="واجب برای شناخت نیازهای اولیه مواد مغذی بدنت"
          >
            <div className="w-full mx-auto">
              <Radio
                gridColClasses="grid-cols-3"
                options={genderOptions}
                name="gender"
              />
            </div>
          </QuestionCard>
          <QuestionCard icon={<PiRuler />} label="قد" title="اختیاری">
            <TextBox
              classes="bg-gray-50 !border-gray-200 !rounded-full !px-4"
              placeHolder="اینجا بنویس"
              name="height"
            />
          </QuestionCard>
          <QuestionCard icon={<LuWeight />} label="وزن" title="اختیاری">
            <TextBox
              classes="bg-gray-50 !border-gray-200 !rounded-full !px-4"
              placeHolder="اینجا بنویس"
              name="weight"
            />
          </QuestionCard>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={step === 2 ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="space-y-2 overflow-hidden"
        >
          {/* ------------ STEP 2 ---------- */}
          <QuestionCard
            icon={<PiGraduationCap />}
            label="تحصیلات"
            title="اختیاری"
          >
            <ComboBox
              name="education"
              placeholder="لطفا انتخاب کنید"
              options={educationOptions}
            />
          </QuestionCard>
          <QuestionCard
            icon={<PiBuildings />}
            label="وضعیت شغلی"
            title="اختیاری"
          >
            <div className="w-full mx-auto">
              <Radio
                gridColClasses="grid-cols-3"
                name="jobStatus"
                options={jobStatusOptions}
              />
            </div>
          </QuestionCard>
          <QuestionCard
            icon={<PiCoins />}
            label="وضعیت درآمد (تومان)"
            title="اختیاری"
          >
            <RangeInput
              name="incomeStatus"
              rangeTitles={rangeTitles}
              min={0}
              max={rangeTitles.length - 1}
              step={1}
              initialValue={1}
            />
          </QuestionCard>
          <QuestionCard
            icon={<LuUtensils />}
            label="درصدی که به خوراک خود اختصاص می‌دهید"
            title="اختیاری"
          >
            <div className="flex flex-row items-center gap-4 xs:w-2/3 sm:w-1/3 md:w-1/4">
              <NumberBox name="foodPercentage" />
              <span className="text-xl">
                <BsPercent />
              </span>
            </div>
          </QuestionCard>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={step === 3 ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="space-y-2 overflow-hidden"
        >
          {/* ------------ STEP 3 ---------- */}
          <QuestionCard
            icon={<IoHomeOutline />}
            label="استان محل سکونت"
            title="اختیاری"
          >
            <div className="flex w-full xs:flex-col md:flex-row items-center gap-4">
              <div className="xs:w-full md:w-1/2">
                <TextBox name="provinceName" placeHolder="اینجا بنویس" />
              </div>
              <div className="xs:w-full md:w-1/2 md:mb-2">
                <Radio
                  options={provinceOptions}
                  name="province"
                  gridColClasses="grid-cols-2"
                />
              </div>
            </div>
          </QuestionCard>
          <QuestionCard icon={<PiUsers />} label="وضعیت تاهل" title="اختیاری">
            <Radio
              options={marriageOptions}
              name="marriageStatus"
              gridColClasses="grid-cols-2"
            />
          </QuestionCard>
          <QuestionCard
            icon={<PiUsersFourLight />}
            label="تعداد اعضای خانواده"
            title="اختیاری"
          >
            <TextBox name="familyMemberCount" placeHolder="اینجا بنویس" />
          </QuestionCard>
          <QuestionCard
            icon={<PiPersonSimpleRun />}
            label="تعداد روزهای ورزش در هفته"
            title="اختیاری"
          >
            <ComboBox
              options={exercisePerWeekOptions}
              name="exercisePerWeek"
              placeholder="لطفا انتخاب کنید"
            />
          </QuestionCard>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={step === 4 ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          {/* ------------ STEP 4 ---------- */}
          <Tablemates step={step} />
        </motion.div>
        <div className="flex flex-row gap-2 items-center justify-center w-full">
          {step > 1 && (
            <Button
              type="button"
              classes="btn !rounded-md !w-full"
              title="مرحله قبل"
              icon={<FaArrowRightLong />}
              iconFirst
              onClick={() => {
                handleScrollToTop();
                setStep((prev) => prev - 1);
              }}
            />
          )}
          {step < 4 && (
            <Button
              type="button"
              classes="btn btn-primary !rounded-md !w-full"
              title="مرحله بعد"
              icon={<FaArrowLeftLong />}
              onClick={() => {
                handleScrollToTop();
                setStep((prev) => prev + 1);
              }}
            />
          )}
          {step === 4 && (
            <Button
              type="submit"
              classes="btn btn-primary !rounded-md !w-full"
              title="تکمیل پرسشنامه"
              icon={<FaRegSquareCheck />}
            />
          )}
        </div>
      </Form>
    </div>
  );
};

export default Questionnaire;
