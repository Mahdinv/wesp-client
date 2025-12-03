import { toPersianDigits } from "../../../../utils/public";

const FoodFrequencyHelpBar = () => {
  return (
    <div className="flex flex-row gap-1 w-full items-center py-2 px-2 bg-white rounded-full">
      <div className="flex-grow border-e border-[#D4D7DE]">
        <div className="flex flex-col items-center justify-center xs:gap-1 md:gap-2 w-auto border-e border-[#D4D7DE] mx-auto py-1 xs:px-1 md:px-2 lg:px-4">
          <div className="flex flex-row items-center xs:gap-0 sm:gap-1">
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
          </div>
          <label className="xs:text-[9.6px] sm:text-[12px] md:text-[14px] lg:text-xs !font-light font-yekan">
            عدم استفاده
          </label>
        </div>
      </div>
      <div className="flex-grow border-e border-[#D4D7DE]">
        <div className="flex flex-col items-center justify-center xs:gap-1 md:gap-2 w-auto border-e border-[#D4D7DE] mx-auto py-1 xs:px-1 md:px-2 lg:px-4">
          <div className="flex flex-row items-center xs:gap-0 sm:gap-1">
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
          </div>
          <label className="xs:text-[9.6px] sm:text-[12px] md:text-[14px] lg:text-xs !font-light font-yekan">
            {toPersianDigits(1)} تا {toPersianDigits(2)} بار
          </label>
        </div>
      </div>
      <div className="flex-grow border-e border-[#D4D7DE]">
        <div className="flex flex-col items-center justify-center xs:gap-1 md:gap-2 w-auto border-e border-[#D4D7DE] mx-auto py-1 xs:px-1 md:px-2 lg:px-4">
          <div className="flex flex-row items-center xs:gap-0 sm:gap-1">
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
          </div>
          <label className="xs:text-[9.6px] sm:text-[12px] md:text-[14px] lg:text-xs !font-light font-yekan">
            {toPersianDigits(3)} تا {toPersianDigits(4)} بار
          </label>
        </div>
      </div>
      <div className="flex-grow border-e border-[#D4D7DE]">
        <div className="flex flex-col items-center justify-center xs:gap-1 md:gap-2 w-auto border-e border-[#D4D7DE] mx-auto py-1 xs:px-1 md:px-2 lg:px-4">
          <div className="flex flex-row items-center xs:gap-0 sm:gap-1">
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#D9D9D9] rounded-full"></div>
          </div>
          <label className="xs:text-[9.6px] sm:text-[12px] md:text-[14px] lg:text-xs !font-light font-yekan">
            {toPersianDigits(5)} تا {toPersianDigits(6)} بار
          </label>
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex flex-col items-center justify-center xs:gap-1 md:gap-2 w-auto mx-auto py-1 xs:px-1 md:px-2 lg:px-4">
          <div className="flex flex-row items-center xs:gap-0 sm:gap-1">
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
            <div className="xs:w-[10.67px] sm:w-3 md:w-5 aspect-square bg-[#FFB900] rounded-full"></div>
          </div>
          <label className="xs:text-[9.6px] sm:text-[12px] md:text-[14px] lg:text-xs !font-light font-yekan">
            بیشتر از {toPersianDigits(7)} بار
          </label>
        </div>
      </div>
    </div>
  );
};

export default FoodFrequencyHelpBar;
