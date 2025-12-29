import { toPersianDigits } from "../../../../utils/public";

const FoodFrequencyHelpBar = () => {
  return (
    <div className="relative grid xxs:grid-cols-3 md:grid-cols-5 w-full items-center py-2 px-2 bg-white rounded-3xl">
      <div className="border-e border-[#5F5F5F] border-opacity-10">
        <div className="flex flex-col items-center justify-center xxs:gap-2 md:gap-2 w-auto mx-auto py-1 xxs:px-1 md:px-2 lg:px-4">
          <div className="flex flex-row items-center xxs:gap-1 sm:gap-1">
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
          </div>
          <label className="!font-medium">عدم استفاده</label>
        </div>
      </div>
      <div className="border-e border-[#5F5F5F] border-opacity-10">
        <div className="flex flex-col items-center justify-center xxs:gap-2 md:gap-2 w-auto mx-auto py-1 xxs:px-1 md:px-2 lg:px-4">
          <div className="flex flex-row items-center xxs:gap-1 sm:gap-1">
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
          </div>
          <label className="!font-medium">
            {toPersianDigits(1)} الی {toPersianDigits(2)} بار
          </label>
        </div>
      </div>
      <div className="md:border-e md:border-[#5F5F5F] md:border-opacity-10">
        <div className="flex flex-col items-center justify-center xxs:gap-2 md:gap-2 w-auto mx-auto py-1 xxs:px-1 md:px-2 lg:px-4">
          <div className="flex flex-row items-center xxs:gap-1 sm:gap-1">
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
          </div>
          <label className="!font-medium">
            {toPersianDigits(3)} الی {toPersianDigits(4)} بار
          </label>
        </div>
      </div>

      <div className="md:hidden w-10/12 h-[1px] mx-auto col-span-3 bg-[#5F5F5F] opacity-10 my-2"></div>

      <div className="border-e border-[#5F5F5F] border-opacity-10 xxs:-translate-x-1/2 md:translate-x-0">
        <div className="flex flex-col items-center justify-center xxs:gap-2 md:gap-2 w-auto mx-auto py-1 xxs:px-1 md:px-2 lg:px-4">
          <div className="flex flex-row items-center xxs:gap-1 sm:gap-1">
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
          </div>
          <label className="!font-medium">
            {toPersianDigits(5)} الی {toPersianDigits(6)} بار
          </label>
        </div>
      </div>

      <div className="xxs:-translate-x-1/2 md:translate-x-0">
        <div className="flex flex-col items-center justify-center xxs:gap-2 md:gap-2 w-auto mx-auto py-1 xxs:px-1 md:px-2 lg:px-4">
          <div className="flex flex-row items-center xxs:gap-1 sm:gap-1">
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
            <div className="xxs:w-3 sm:w-4 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
          </div>
          <label className="!font-medium">
            بیشتر از {toPersianDigits(7)} بار
          </label>
        </div>
      </div>
    </div>
  );
};

export default FoodFrequencyHelpBar;
