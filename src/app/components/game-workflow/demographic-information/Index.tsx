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
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Radio from "../../../../base/inputs/Radio";
import { TbGenderBigender } from "react-icons/tb";
import ComboBox from "../../../../base/inputs/ComboBox";
import RangeInput from "../../../../base/inputs/RangeInput";
import NumberBox from "../../../../base/inputs/NumberBox";
import { BsPercent } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import Intro from "../../../../base/Intro";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  DemographicInformationForm,
  demographicInformationFormSchema,
} from "../../../../schemas/demographic-information-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { updateUserProfile } from "../../../../http/demographic-information";
import { useUserStore } from "../../../../store/user-store";
import { toast } from "sonner";
import handleAxiosError from "../../../../api/error-handling";
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
  const user = useUserStore((state) => state.user);
  const [step, setStep] = useState<number>(1);
  const progressValue = Math.round((100 * step) / 3);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user?.email,
      fullName: user?.fullName,
      age: "",
      gender: "",
      properties: {
        heightCm: undefined,
        weightKg: undefined,
        education: "",
        jobState: "",
        incomeBracket: "10-30",
        dietIncomePercent: undefined,
        province: "",
        maritalStatus: "",
        familyMembers: undefined,
        sportDaysPerWeek: "",
      },
    },
    resolver: zodResolver(demographicInformationFormSchema),
  });

  const { mutate } = useMutation({
    mutationFn: updateUserProfile,
    onSuccess: () => {
      toast.success("مرحله اول با موفقیت به اتمام رسید");
      navigate("/game-workflow");
    },
    onError: (error) => {
      toast.error(handleAxiosError(error).message);
    },
  });

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

  const onDemographicInformationFormHandler: SubmitHandler<
    DemographicInformationForm
  > = (data) => {
    if (step < 3) {
      handleScrollToTop();
      setStep((prev) => prev + 1);
      return;
    }
    mutate(data);
  };

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
        <form
          onSubmit={handleSubmit(onDemographicInformationFormHandler)}
          className="flex flex-col gap-4"
          noValidate
        >
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="space-y-4"
            >
              {/* ------------ STEP 1 ---------- */}
              <QuestionCard icon={<LuUserRound />} label="اسم بازیکن">
                <TextBox
                  classes="bg-[#F3F3F5] !rounded-full !px-2 !h-11"
                  placeHolder="اینجا بنویس"
                  {...register("fullName")}
                  error={errors.fullName?.message}
                />
              </QuestionCard>
              <QuestionCard
                icon={<RiCandleLine />}
                label="سن بازیکن"
                title="واجب برای شناخت نیازهای اولیه مواد مغذی بدنت"
              >
                <NumberBox
                  classes="bg-[#F3F3F5] !rounded-full !px-2 !h-11"
                  placeHolder="اینجا بنویس"
                  {...register("age")}
                  error={errors.age?.message}
                />
              </QuestionCard>
              <QuestionCard
                icon={<TbGenderBigender />}
                label="جنسیت بازیکن"
                title="واجب برای شناخت نیازهای اولیه مواد مغذی بدنت"
              >
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Radio
                      gridColClasses="grid-cols-3"
                      options={genderOptions}
                      value={field.value ?? ""}
                      onChange={field.onChange}
                      error={errors.gender?.message}
                    />
                  )}
                />
              </QuestionCard>
              <QuestionCard icon={<PiRuler />} label="قد" title="اختیاری">
                <NumberBox
                  classes="bg-[#F3F3F5] !rounded-full !px-2 !h-11"
                  placeHolder="اینجا بنویس"
                  {...register("properties.heightCm", { valueAsNumber: true })}
                  error={errors.properties?.heightCm?.message}
                />
              </QuestionCard>
              <QuestionCard icon={<LuWeight />} label="وزن" title="اختیاری">
                <NumberBox
                  classes="bg-[#F3F3F5] !rounded-full !px-2 !h-11"
                  placeHolder="اینجا بنویس"
                  {...register("properties.weightKg", { valueAsNumber: true })}
                  error={errors.properties?.weightKg?.message}
                />
              </QuestionCard>
            </motion.div>
          )}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="space-y-4"
            >
              {/* ------------ STEP 2 ---------- */}
              <QuestionCard
                icon={<PiGraduationCap />}
                label="تحصیلات"
                title="اختیاری"
              >
                <Controller
                  name="properties.education"
                  control={control}
                  render={({ field }) => (
                    <ComboBox
                      placeholder="لطفا انتخاب کنید"
                      options={educationOptions}
                      value={field.value ?? ""}
                      onChange={field.onChange}
                      error={errors.properties?.education?.message}
                    />
                  )}
                />
              </QuestionCard>
              <QuestionCard
                icon={<PiBuildings />}
                label="وضعیت شغلی"
                title="اختیاری"
              >
                <Controller
                  name="properties.jobState"
                  control={control}
                  render={({ field }) => (
                    <Radio
                      gridColClasses="grid-cols-3"
                      options={jobStateOptions}
                      value={field.value ?? ""}
                      onChange={field.onChange}
                      error={errors.properties?.jobState?.message}
                    />
                  )}
                />
              </QuestionCard>
              <QuestionCard
                icon={<PiCoins />}
                label="وضعیت درآمد (تومان)"
                title="اختیاری"
              >
                <Controller
                  name="properties.incomeBracket"
                  control={control}
                  render={({ field }) => (
                    <RangeInput
                      options={incomeBrackets}
                      min={0}
                      max={incomeBrackets.length - 1}
                      step={1}
                      initialValue={2}
                      value={field.value ?? ""}
                      onChange={field.onChange}
                      error={errors.properties?.incomeBracket?.message}
                    />
                  )}
                />
              </QuestionCard>
              <QuestionCard
                icon={<LuUtensils />}
                label="درصد هزینه‌ای که به خوراک خود اختصاص می‌دهید"
                title="اختیاری"
              >
                <div className="flex flex-row items-center gap-4 xs:w-2/3 sm:w-1/3 md:w-1/4">
                  <NumberBox
                    classes="bg-[#F3F3F5] !rounded-full !px-2 !h-11"
                    {...register("properties.dietIncomePercent", {
                      valueAsNumber: true,
                    })}
                    error={errors.properties?.dietIncomePercent?.message}
                  />
                  <span className="text-xl">
                    <BsPercent />
                  </span>
                </div>
              </QuestionCard>
            </motion.div>
          )}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="space-y-4"
            >
              {/* ------------ STEP 3 ---------- */}
              <QuestionCard
                icon={<IoHomeOutline />}
                label="استان محل سکونت"
                title="اختیاری"
              >
                <Controller
                  name="properties.province"
                  control={control}
                  render={({ field }) => (
                    <ComboBox
                      options={provinceOptions}
                      placeholder="لطفا انتخاب کنید"
                      searchable
                      value={field.value ?? ""}
                      onChange={field.onChange}
                      error={errors.properties?.province?.message}
                    />
                  )}
                />
              </QuestionCard>
              <QuestionCard
                icon={<PiUsers />}
                label="وضعیت تاهل"
                title="اختیاری"
              >
                <Controller
                  name="properties.maritalStatus"
                  control={control}
                  render={({ field }) => (
                    <Radio
                      options={maritalStatusOptions}
                      gridColClasses="grid-cols-2"
                      value={field.value ?? ""}
                      onChange={field.onChange}
                      error={errors.properties?.maritalStatus?.message}
                    />
                  )}
                />
              </QuestionCard>
              <QuestionCard
                icon={<PiUsersFourLight />}
                label="تعداد اعضای خانواده"
                title="اختیاری"
              >
                <NumberBox
                  classes="bg-[#F3F3F5] !rounded-full !px-2 !h-11"
                  placeHolder="اینجا بنویس"
                  {...register("properties.familyMembers", {
                    valueAsNumber: true,
                  })}
                  error={errors.properties?.familyMembers?.message}
                />
              </QuestionCard>
              <QuestionCard
                icon={<PiPersonSimpleRun />}
                label="تعداد روزهای ورزش در هفته"
                title="اختیاری"
              >
                <Controller
                  name="properties.sportDaysPerWeek"
                  control={control}
                  render={({ field }) => (
                    <ComboBox
                      options={sportDaysPerWeekOptions}
                      placeholder="لطفا انتخاب کنید"
                      searchable
                      value={field.value ?? ""}
                      onChange={field.onChange}
                      error={errors.properties?.sportDaysPerWeek?.message}
                    />
                  )}
                />
              </QuestionCard>
            </motion.div>
          )}

          <div className="flex flex-row gap-2 items-center justify-center w-full mt-4">
            {step > 1 && (
              <Button
                type="button"
                classes="btn btn-outline !rounded-2xl !w-full"
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
              title={`${step !== 3 ? "مرحله بعد" : "تکمیل پرسشنامه"}`}
              icon={step !== 3 ? <FaArrowLeftLong /> : <FaRegSquareCheck />}
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
