import { useState } from "react";

const FoodFrequencyCard = () => {
  const [value, setValue] = useState<number | null>(0);
  return (
    <div className="flex flex-col items-center gap-2 bg-gray-100 w-1/12 rounded-xl mx-auto mt-20 py-4">
      <div className="flex flex-col items-center gap-3">
        <img
          src="/images/food-frequency-img.png"
          alt="frequency"
          className="w-20 h-20 rounded-full"
        />
        <label>زیتون</label>
      </div>
      <div className="flex flex-row items-center gap-1">
        {[1, 2, 3, 4].map((v) => (
          <div
            className={`w-6 h-6 duration-300 ${
              value && value >= v ? "bg-red-300" : "bg-gray-300"
            } rounded-full`}
            onClick={() => setValue(value === v ? v - 1 : v)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FoodFrequencyCard;
