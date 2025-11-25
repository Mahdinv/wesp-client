import { toPersianDigits } from "../../../../utils/public";

const FoodFrequencyHelpBar = () => {
  return (
    <div className="flex flex-row gap-1 w-full items-center py-2 px-2 bg-white rounded-full">
      <div className="flex-grow border-e border-[#D4D7DE]">
        <div className="flex xs:flex-col lg:flex-row items-center justify-center xs:gap-1 md:gap-2 w-auto border-e border-[#D4D7DE] mx-auto py-1 xs:px-1 md:px-2 lg:px-4">
          <div className="flex flex-row items-center gap-1">
            <div className="xs:w-3 xs:h-3 md:w-5 md:h-5 bg-[#FFB900] rounded-full"></div>
          </div>
          <label className="xs:text-[10px] md:text-[14px] lg:text-xs">
            {toPersianDigits(1)} تا {toPersianDigits(2)} بار
          </label>
        </div>
      </div>
      <div className="flex-grow border-e border-[#D4D7DE]">
        <div className="flex xs:flex-col lg:flex-row items-center justify-center xs:gap-1 md:gap-2 w-auto border-e border-[#D4D7DE] mx-auto py-1 xs:px-1 md:px-2 lg:px-4">
          <div className="flex flex-row items-center gap-1">
            <div className="xs:w-3 xs:h-3 md:w-5 md:h-5 bg-[#FFB900] rounded-full"></div>
            <div className="xs:w-3 xs:h-3 md:w-5 md:h-5 bg-[#FFB900] rounded-full"></div>
          </div>
          <label className="xs:text-[10px] md:text-[14px] lg:text-xs">
            {toPersianDigits(3)} تا {toPersianDigits(4)} بار
          </label>
        </div>
      </div>
      <div className="flex-grow border-e border-[#D4D7DE]">
        <div className="flex xs:flex-col lg:flex-row items-center justify-center xs:gap-1 md:gap-2 w-auto border-e border-[#D4D7DE] mx-auto py-1 xs:px-1 md:px-2 lg:px-4">
          <div className="flex flex-row items-center gap-1">
            <div className="xs:w-3 xs:h-3 md:w-5 md:h-5 bg-[#FFB900] rounded-full"></div>
            <div className="xs:w-3 xs:h-3 md:w-5 md:h-5 bg-[#FFB900] rounded-full"></div>
            <div className="xs:w-3 xs:h-3 md:w-5 md:h-5 bg-[#FFB900] rounded-full"></div>
          </div>
          <label className="xs:text-[10px] md:text-[14px] lg:text-xs">
            {toPersianDigits(5)} تا {toPersianDigits(6)} بار
          </label>
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex xs:flex-col lg:flex-row items-center justify-center xs:gap-1 md:gap-2 w-auto mx-auto py-1 xs:px-1 md:px-2 lg:px-4">
          <div className="flex flex-row items-center gap-1">
            <div className="xs:w-3 xs:h-3 md:w-5 md:h-5 bg-[#FFB900] rounded-full"></div>
            <div className="xs:w-3 xs:h-3 md:w-5 md:h-5 bg-[#FFB900] rounded-full"></div>
            <div className="xs:w-3 xs:h-3 md:w-5 md:h-5 bg-[#FFB900] rounded-full"></div>
            <div className="xs:w-3 xs:h-3 md:w-5 md:h-5 bg-[#FFB900] rounded-full"></div>
          </div>
          <label className="xs:text-[10px] md:text-[14px] lg:text-xs">
            بیشتر از {toPersianDigits(7)} بار
          </label>
        </div>
      </div>
    </div>
  );
};

export default FoodFrequencyHelpBar;
