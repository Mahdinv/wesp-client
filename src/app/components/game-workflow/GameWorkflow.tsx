import { useNavigate } from "react-router-dom";
import Intro from "../../../base/Intro";
import { toPersianDigits } from "../../../utils/public";
import GameWorkflowRoadmapStep from "./GameWorkflowRoadmapStep";

const formsCatalog = [
  {
    id: 1,
    imageName: "demographic-information",
    title: "پرسشنامه اولیه",
    disable: false,
  },
  { id: 2, imageName: "tablemates", title: "همسفره‌ها", disable: true },
  { id: 3, imageName: "past-week-intake", title: "رژیم فعلی", disable: true },
  { id: 4, imageName: "preferred-food", title: "علاقه تو", disable: true },
  { id: 5, imageName: "free-shopping", title: "خرید آزاد", disable: true },
  { id: 6, imageName: "limited-shopping", title: "خرید محدود", disable: true },
  {
    id: 7,
    imageName: "social-alignment",
    title: "همسویی با جامعه",
    disable: true,
  },
];

const GameWorkflow = () => {
  const navigate = useNavigate();
  return (
    <>
      <Intro
        headingTitle="سفر تغذیه‌ای تو از همین‌جا شروع میشه"
        title={` در یک سفر ${toPersianDigits(7)} مرحله‌ای، عادت‌ها و ترجیحاتت رو
          می‌شناسیم تا در پایان، رژیمی کاملاً مطابق با بدن و سبک زندگی تو
          بسازیم.`}
      />
      <div className="grid grid-cols-2 items-center w-full xxs:mt-7 lg:mt-16">
        {formsCatalog.map((fc, index) => {
          const isOdd = (index + 1) % 2 !== 0;
          return (
            <GameWorkflowRoadmapStep
              key={index}
              isOdd={isOdd}
              counter={index + 1}
              imageName={fc.imageName}
              title={fc.title}
              onStartGameClick={() => {
                navigate("/game-workflow/demographic-information");
              }}
              disable={fc.disable}
            />
          );
        })}
      </div>
      <div className="xxs:w-full md:w-[81%] lg:w-[83%] xl:w-[75%] 2xl:[70%] xxs:px-6 sm:px-10 md:mx-auto mt-10">
        <div className="relative flex flex-col items-center justify-center bg-yellow-100 border-4 border-yellow-500 rounded-[39px] [box-shadow:0_27px_78px_0_#FFDF5F96] py-8 xxs:gap-4 lg:gap-8">
          <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full xxs:w-9 sm:w-14 md:w-16 lg:w-20 xl:w-24 aspect-square flex items-center justify-center xxs:text-base lg:text-5xl text-white">
            <div className="font-rokh xxs:text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-5xl xxs:translate-y-1 lg:translate-y-2">
              {toPersianDigits(formsCatalog.length + 1)}
            </div>
          </div>

          <img
            className="xxs:w-[126px] sm:w-[140px] md:w-[200px] lg:w-[250px] 2xl:w-[309px] aspect-square xxs:rounded-xl rounded-[48px] border border-black object-cover"
            src="/images/forms-catalog-roadmap-step/step-eight.jpg"
            alt=""
          />

          <h2 className="text-[#007A55]">رژیم غذایی پایدار شخصی‌سازی‌شده</h2>
        </div>
      </div>
      <div className="xxs:w-full xxs:px-4 xl:w-[70%] xl:mx-auto xxs:mt-12 xl:mt-16">
        <h3 className="!font-peyda text-center text-[#001F17] opacity-80">
          فقط {toPersianDigits(15)} دقیقه تا دستیابی به رژیم غذایی شخصی‌سازی‌شده
        </h3>
      </div>
    </>
  );
};

export default GameWorkflow;
