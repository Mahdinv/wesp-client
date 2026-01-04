import { useCallback, useState } from "react";
import FoodPlate from "./FoodPlate";
import Button from "../../../../base/inputs/Button";
import { toPersianDigits } from "../../../../utils/public";
import Intro from "../../../../base/Intro";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaRegSquareCheck,
} from "react-icons/fa6";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import FoodGroupSelectorCard from "./FoodGroupSelectorCard";
import { useFieldArray, useForm } from "react-hook-form";
import { preferredFoodForm } from "../../../../schemas/preferred-food-form";

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

const dummyData: {
  foodGroupId: number | undefined;
  priority: number | undefined;
}[] = foodGroupCards.map(() => ({
  foodGroupId: undefined,
  priority: undefined,
}));

const PreferredFood = () => {
  const [plateState, setPlateState] = useState<{
    plateNum: number;
    actionType: "next" | "back";
  }>({
    plateNum: 1,
    actionType: "next",
  });
  const [filteredData, setFilteredData] = useState(foodGroupCards);
  const method = useForm<preferredFoodForm>({
    defaultValues: { items: dummyData },
  });

  const { control, handleSubmit, getValues, setValue } = method;
  const { fields, update } = useFieldArray({
    control,
    name: "items",
  });

  const selectedCardsEachPlate = fields.slice(
    (plateState.plateNum - 1) * 4,
    plateState.plateNum * 4
  );

  const onSelectCartHandler = useCallback(
    function onSelectCartHandler(id: number) {
      const items = getValues("items");
      const existItemIndex = items.findIndex((item) => item.foodGroupId === id);
      if (existItemIndex !== -1) {
        update(existItemIndex, { foodGroupId: undefined, priority: undefined });
      } else {
        const findIndex = items.findIndex(
          (item, index) =>
            index >= (plateState.plateNum - 1) * 4 &&
            index <= plateState.plateNum * 4 - 1 &&
            item.foodGroupId === undefined
        );
        const priority = fields.length - findIndex;
        update(findIndex, { foodGroupId: id, priority });
      }
    },
    [getValues, plateState.plateNum, fields, update]
  );

  function onFilteredDataHandler(actionType: "next" | "back") {
    const selectedItems = getValues("items");
    const filteredData = foodGroupCards.filter(
      (item) =>
        !selectedItems
          .slice(
            0,
            (actionType === "next"
              ? plateState.plateNum
              : plateState.plateNum - 2) * 4
          )
          .map((field) => field.foodGroupId)
          .includes(item.id)
    );
    return filteredData;
  }

  function onDisableCardHandler(selectedCardId: number): boolean {
    if (
      selectedCardsEachPlate.every((item) => item.foodGroupId !== undefined) &&
      !selectedCardsEachPlate
        .map((item) => item.foodGroupId)
        .includes(selectedCardId)
    ) {
      return true;
    }
    if (
      selectedCardsEachPlate.find((item) => item.foodGroupId === undefined) &&
      fields.find((field) => field.foodGroupId === selectedCardId) &&
      !selectedCardsEachPlate.find(
        (item) => item.foodGroupId === selectedCardId
      )
    ) {
      return true;
    }
    return false;
  }

  const onResetPlateHandler = useCallback(
    function onResetPlateHandler() {
      const ids = selectedCardsEachPlate.map((item) => item.foodGroupId);
      const items = fields.map((field) => {
        if (ids.some((id) => id === field.foodGroupId)) {
          field.foodGroupId = undefined;
          field.priority = undefined;
        }
        return field;
      });
      setValue("items", items);
    },
    [fields, selectedCardsEachPlate, setValue]
  );

  function onDisableNextPlateHandler(): boolean {
    if (
      fields
        .slice(plateState.plateNum * 4, (plateState.plateNum + 1) * 4)
        .some((field) => field.foodGroupId !== undefined)
    ) {
      return false;
    }
    if (selectedCardsEachPlate.every((item) => !!item.foodGroupId)) {
      return false;
    }
    return true;
  }

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  return (
    <>
      <Intro
        headingTitle="بشقاب غذایی مورد علاقه تو"
        title="در هر مرحله ۴ تا از گروه‌های غذایی محبوب خود را انتخاب کن چه غذایی مورد علاقه تو هست؟"
      />
      <div className="flex xs:flex-col-reverse md:flex-row items-center xs:gap-10 sm:gap-12 md:gap-0 mt-20">
        <div className="flex flex-col items-center justify-center gap-4 w-full lg:p-4 xs:px-2 sm:px-4 md:px-4 xl:px-10 2xl:px-20 overflow-hidden">
          <div className="flex flex-col-reverse items-center justify-center gap-2">
            <div className="flex flex-row items-center justify-center gap-1">
              {[1, 2, 3, 4, 5].map((counter) => (
                <div
                  className={`w-6 h-6 ${
                    plateState.plateNum >= counter
                      ? "bg-green-500"
                      : "bg-gray-300"
                  } rounded-full`}
                ></div>
              ))}
            </div>
            <label className="text-xs font-bold">
              بشقاب {toPersianDigits(plateState.plateNum)} از{" "}
              {toPersianDigits(5)}
            </label>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={plateState.plateNum}
              initial={{
                opacity: 0,
                x: plateState.actionType === "next" ? -50 : 50,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: plateState.actionType === "next" ? 50 : -50,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="rounded-full"
            >
              <FoodPlate
                selectedFoodGroups={fields
                  .slice((plateState.plateNum - 1) * 4, plateState.plateNum * 4)
                  .map((field) => {
                    const findItem = foodGroupCards.find(
                      (fgc) => fgc.id === field.foodGroupId
                    );
                    if (findItem) {
                      return findItem;
                    }
                    return undefined;
                  })}
                handleResetPlate={onResetPlateHandler}
              />
            </motion.div>
          </AnimatePresence>
          <form
            onSubmit={handleSubmit(() => {})}
            noValidate
            className="w-full flex flex-row xs:gap-1 sm:gap-2 xs:mt-2 sm:mt-4 md:mt-10 xs:px-2"
          >
            {plateState.plateNum !== 1 && (
              <Button
                type="button"
                classes="btn btn-outline w-full"
                title="بشقاب قبلی"
                icon={<FaArrowRightLong />}
                iconFirst
                itemsGap={10}
                onClick={() => {
                  const filteredData = onFilteredDataHandler("back");
                  setFilteredData(filteredData);
                  setPlateState((prev) => ({
                    plateNum: prev.plateNum - 1,
                    actionType: "back",
                  }));
                }}
              />
            )}
            {plateState.plateNum !== 5 ? (
              <Button
                type="button"
                classes="btn btn-primary w-full"
                title="بشقاب بعدی"
                icon={<FaArrowLeftLong />}
                itemsGap={10}
                onClick={() => {
                  const filteredData = onFilteredDataHandler("next");
                  setFilteredData(filteredData);
                  setPlateState((prev) => ({
                    plateNum: prev.plateNum + 1,
                    actionType: "next",
                  }));
                }}
                disable={onDisableNextPlateHandler()}
              />
            ) : (
              <Button
                classes="btn btn-primary w-full"
                title="پایان این مرحله"
                icon={<FaRegSquareCheck />}
                itemsGap={10}
                disable={onDisableNextPlateHandler()}
              />
            )}
          </form>
        </div>
        <motion.div
          key={filteredData.length}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full grid xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-4 xs:px-4 md:px-6"
        >
          <AnimatePresence>
            {filteredData.map((card) => (
              <motion.div
                key={card.id}
                variants={itemVariants}
                className="w-full h-full"
              >
                <FoodGroupSelectorCard
                  foodGroupCard={card}
                  isSelected={
                    !!fields.find(
                      (field) =>
                        field.foodGroupId === card.id &&
                        field.priority !== undefined
                    )
                  }
                  disable={onDisableCardHandler(card.id)}
                  handleSelectCart={(foodGroupId) =>
                    onSelectCartHandler(foodGroupId)
                  }
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default PreferredFood;
