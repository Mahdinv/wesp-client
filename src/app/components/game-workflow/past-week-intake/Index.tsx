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
      {
        id: 1,
        code: 108,
        imageName: "sweet",
        title: "شیرینی",
        categoryId: 1,
        properties: { weeklyConsumptionOption: [100, 200, 300, 400] },
      },
      {
        id: 2,
        code: 117,
        imageName: "caffeines-chocolates",
        title: "قهوه، چای، شکلات",
        properties: { weeklyConsumptionOption: [40, 80, 100, 160] },
      },
      {
        id: 3,
        code: 105,
        imageName: "honey",
        title: "عسل",
        properties: { weeklyConsumptionOption: [100, 200, 300, 400] },
      },
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
      {
        id: 4,
        code: 111,
        imageName: "olive-oil",
        title: "زیتون",
        properties: { weeklyConsumptionOption: [20, 40, 60, 100] },
      },
      {
        id: 5,
        code: 110,
        imageName: "herbal-oil",
        title: "گیاهی",
        properties: { weeklyConsumptionOption: [20, 40, 60, 100] },
      },
      {
        id: 6,
        code: 109,
        imageName: "sesame-nuts-oil",
        title: "(کنجد، میوه‌ها، مغزها)",
        properties: { weeklyConsumptionOption: [20, 40, 60, 100] },
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
      {
        id: 7,
        code: 116,
        imageName: "potato",
        title: "سیب‌زمینی",
        properties: { weeklyConsumptionOption: [400, 800, 1200, 1600] },
      },
      {
        id: 8,
        code: 118,
        imageName: "rice",
        title: "برنج",
        properties: { weeklyConsumptionOption: [400, 800, 1200, 1600] },
      },
      {
        id: 9,
        code: 120,
        imageName: "bread",
        title: "نان",
        properties: { weeklyConsumptionOption: [400, 800, 1200, 1600] },
      },
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
      {
        id: 10,
        code: 106,
        imageName: "fish",
        title: "ماهی",
        properties: { weeklyConsumptionOption: [200, 400, 600, 800] },
      },
      {
        id: 11,
        code: 103,
        imageName: "meat",
        title: "گوشت قرمز",
        properties: { weeklyConsumptionOption: [130, 260, 390, 520] },
      },
      {
        id: 12,
        code: 104,
        imageName: "chicken",
        title: "گوشت مرغ",
        properties: { weeklyConsumptionOption: [160, 320, 480, 700] },
      },
      {
        id: 13,
        code: 101,
        imageName: "egg",
        title: "تخم‌مرغ",
        properties: { weeklyConsumptionOption: [240, 480, 720, 1000] },
      },
      {
        id: 14,
        code: 102,
        imageName: "dairy",
        title: "لبنیات",
        properties: { weeklyConsumptionOption: [500, 1000, 1500, 2000] },
      },
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
      {
        id: 15,
        code: 113,
        imageName: "vegetable",
        title: "سبزیجات",
        properties: { weeklyConsumptionOption: [150, 300, 450, 600] },
      },
      {
        id: 16,
        code: 107,
        imageName: "olive-dates",
        title: "خرما و زیتون",
        properties: { weeklyConsumptionOption: [50, 100, 200, 400] },
      },
      {
        id: 17,
        code: 112,
        imageName: "fruits",
        title: "میوه‌ها",
        properties: { weeklyConsumptionOption: [300, 600, 900, 1200] },
      },
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
      {
        id: 18,
        code: 114,
        imageName: "nuts",
        title: "آجیل‌ها",
        properties: { weeklyConsumptionOption: [60, 120, 180, 240] },
      },
      {
        id: 19,
        code: 115,
        imageName: "beans",
        title: "حبوبات",
        properties: { weeklyConsumptionOption: [300, 600, 900, 1200] },
      },
      {
        id: 20,
        code: 119,
        imageName: "cereals",
        title: "غلات",
        properties: { weeklyConsumptionOption: [300, 600, 900, 1200] },
      },
    ],
  },
];

const finalData = [
  { foodGroupId: 1, userId: 1, value: 0, percentUsage: 0 },
  { foodGroupId: 2, userId: 1, value: 0, percentUsage: 0 },
  { foodGroupId: 3, userId: 1, value: 0, percentUsage: 0 },
  { foodGroupId: 4, userId: 1, value: 0, percentUsage: 0 },
  { foodGroupId: 5, userId: 1, value: 0, percentUsage: 0 },
  { foodGroupId: 6, userId: 1, value: 0, percentUsage: 0 },
  { foodGroupId: 7, userId: 1, value: 0, percentUsage: 0 },
  { foodGroupId: 8, userId: 1, value: 0, percentUsage: 0 },
  { foodGroupId: 9, userId: 1, value: 0, percentUsage: 0 },
  { foodGroupId: 10, userId: 1, value: 0, percentUsage: 0 },
  { foodGroupId: 11, userId: 1, value: 0, percentUsage: 0 },
  { foodGroupId: 12, userId: 1, value: 0, percentUsage: 0 },
  { foodGroupId: 13, userId: 1, value: 0, percentUsage: 0 },
  { foodGroupId: 14, userId: 1, value: 0, percentUsage: 0 },
  { foodGroupId: 15, userId: 1, value: 0, percentUsage: 0 },
  { foodGroupId: 16, userId: 1, value: 0, percentUsage: 0 },
  { foodGroupId: 17, userId: 1, value: 0, percentUsage: 0 },
  { foodGroupId: 18, userId: 1, value: 0, percentUsage: 0 },
  { foodGroupId: 19, userId: 1, value: 0, percentUsage: 0 },
  { foodGroupId: 20, userId: 1, value: 0, percentUsage: 0 },
];

const PastWeekIntake = () => {
  const [foodFrequencyCards, setFoodFrequencyCards] = useState<
    | {
        foodGroupId: number;
        userId: number;
        value: number;
        percentUsage: number;
      }[]
    | null
  >(finalData);

  const handleSetFoodFrequencyValue = useCallback(
    function handleSetFoodFrequencyValue(value: number, id: number) {
      // setFoodFrequencyCards((prev) =>
      //   prev.map((ff) => {
      //     const index = ff.foodFrequencyCards.fi zndIndex(
      //       (ffc) => ffc.code === code
      //     );
      //     if (index === -1) return ff;
      //     const updatedCards = [...ff.foodFrequencyCards];
      //     updatedCards[index] = { ...updatedCards[index], value };
      //     return { ...ff, foodFrequencyCards: updatedCards };
      //   })
      // );
      setFoodFrequencyCards((prev) =>
        (prev || []).map((ff) => {
          if (ff.foodGroupId === id) {
            return {
              ...ff,
              value,
            };
          }
          return ff;
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
      <div className="xs:w-full sm:w-[90%] md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 sm:mx-auto xs:px-2 mt-7">
        <FoodFrequencyHelpBar />
      </div>
      <div className="flex xs:flex-col lg:flex-row items-center xs:gap-6 md:gap-4 w-full mt-12 md:px-10 2xl:px-28">
        <div className="flex flex-col gap-4 xs:w-full lg:w-7/12 xs:px-4 sm:px-6 md:px-0">
          {DUMMYDATA.map((card) => (
            <FoodGroupCard
              key={card.name}
              title={card.title}
              bgColor={card.bgColor}
              titleColor={card.titleColor}
              iconColor={card.iconColor}
            >
              <div className="grid xs:grid-cols-2 sm:grid-cols-3 items-center justify-center xs:gap-3 md:gap-6">
                {card.foodFrequencyCards.map((fCard) => (
                  <FoodFrequencyCard
                    key={fCard.code}
                    fCard={fCard}
                    valuesColor={card.valuesColor}
                    value={
                      (foodFrequencyCards || []).find(
                        (fd) => fd.foodGroupId === fCard.id
                      )?.value
                    }
                    onClick={(value, foodFrequencyId) =>
                      handleSetFoodFrequencyValue(value, foodFrequencyId)
                    }
                  />
                ))}
              </div>
            </FoodGroupCard>
          ))}
        </div>
        <div className="flex-grow self-start">
          <div className="w-96 aspect-square bg-red-400 rounded-full mx-auto"></div>
        </div>
      </div>
    </>
  );
};

export default PastWeekIntake;
