import QuestionCard from "../../../../base/QuestionCard";
import TextBox from "../../../../base/inputs/TextBox";
import { LuUserRound, LuUtensils, LuWeight } from "react-icons/lu";
import { RiCandleLine } from "react-icons/ri";
import Button from "../../../../base/inputs/Button";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaRegSquareCheck,
} from "react-icons/fa6";
import ProgressBar from "../../../../base/ProgressBar";
import {
  PiBuildings,
  PiCoins,
  PiGraduationCap,
  PiPersonSimpleRun,
  PiRuler,
  PiUsers,
  PiUsersFourLight,
} from "react-icons/pi";
import { useActionState, useRef, useState } from "react";
import { motion } from "framer-motion";
import Radio from "../../../../base/inputs/Radio";
import { TbGenderBigender } from "react-icons/tb";
import ComboBox from "../../../../base/inputs/ComboBox";
import RangeInput from "../../../../base/inputs/RangeInput";
import NumberBox from "../../../../base/inputs/NumberBox";
import { BsPercent } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import isEmpty from "../../../../utils/validation";
import api from "../../../../api/axios";
import Intro from "../../../../base/Intro";
import DemographicInformationModel from "../../../../models/demographic-information.model";
import handleAxiosError from "../../../../api/axios-error-handler";
import { useNavigate } from "react-router-dom";

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

const jobStateOptions = [
  { title: "شاغل", value: "employed" },
  { title: "محصل", value: "student" },
  { title: "سایر", value: "other" },
];

const incomeBrackets = [
  { title: "درآمد ندارم", value: "0" },
  { title: "کمتر از 10 میلیون تومان", value: "0-10" },
  { title: "بین 10 تا 30 میلیون تومان", value: "10-30" },
  { title: "بین 30 تا 50 میلیون تومان", value: "30-50" },
  { title: "بین 50 تا 70 میلیون تومان", value: "50-70" },
  { title: "بین 70 تا 90 میلیون تومان", value: "70-90" },
  { title: "بیشتر از 90 میلیون تومان", value: "90+" },
];

const maritalStatusOptions = [
  { title: "متاهل", value: "married" },
  { title: "مجرد", value: "single" },
];

const sportDaysPerWeekOptions = [
  { title: "حداکثر دوبار", value: "0-2" },
  { title: "یک تا سه بار", value: "1-3" },
  { title: "دو تا چهار بار", value: "2-4" },
  { title: "سه تا پنج بار", value: "3-5" },
  { title: "چهار تا شش بار", value: "4-6" },
];

const provinceOptions = [
  { title: "آذربایجان شرقی", value: "azarbaijan_sharqi" },
  { title: "آذربایجان غربی", value: "azarbaijan_gharbi" },
  { title: "اردبیل", value: "ardabil" },
  { title: "اصفهان", value: "esfahan" },
  { title: "البرز", value: "alborz" },
  { title: "ایلام", value: "ilam" },
  { title: "بوشهر", value: "bushehr" },
  { title: "تهران", value: "tehran" },
  { title: "چهارمحال و بختیاری", value: "chaharmahal_bakhtiari" },
  { title: "خراسان جنوبی", value: "khorasan_jonoobi" },
  { title: "خراسان رضوی", value: "khorasan_razavi" },
  { title: "خراسان شمالی", value: "khorasan_shomali" },
  { title: "خوزستان", value: "khuzestan" },
  { title: "زنجان", value: "zanjan" },
  { title: "سمنان", value: "semnan" },
  { title: "سیستان و بلوچستان", value: "sistan_baluchestan" },
  { title: "فارس", value: "fars" },
  { title: "قزوین", value: "qazvin" },
  { title: "قم", value: "qom" },
  { title: "کردستان", value: "kurdistan" },
  { title: "کرمان", value: "kerman" },
  { title: "کرمانشاه", value: "kermanshah" },
  { title: "کهگیلویه و بویراحمد", value: "kohgiluyeh_boyerahmad" },
  { title: "گلستان", value: "golestan" },
  { title: "گیلان", value: "gilan" },
  { title: "لرستان", value: "lorestan" },
  { title: "مازندران", value: "mazandaran" },
  { title: "مرکزی", value: "markazi" },
  { title: "هرمزگان", value: "hormozgan" },
  { title: "همدان", value: "hamedan" },
  { title: "یزد", value: "yazd" },
];

const DemographicInformation = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  const progressValue = Math.round((100 * step) / 3);

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

  function handleNextStep() {
    handleScrollToTop();
    setStep((prev) => prev + 1);
  }

  async function demographicInformationAction(
    formState: any,
    formData: FormData
  ) {
    const entries = Object.fromEntries(formData.entries());
    const model = new DemographicInformationModel().deserialize(entries || {});

    if (step < 3) {
      if (isEmpty(model.name)) {
        // toast.error("لطفا اسم بازیکن را وارد کنید");
        return model.getData();
      }
      if (isEmpty(model.age)) {
        // toast.error("لطفا سن بازیکن را وارد کنید");
        return model.getData();
      }
      if (isEmpty(model.gender)) {
        // toast.error("لطفا جنسیت بازیکن را وارد کنید");
        return model.getData();
      }
      handleNextStep();
      return model.getData();
    }

    if (step === 3) {
      try {
        const response = await api.post(`/forms/form1/`, model.toServer());
        if (response.status === 201) {
          // toast.success("فرم پرسشنامه با موفقیت تکمیل شد");
          navigate("/game-workflow");
        }
      } catch (error) {
        // const errorRes = handleAxiosError(error);
        handleAxiosError(error);
        // toast.error(errorRes.message);
        return model.getData();
      }
    }
  }

  const [formState, formAction, pending] = useActionState(
    demographicInformationAction,
    null
  );

  return (
    <>
      <Intro
        elementRef={elementRef}
        headingTitle="برای شروع چند سوال کوتاه ازت داریم"
        title="با پاسخ دادن به سوالات این چهار مرحله، ما بهتر می‌فهمیم رژیم مناسب شما
          چطور باید باشه."
      />
      <div className="flex flex-col gap-6 mt-12 xs:w-auto xs:mx-4 sm:w-11/12 sm:mx-auto md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12">
        <ProgressBar
          initialValie={25}
          value={progressValue}
          step={step}
          maxStep={3}
        />
        <form action={formAction} className="flex flex-col gap-4 bggr">
          <motion.div
            initial="hidden"
            animate={step === 1 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
            className="space-y-4 overflow-hidden"
          >
            {/* ------------ STEP 1 ---------- */}
            <QuestionCard icon={<LuUserRound />} label="اسم بازیکن">
              <TextBox
                classes="bg-[#F3F3F5] !border-gray-200 !rounded-2xl !px-4"
                placeHolder="اینجا بنویس"
                name="name"
                defaultValue={formState?.name}
              />
            </QuestionCard>
            <QuestionCard
              icon={<RiCandleLine />}
              label="سن بازیکن"
              title="واجب برای شناخت نیازهای اولیه مواد مغذی بدنت"
            >
              <TextBox
                classes="bg-[#F3F3F5] !border-gray-200 !rounded-2xl !px-4"
                placeHolder="اینجا بنویس"
                name="age"
                defaultValue={formState?.age}
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
                  defaultValue={formState?.gender}
                />
              </div>
            </QuestionCard>
            <QuestionCard icon={<PiRuler />} label="قد" title="اختیاری">
              <TextBox
                classes="bg-[#F3F3F5] !border-gray-200 !rounded-2xl !px-4"
                placeHolder="اینجا بنویس"
                name="heightCm"
                defaultValue={formState?.heightCm}
              />
            </QuestionCard>
            <QuestionCard icon={<LuWeight />} label="وزن" title="اختیاری">
              <TextBox
                classes="bg-[#F3F3F5] !border-gray-200 !rounded-2xl !px-4"
                placeHolder="اینجا بنویس"
                name="weightKg"
                defaultValue={formState?.weightKg}
              />
            </QuestionCard>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={step === 2 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
            className="space-y-4 overflow-hidden"
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
                  name="jobState"
                  options={jobStateOptions}
                />
              </div>
            </QuestionCard>
            <QuestionCard
              icon={<PiCoins />}
              label="وضعیت درآمد (تومان)"
              title="اختیاری"
            >
              <RangeInput
                name="incomeBracket"
                rangeTitles={incomeBrackets}
                min={0}
                max={incomeBrackets.length - 1}
                step={1}
                initialValue={2}
              />
            </QuestionCard>
            <QuestionCard
              icon={<LuUtensils />}
              label="درصد هزینه‌ای که به خوراک خود اختصاص می‌دهید"
              title="اختیاری"
            >
              <div className="flex flex-row items-center gap-4 xs:w-2/3 sm:w-1/3 md:w-1/4">
                <NumberBox
                  classes="bg-[#F3F3F5] !border-gray-200 !rounded-2xl !px-4"
                  name="dietIncomePercent"
                  defaultValue={formState?.dietIncomePercent}
                />
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
            className="space-y-4 overflow-hidden"
          >
            {/* ------------ STEP 3 ---------- */}
            <QuestionCard
              icon={<IoHomeOutline />}
              label="استان محل سکونت"
              title="اختیاری"
            >
              <ComboBox
                options={provinceOptions}
                name="province"
                placeholder="لطفا انتخاب کنید"
                searchable
              />
            </QuestionCard>
            <QuestionCard icon={<PiUsers />} label="وضعیت تاهل" title="اختیاری">
              <Radio
                options={maritalStatusOptions}
                name="maritalStatus"
                gridColClasses="grid-cols-2"
              />
            </QuestionCard>
            <QuestionCard
              icon={<PiUsersFourLight />}
              label="تعداد اعضای خانواده"
              title="اختیاری"
            >
              <TextBox
                classes="bg-[#F3F3F5] !border-gray-200 !rounded-2xl !px-4"
                name="familyMembers"
                placeHolder="اینجا بنویس"
              />
            </QuestionCard>
            <QuestionCard
              icon={<PiPersonSimpleRun />}
              label="تعداد روزهای ورزش در هفته"
              title="اختیاری"
            >
              <Radio
                options={sportDaysPerWeekOptions}
                name="sportDaysPerWeek"
                gridColClasses="xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
              />
            </QuestionCard>
          </motion.div>

          <div
            className="flex flex-row gap-2 items-center justify-center w-full"
            style={{ marginTop: step === 3 ? "20px" : undefined }}
          >
            {step > 1 && (
              <Button
                type="button"
                classes="btn !rounded-2xl !w-full"
                title="مرحله قبل"
                icon={<FaArrowRightLong />}
                iconClasses="pt-1"
                iconFirst
                itemsGap={15}
                onClick={() => {
                  handleScrollToTop();
                  setStep((prev) => prev - 1);
                }}
              />
            )}

            <Button
              type="submit"
              classes="btn btn-primary !rounded-2xl !w-full"
              title={`${
                step !== 3
                  ? "مرحله بعد"
                  : step === 3 && !pending
                  ? "تکمیل پرسشنامه"
                  : "درحال ارسال فرم..."
              }`}
              icon={
                step !== 3 ? (
                  <FaArrowLeftLong />
                ) : step === 3 && !pending ? (
                  <FaRegSquareCheck />
                ) : undefined
              }
              iconClasses="pt-1"
              itemsGap={15}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default DemographicInformation;
