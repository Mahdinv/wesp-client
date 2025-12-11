import { memo } from "react";
import { HiOutlineSparkles } from "react-icons/hi";
import Button from "../../../base/inputs/Button";
import { FaArrowLeftLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="w-full xxs:h-auto lg:h-[calc(100vh-88.39px)] flex xxs:flex-col md:flex-row bg-white">
      <div className="relative xxs:w-3/4 md:w-1/2 self-center pt-12">
        <div className="absolute top-1/2 right-1/2 xxs:w-3/12 xs:w-2/12 sm:w-3/12 xl:w-3/12 2xl:w-4/12 translate-x-1/2 -translate-y-1/2 aspect-square bg-primary blur-3xl xxs:opacity-90 sm:opacity-40 md:opacity-30 xl:opacity-20 2xl:opacity-10"></div>
        <div className="flex flex-col xxs:items-center md:items-start justify-center xxs:gap-4 lg:gap-6 2xl:gap-8 md:px-10 lg:px-16 xl:px-28">
          <div className="flex flex-row items-center gap-2 bg-light-primary border-2 border-dark-light-primary rounded-full px-4 py-2">
            <HiOutlineSparkles
              className="lg:text-2xl 2xl:text-4xl"
              strokeWidth={1}
            />
            <small className="xxs:text-xxs 2xl:text-xs font-peyda">
              پلتفرم هوشمند بر پایه هوش مصنوعی
            </small>
          </div>
          <h1 className="xxs:text-center md:text-justify leading-tight">
            یک سفر بازی‌وار برای رسیدن به رژیم واقعیِ بدنِ تو
          </h1>
          <label className="xxs:text-center md:text-justify font-medium">
            با چند بازی ساده و سریع، به شخصـی‌ترین رژیم زندگیت می‌رسی.
          </label>
          <Button
            classes="w-full btn btn-primary !rounded-2xl !py-2 !px-2 !font-medium shadow-xl"
            title="سفر شما از اینجا شروع میشه"
            icon={<FaArrowLeftLong />}
            iconClasses="xxs:text-xl md:text-3xl"
          />
        </div>
      </div>
      <div className="relative xxs:w-full md:w-1/2 xxs:h-full md:h-auto self-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-10/12 aspect-square rounded-full blur-3xl opacity-20"></div>
        <div className="absolute left-0 bottom-[15%] bg-black w-4/12 h-3 rounded-full rotate-12 opacity-60 blur-lg"></div>
        <img
          src="/images/hero-image.png"
          alt="hero-image"
          loading="lazy"
          className="w-full object-cover scale-100 xxs:mx-auto md:my-auto"
        />
      </div>
    </section>
  );
};

export default memo(HeroSection);
