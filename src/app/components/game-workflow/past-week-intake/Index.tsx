import FoodFrequencyCard from "./FoodFrequencyCard";
import FoodFrequencyHelpBar from "./FoodFrequencyHelpBar";
import FoodGroupCard from "./FoodGroupCard";
import Intro from "../../../../base/Intro";
import { useCallback, useState } from "react";

const DUMMYDATA = [
  {
    name: "sugar-stimulants",
    title: "قند و محرک‌ها",
    bgColor: "#FAE8FF",
    iconColor: "#F1BEFF",
    titleColor: "#AD00DD",
    valuesColor: "#BF73D5",
    foodFrequencyCards: [
      { code: 108, imageName: "sweet", title: "شیرینی", value: 0 },
      {
        code: 117,
        imageName: "caffeines-chocolates",
        title: "قهوه، چای، شکلات",
        value: 0,
      },
      { code: 105, imageName: "honey", title: "عسل", value: 0 },
    ],
  },
  {
    name: "oils",
    title: "روغن‌ها",
    bgColor: "#ECFCCB",
    iconColor: "#CDEE89",
    titleColor: "#537B01",
    valuesColor: "#9AE009",
    foodFrequencyCards: [
      { code: 111, imageName: "olive-oil", title: "زیتون", value: 0 },
      { code: 110, imageName: "herbal-oil", title: "گیاهی", value: 0 },
      {
        code: 109,
        imageName: "sesame-nuts-oil",
        title: "(کنجد، میوه‌ها، مغزها)",
        value: 0,
      },
    ],
  },
  {
    name: "carbohydrates",
    title: "کربوهیدرات‌ها",
    bgColor: "#FEF3C7",
    iconColor: "#FFE371",
    titleColor: "#A68500",
    valuesColor: "#FFD83D",
    foodFrequencyCards: [
      { code: 116, imageName: "potato", title: "سیب‌زمینی", value: 0 },
      { code: 118, imageName: "rice", title: "برنج", value: 0 },
      { code: 120, imageName: "bread", title: "نان", value: 0 },
    ],
  },
  {
    name: "protein",
    title: "پروتئین‌",
    bgColor: "#FEE2E2",
    iconColor: "#FFAAAA",
    titleColor: "#DC4F4F",
    valuesColor: "#FF3D3D",
    foodFrequencyCards: [
      { code: 106, imageName: "fish", title: "ماهی", value: 0 },
      { code: 103, imageName: "meat", title: "گوشت قرمز", value: 0 },
      { code: 104, imageName: "chicken", title: "گوشت مرغ", value: 0 },
      { code: 101, imageName: "egg", title: "تخم‌مرغ", value: 0 },
      { code: 102, imageName: "dairy", title: "لبنیات", value: 0 },
    ],
  },
  {
    name: "fiber-vitamins",
    title: "فیبر و ویتامین",
    bgColor: "#D1FAE5",
    iconColor: "#6AF5AE",
    titleColor: "#3D9769",
    valuesColor: "#0EA758",
    foodFrequencyCards: [
      { code: 113, imageName: "vegetable", title: "سبزیجات", value: 0 },
      { code: 16, imageName: "dates", title: "خرما", value: 0 },
      { code: 17, imageName: "olive", title: "زیتون", value: 0 },
      { code: 112, imageName: "fruits", title: "میوه‌ها", value: 0 },
    ],
  },
  {
    name: "combinations",
    title: "ترکیبی‌ها",
    bgColor: "#FEF3E2",
    iconColor: "#FFDDA8",
    titleColor: "#B17E2F",
    valuesColor: "#CC7D03",
    foodFrequencyCards: [
      { code: 114, imageName: "nuts", title: "آجیل‌ها", value: 0 },
      { code: 115, imageName: "beans", title: "حبوبات", value: 0 },
      { code: 119, imageName: "cereals", title: "غلات", value: 0 },
    ],
  },
];

const PastWeekIntake = () => {
  const [foodFrequencyCards, setFoodFrequencyCards] = useState(DUMMYDATA);

  const handleSetFoodFrequencyValue = useCallback(
    function handleSetFoodFrequencyValue(value: number, code: number) {
      setFoodFrequencyCards((prev) =>
        prev.map((ff) => {
          const index = ff.foodFrequencyCards.findIndex(
            (ffc) => ffc.code === code
          );
          if (index === -1) return ff;

          const updatedCards = [...ff.foodFrequencyCards];
          updatedCards[index] = { ...updatedCards[index], value };

          return { ...ff, foodFrequencyCards: updatedCards };
        })
      );
    },
    []
  );

  return (
    <>
      <Intro
        headingTitle="در هفته گذشته از هر گروه غذایی چند وعده استفاده کردی؟"
        title="با دایره‌ها مشخص کن که مصرفت از هر گروه غذایی چقدر بوده."
      />
      <div className="xs:w-full sm:w-9/12 md:w-10/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 xs:px-4 sm:mx-auto mt-7">
        <FoodFrequencyHelpBar />
      </div>
      <div className="flex xs:flex-col lg:flex-row items-center xs:gap-6 md:gap-4 w-full mt-12 md:px-10 2xl:px-28">
        <div className="flex flex-col gap-4 xs:w-full lg:w-8/12 xs:px-4 sm:px-6 md:px-0">
          {foodFrequencyCards.map((card) => (
            <FoodGroupCard
              key={card.name}
              title={card.title}
              bgColor={card.bgColor}
              titleColor={card.titleColor}
              iconColor={card.iconColor}
            >
              <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-center xs:gap-3 md:gap-6">
                {card.foodFrequencyCards.map((fCard) => (
                  <FoodFrequencyCard
                    key={fCard.code}
                    code={fCard.code}
                    imageName={fCard.imageName}
                    title={fCard.title}
                    valuesColor={card.valuesColor}
                    value={fCard.value}
                    onClick={(value, foodFrequencyCode) =>
                      handleSetFoodFrequencyValue(value, foodFrequencyCode)
                    }
                  />
                ))}
              </div>
            </FoodGroupCard>
          ))}
        </div>
        <div className="flex-grow bg-blue-300 self-start">2</div>
      </div>
    </>
  );
};

export default PastWeekIntake;
