import { memo } from "react";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { LiaReact } from "react-icons/lia";
import { TbMathFunction } from "react-icons/tb";

const InnovativeMethodSection = () => {
  return (
    <section className="xxs:px-4 sm:px-10 md:px-16 lg:px-24 py-10">
      <h2 className="mb-2">روش نوآورانه</h2>
      <p>
        به جای پرسشنامه های خسته کننده، با بازی های تعاملی و رفتاری کوتاه، عادات
        غذایی خود را کشف کنید.
      </p>
      <div className="w-full grid xxs:grid-cols-2 sm:grid-cols-3 sm:gap-2 md:gap-4 lg:gap-10 xl:gap-14 mt-4">
        <div className="bg-[#E8F7EE] flex flex-col items-center justify-center gap-4 xxs:border-4 lg:border-[6px] border-white rounded-2xl xxs:px-1 md:px-2 xxs:py-4 md:py-6 2xl:py-8 xxs:-translate-x-1/2 sm:translate-x-0 xxs:mb-2 sm:mb-0">
          <div className="bg-white rounded-2xl py-2 px-3 shadow-md">
            <IoExtensionPuzzleOutline className="text-primary xxs:text-4xl sm:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl" />
          </div>
          <h5 className="text-center">بازی های سرگرم کننده</h5>
          <small className="text-center 2xl:px-6">
            با بازی های تعاملی و علمی، الگو های واقعی رفتار غذایی خود را کشف
            کنید.
          </small>
        </div>
        <div className="sm:hidden"></div>
        <div className="bg-[#E8F7EE] flex flex-col items-center justify-center gap-4 xxs:border-4 lg:border-[6px] border-white rounded-2xl xxs:px-1 md:px-2 xxs:py-4 md:py-6 2xl:py-8 xxs:ml-1 sm:ml-0">
          <div className="bg-white rounded-2xl py-2 px-3 shadow-md">
            <TbMathFunction className="text-primary xxs:text-4xl sm:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl" />
          </div>
          <h5 className="text-center">تحلیل علمی رفتار شما</h5>
          <small className="text-center 2xl:px-6">
            با استفاده از تصمیمات شما و روش های علمی ، الگو تغذیه ای شما را
            میشناسیم.
          </small>
        </div>
        <div className="bg-[#E8F7EE] flex flex-col items-center justify-center gap-4 xxs:border-4 lg:border-[6px] border-white rounded-2xl xxs:px-1 md:px-2 xxs:py-4 md:py-6 2xl:py-8 xxs:mr-1 sm:mr-0">
          <div className="bg-white rounded-2xl py-2 px-3 shadow-md">
            <LiaReact className="text-primary xxs:text-4xl sm:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl" />
          </div>
          <h5 className="text-center">نتایج دقیق با هوش مصنوعی</h5>
          <small className="text-center 2xl:px-6">
            نتایح دقیق و کاملا مناسب بدن شما را با هوش مصنوعی محاسبه میکنیم و به
            شما رائه میدیم.
          </small>
        </div>
      </div>
    </section>
  );
};

export default memo(InnovativeMethodSection);
