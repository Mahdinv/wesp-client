import { memo } from "react";
import FoodGroupSelectorCard from "./FoodGroupSelectorCard";

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

const FoodGroupList = () => {
  return (
    <div className="w-full grid xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-4 xs:px-4 md:px-6">
      {foodGroupCards.map((card) => (
        <FoodGroupSelectorCard key={card.id} foodGroupCard={card} />
      ))}
    </div>
  );
};

export default memo(FoodGroupList);
