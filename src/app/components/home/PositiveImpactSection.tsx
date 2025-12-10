import { memo } from "react";
import { LuBicepsFlexed } from "react-icons/lu";

const PositiveImpactSection = () => {
  return (
    <section className="bg-white xxs:px-4 sm:px-10 md:px-16 lg:px-24 py-10">
      <h2 className="mb-2">تاثیر مثبت رژیم پایدار</h2>
      <p>ما اینجاییم تا تغییری مثبت، واقعی و ماندگار بسازیم.</p>
      <div className="w-full grid xxs:grid-cols-1 sm:grid-cols-3 xxs:gap-2 sm:gap-4 lg:gap-6 mt-4">
        <div className="bg-light-primary relative xxs:rounded-2xl sm:rounded-xl lg:rounded-2xl overflow-hidden">
          <h4 className="absolute xxs:top-4 xs:top-6 sm:top-4 md:top-5 lg:top-10 right-1/2 translate-x-1/2 text-nowrap font-medium">
            کمک به تغذیه‌ی <span className="font-extrabold">کاملا سالم</span>
          </h4>
          <img
            src="/images/apple-homepage.png"
            alt="apple-homepage"
            loading="lazy"
            className="xxs:w-11/12 xs:w-10/12 sm:w-11/12 mx-auto xxs:translate-y-1/4 sm:translate-y-1/3"
          />
        </div>
        <div className="bg-light-primary relative xxs:col-span-1 sm:col-span-2 xxs:rounded-2xl sm:rounded-xl lg:rounded-2xl overflow-hidden">
          <div className="xxs:absolute sm:static xxs:pt-2 xxs:px-4 xs:pt-4 sm:pt-4 md:pt-6 lg:pt-10 sm:px-4 md:px-4 lg:px-8">
            <h4 className="text-nowrap font-medium lg:mb-4 xl:mb-0">
              رژیم <span className="font-extrabold">شخصی‌سازی شده</span>
            </h4>
            <h4 className="text-nowrap font-medium">
              کاملا مناسب شرایط و نیاز بدن شما
            </h4>
          </div>
          <div className="bg-white absolute bottom-[10%] right-1/3 z-10 flex flex-row items-center rounded-lg shadow-md gap-2 py-1 px-2">
            <LuBicepsFlexed className="scale-x-[-1] -rotate-3 lg:text-2xl xl:text-3xl" />
            <small className="font-bold">High Protein</small>
          </div>
          <img
            src="/images/vegan-plate-homepage.png"
            alt="vegan-plate-homepage"
            loading="lazy"
            className="sm:absolute w-[60%] -rotate-45 float-end xxs:-translate-x-[10%] xxs:translate-y-[25%] xs:translate-y-[20%] sm:translate-x-0 sm:translate-y-0 sm:top-[5%] sm:-left-[8%] md:-left-[4%] lg:-left-[8%] xl:-left-[5%]"
          />
        </div>
        <div className="xxs:order-4 sm:order-3 bg-light-primary relative xxs:col-span-1 sm:col-span-2 xxs:rounded-2xl sm:rounded-xl lg:rounded-2xl overflow-hidden">
          <div className="absolute xxs:top-4 xs:top-6 lg:top-10 right-1/2 xxs:translate-x-[20%] sm:translate-x-1/3">
            <h4 className="text-nowrap font-medium">
              پایداری با <span className="font-extrabold">محیط‌زیست</span>
            </h4>
            <h4 className="text-nowrap font-medium">
              ایجاد تعادل بین سلامت <br className="xxs:block xs:hidden" /> فرد و{" "}
              <br className="xxs:hidden xs:block sm:hidden" /> سلامت سیاره
            </h4>
          </div>
          <img
            src="/images/serve-plate-homepage.png"
            alt="server-plate-homepage"
            loading="lazy"
            className="xxs:w-11/12 xs:w-3/4 sm:w-[61%]"
          />
        </div>
        <div className="xxs:order-3 sm:order-4 bg-light-primary relative xxs:rounded-2xl sm:rounded-xl lg:rounded-2xl overflow-hidden">
          <h4 className="sm:absolute sm:top-5 lg:top-10 sm:right-1/2 sm:translate-x-1/2 text-nowrap font-medium xxs:pt-6 sm:pt-0 text-center">
            <span className="font-extrabold">مدیریت بودجه</span> بدون افت کیفیت
          </h4>
          <img
            src="/images/basket-homepage.png"
            alt="basket-homepage"
            loading="lazy"
            className="w-full xxs:scale-100 sm:scale-125 sm:absolute sm:bottom-0 sm:right-0 translate-x-[15%] xxs:translate-y-[5%] sm:translate-y-0"
          />
        </div>
      </div>
    </section>
  );
};

export default memo(PositiveImpactSection);
