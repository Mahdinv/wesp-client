import { useState } from "react";
import FoodGroupSelectorCard from "./FoodGroupSelectorCard";
import FoodPlate from "./FoodPlate";
import Button from "../../../../base/inputs/Button";
import { toPersianDigits } from "../../../../utils/public";
import Intro from "../../../../base/Intro";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const foodGroupCards = [
  { id: 1, imageName: "cereals", title: "غلات", subTitle: "(جو، ذرت و ...)" },
  { id: 2, imageName: "nuts", title: "آجیل‌ها و مغزها", subTitle: "" },
  { id: 3, imageName: "vegetable", title: "سبزیجات", subTitle: "" },
  { id: 4, imageName: "apple", title: "میوه", subTitle: "" },
  { id: 5, imageName: "honey", title: "عسل", subTitle: "(شیرین کننده طبیعی)" },
  { id: 6, imageName: "potato", title: "سیب‌زمینی", subTitle: "" },
  { id: 7, imageName: "rice", title: "برنج", subTitle: "" },
  {
    id: 8,
    imageName: "tea-coffee",
    title: "محرک‌ها",
    subTitle: "(چای، قهوه و ...)",
  },
  { id: 9, imageName: "egg", title: "تخم‌مرغ", subTitle: "" },
  { id: 10, imageName: "bread", title: "نان", subTitle: "" },
  { id: 11, imageName: "sweet", title: "شیرینی", subTitle: "" },
  { id: 12, imageName: "fish", title: "ماهی", subTitle: "" },
  { id: 13, imageName: "dates-olives", title: "خرما و زیتون", subTitle: "" },
  { id: 14, imageName: "beans", title: "حبوبات", subTitle: "" },
  { id: 15, imageName: "chicken", title: "گوشت مرغ", subTitle: "" },
  { id: 16, imageName: "meat", title: "گوشت قرمز", subTitle: "" },
  {
    id: 17,
    imageName: "fruit-oil",
    title: "روغن میوه‌ها",
    subTitle: "(بادام، کنجد و ...)",
  },
  { id: 18, imageName: "olive-oil", title: "روغن زیتون", subTitle: "" },
  { id: 19, imageName: "frying-oil", title: "روغن سرخ‌کردنی", subTitle: "" },
  { id: 20, imageName: "dairy", title: "لبنیات", subTitle: "" },
];

const PreferredFood = () => {
  const [step, setStep] = useState(1);
  return (
    <>
      <Intro
        headingTitle="بشقاب غذایی تو"
        title="در هر مرحله از بین خوراکی‌های زیر، چهار مورد رو انتخاب کن که بیشتر دوست داری تا بشقابت کامل بشه."
      />
      <div className="flex xs:flex-col-reverse md:flex-row items-center xs:gap-10 sm:gap-12 md:gap-0 mt-20">
        <div className="flex flex-col items-center justify-center gap-4 w-full lg:p-4 xs:px-2 sm:px-4 md:px-4 xl:px-10 2xl:px-20">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-row items-center justify-center gap-1">
              {[1, 2, 3, 4].map((counter) => (
                <div
                  className={`w-6 h-6 ${
                    step >= counter ? "bg-green-500" : "bg-gray-300"
                  } rounded-full`}
                ></div>
              ))}
            </div>
            <label className="text-xs font-bold">
              بشقاب {toPersianDigits(step)} از {toPersianDigits(4)}
            </label>
          </div>
          <div className="drop-shadow-xl rounded-full">
            <FoodPlate />
          </div>
          <div className="w-full flex flex-row xs:gap-1 sm:gap-2 xs:mt-2 sm:mt-4 md:mt-10 xs:px-2">
            <Button
              classes="btn w-full"
              title="بشقاب قبلی"
              icon={<FaArrowRightLong />}
              itemsGap={7}
              iconFirst
              onClick={() => setStep((prev) => (prev !== 4 ? prev + 1 : 1))}
            />
            <Button
              classes="btn btn-primary w-full"
              title="بشقاب بعدی"
              icon={<FaArrowLeftLong />}
              itemsGap={7}
              onClick={() => setStep((prev) => (prev !== 4 ? prev + 1 : 1))}
            />
          </div>
        </div>
        <div className="w-full grid xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-4 xs:px-4 md:px-6">
          {foodGroupCards.map((card) => (
            <FoodGroupSelectorCard key={card.id} foodGroupCard={card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PreferredFood;
