import { IoIosRefresh } from "react-icons/io";
import { toPersianDigits } from "../../../../utils/public";

const FoodPlate = () => {
  return (
    <div
      className="relative w-full h-auto rounded-full bg-white
                 xs:[box-shadow:inset_0_0_0_10px_#ffdf5f,inset_0_0_0_25px_#FEF3C7] xs:p-[20px]
                 sm:[box-shadow:inset_0_0_0_10px_#ffdf5f,inset_0_0_0_35px_#FEF3C7] sm:p-[35px]
                 md:[box-shadow:inset_0_0_0_10px_#ffdf5f,inset_0_0_0_30px_#FEF3C7] md:p-[30px]
                 lg:[box-shadow:inset_0_0_0_10px_#ffdf5f,inset_0_0_0_40px_#FEF3C7] lg:p-[60px]
                 xl:[box-shadow:inset_0_0_0_15px_#ffdf5f,inset_0_0_0_45px_#FEF3C7] xl:p-[65px]"
    >
      <div className="grid grid-cols-2 w-fit h-auto mx-auto gap-2 p-4 overflow-hidden">
        <div className="justify-self-end aspect-square xs:w-[70%] sm:w-[60%] md:w-[70%] lg:w-[80%] xl:w-[65%] 2xl:w-[55%] rounded-full overflow-hidden bg-[#D9F2E2] flex flex-col items-center justify-center border-4 border-dashed border-green-500">
          <img
            src="/images/food-group-selector-images/apple-ill.png"
            alt="apple"
            className="flex-1 xs:w-[45%] md:w-1/2 aspect-square scale-150 object-contain"
          />
          <label className="h-1/5 xs:text-[9px] sm:text-[12px] md:text-[10px] lg:text-[13px] xl:text-[14px] 2xl:text-xs font-bold mb-3 text-wrap">
            سیب
          </label>
        </div>
        <div className="justify-self-start aspect-square xs:w-[70%] sm:w-[60%] md:w-[70%] lg:w-[80%] xl:w-[65%] 2xl:w-[55%] rounded-full overflow-hidden bg-[#D9F2E2] flex flex-col items-center justify-center border-4 border-dashed border-green-500">
          <img
            src="/images/food-group-selector-images/frying-oil-ill.png"
            alt="apple"
            className="flex-1 xs:w-[45%] md:w-1/2 aspect-square scale-150 object-contain"
          />
          <label className="h-1/5 xs:text-[9px] sm:text-[12px] md:text-[10px] lg:text-[13px] xl:text-[14px] 2xl:text-xs font-bold mb-3 text-wrap">
            روغن سرخ کردنی
          </label>
        </div>
        <div className="justify-self-end aspect-square xs:w-[70%] sm:w-[60%] md:w-[70%] lg:w-[80%] xl:w-[65%] 2xl:w-[55%] rounded-full overflow-hidden bg-[#D9F2E2] flex flex-col items-center justify-center border-4 border-dashed border-green-500">
          <img
            src="/images/food-group-selector-images/olive-oil-ill.png"
            alt="apple"
            className="flex-1 xs:w-[45%] md:w-1/2 aspect-square scale-150 object-contain"
          />
          <label className="h-1/5 xs:text-[9px] sm:text-[12px] md:text-[10px] lg:text-[13px] xl:text-[14px] 2xl:text-xs font-bold mb-3 text-wrap">
            روغن زیتون
          </label>
        </div>
        <div className="relative aspect-square xs:w-[70%] sm:w-[60%] md:w-[70%] lg:w-[80%] xl:w-[65%] 2xl:w-[55%] rounded-full overflow-hidden bg-transparent text-[#626262] xs:text-3xl sm:text-5xl md:text-4xl lg:text-7xl flex items-center justify-center border-4 border-dashed border-gray-500">
          {toPersianDigits(4)}
        </div>
      </div>
      <span className="justify-self-start absolute duration-300 bg-yellow-300 hover:bg-yellow-500 xs:w-[9%] sm:w-[7%] md:w-[6%] lg:w-[8%] xl:w-[7%] aspect-square flex items-center justify-center rounded-full left-[10%] top-1/2 -translate-y-1/2 transition">
        <IoIosRefresh className="xs:text-base md:text-xs lg:text-xl xl:text-2xl" />
      </span>
    </div>
  );
};
export default FoodPlate;
