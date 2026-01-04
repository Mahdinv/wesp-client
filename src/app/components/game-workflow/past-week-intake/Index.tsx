import FoodFrequencyCard from "./FoodFrequencyCard";
import FoodFrequencyHelpBar from "./FoodFrequencyHelpBar";
import FoodGroupCard from "./FoodGroupCard";
import Intro from "../../../../base/Intro";
import { useCallback, useEffect } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { PastWeekIntakeForm } from "../../../../schemas/past-week-intake-form";
import Button from "../../../../base/inputs/Button";
import PieChart from "./PieChart";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import handleAxiosError from "../../../../api/error-handling";
import { addPastWeekIntake } from "../../../../http/past-week-intake";
import { FaRegSquareCheck } from "react-icons/fa6";

const DUMMYDATA = [
  {
    id: 1,
    name: "sugar-stimulants",
    title: "قند و محرک‌ها",
    properties: {
      bgColor: "#FAE8FF",
      iconColor: "#F1BEFF",
      titleColor: "#AD00DD",
      valuesColor: "#BF73D5",
    },
    foodFrequencyCards: [
      {
        id: 1,
        code: 108,
        title: "شیرینی",
        categoryId: 1,
        properties: {
          description: "",
          weeklyConsumptionOption: [100, 200, 300, 400],
          imageName: "sweet",
        },
      },
      {
        id: 2,
        code: 117,
        title: "قهوه، چای، شکلات",
        categoryId: 1,
        properties: {
          description: "(چای، قهوه و ...)",
          weeklyConsumptionOption: [40, 80, 100, 160],
          imageName: "caffeines-chocolates",
        },
      },
      {
        id: 3,
        code: 105,
        title: "عسل",
        categoryId: 1,
        properties: {
          description: "(شیرین کننده طبیعی)",
          weeklyConsumptionOption: [100, 200, 300, 400],
          imageName: "honey",
        },
      },
    ],
  },
  {
    id: 2,
    name: "oils",
    title: "روغن‌ها",
    properties: {
      bgColor: "#ECFCCB",
      iconColor: "#CDEE89",
      titleColor: "#537B01",
      valuesColor: "#9AE009",
    },
    foodFrequencyCards: [
      {
        id: 4,
        code: 111,
        title: "زیتون",
        categoryId: 2,
        properties: {
          description: "",
          weeklyConsumptionOption: [20, 40, 60, 100],
          imageName: "olive-oil",
        },
      },
      {
        id: 5,
        code: 110,
        title: "گیاهی",
        categoryId: 2,
        properties: {
          description: "",
          weeklyConsumptionOption: [20, 40, 60, 100],
          imageName: "herbal-oil",
        },
      },
      {
        id: 6,
        code: 109,
        title: "(کنجد، میوه‌ها، مغزها)",
        categoryId: 2,
        properties: {
          description: "(بادام، کنجد و ...)",
          weeklyConsumptionOption: [20, 40, 60, 100],
          imageName: "sesame-nuts-oil",
        },
      },
    ],
  },
  {
    id: 3,
    name: "carbohydrates",
    title: "کربوهیدرات‌ها",
    properties: {
      bgColor: "#FEF3C7",
      iconColor: "#FFE371",
      titleColor: "#A68500",
      valuesColor: "#FFD83D",
    },
    foodFrequencyCards: [
      {
        id: 7,
        code: 116,
        title: "سیب‌زمینی",
        categoryId: 3,
        properties: {
          description: "",
          weeklyConsumptionOption: [400, 800, 1200, 1600],
          imageName: "potato",
        },
      },
      {
        id: 8,
        code: 118,
        title: "برنج",
        categoryId: 3,
        properties: {
          description: "",
          weeklyConsumptionOption: [400, 800, 1200, 1600],
          imageName: "rice",
        },
      },
      {
        id: 9,
        code: 120,
        title: "نان",
        categoryId: 3,
        properties: {
          description: "",
          weeklyConsumptionOption: [400, 800, 1200, 1600],
          imageName: "bread",
        },
      },
    ],
  },
  {
    id: 4,
    name: "protein",
    title: "پروتئین‌",
    properties: {
      bgColor: "#FEE2E2",
      iconColor: "#FFAAAA",
      titleColor: "#DC4F4F",
      valuesColor: "#FF3D3D",
    },
    foodFrequencyCards: [
      {
        id: 10,
        code: 106,
        title: "ماهی",
        categoryId: 4,
        properties: {
          description: "",
          weeklyConsumptionOption: [200, 400, 600, 800],
          imageName: "fish",
        },
      },
      {
        id: 11,
        code: 103,
        title: "گوشت قرمز",
        categoryId: 4,
        properties: {
          description: "",
          weeklyConsumptionOption: [130, 260, 390, 520],
          imageName: "meat",
        },
      },
      {
        id: 12,
        code: 104,
        title: "گوشت مرغ",
        categoryId: 4,
        properties: {
          description: "",
          weeklyConsumptionOption: [160, 320, 480, 700],
          imageName: "chicken",
        },
      },
      {
        id: 13,
        code: 101,
        title: "تخم‌مرغ",
        categoryId: 4,
        properties: {
          description: "",
          weeklyConsumptionOption: [240, 480, 720, 1000],
          imageName: "egg",
        },
      },
      {
        id: 14,
        code: 102,
        title: "لبنیات",
        categoryId: 4,
        properties: {
          description: "",
          weeklyConsumptionOption: [500, 1000, 1500, 2000],
          imageName: "dairy",
        },
      },
    ],
  },
  {
    id: 5,
    name: "fiber-vitamins",
    title: "فیبر و ویتامین",
    properties: {
      bgColor: "#D1FAE5",
      iconColor: "#6AF5AE",
      titleColor: "#3D9769",
      valuesColor: "#0EA758",
    },
    foodFrequencyCards: [
      {
        id: 15,
        code: 113,
        title: "سبزیجات",
        categoryId: 5,
        properties: {
          description: "",
          weeklyConsumptionOption: [150, 300, 450, 600],
          imageName: "vegetable",
        },
      },
      {
        id: 16,
        code: 107,
        title: "خرما و زیتون",
        categoryId: 5,
        properties: {
          description: "",
          weeklyConsumptionOption: [50, 100, 200, 400],
          imageName: "olive-dates",
        },
      },
      {
        id: 17,
        code: 112,
        title: "میوه‌ها",
        categoryId: 5,
        properties: {
          description: "",
          weeklyConsumptionOption: [300, 600, 900, 1200],
          imageName: "fruits",
        },
      },
    ],
  },
  {
    id: 6,
    name: "combinations",
    title: "ترکیبی‌ها",
    properties: {
      bgColor: "#FEF3E2",
      iconColor: "#FFDDA8",
      titleColor: "#B17E2F",
      valuesColor: "#CC7D03",
    },
    foodFrequencyCards: [
      {
        id: 18,
        code: 114,
        title: "آجیل‌ها",
        categoryId: 6,
        properties: {
          description: "",
          weeklyConsumptionOption: [60, 120, 180, 240],
          imageName: "nuts",
        },
      },
      {
        id: 19,
        code: 115,
        title: "حبوبات",
        categoryId: 6,
        properties: {
          description: "",
          weeklyConsumptionOption: [300, 600, 900, 1200],
          imageName: "beans",
        },
      },
      {
        id: 20,
        code: 119,
        title: "غلات",
        categoryId: 6,
        properties: {
          description: "(جو، ذرت و ...)",
          weeklyConsumptionOption: [300, 600, 900, 1200],
          imageName: "cereals",
        },
      },
    ],
  },
];

const chartData = [
  {
    categoryId: 1,
    categoryTitle: "قند و محرک‌ها",
    totalPercentUsage: 0,
    color: "#F1BEFF",
  },
  {
    categoryId: 2,
    categoryTitle: "روغن‌ها",
    totalPercentUsage: 0,
    color: "#CDEE89",
  },
  {
    categoryId: 3,
    categoryTitle: "کربوهیدرات‌ها",
    totalPercentUsage: 0,
    color: "#FFE371",
  },
  {
    categoryId: 4,
    categoryTitle: "پروتئین‌",
    totalPercentUsage: 0,
    color: "#FFAAAA",
  },
  {
    categoryId: 5,
    categoryTitle: "فیبر و ویتامین",
    totalPercentUsage: 0,
    color: "#6AF5AE",
  },
  {
    categoryId: 6,
    categoryTitle: "ترکیبی‌ها",
    totalPercentUsage: 0,
    color: "#FFDDA8",
  },
];

const PastWeekIntake = () => {
  const method = useForm<PastWeekIntakeForm>({
    defaultValues: {
      items: [
        { foodGroupId: 1, categoryId: 1, value: 0, percentUsage: 0 },
        { foodGroupId: 2, categoryId: 1, value: 0, percentUsage: 0 },
        { foodGroupId: 3, categoryId: 1, value: 0, percentUsage: 0 },
        { foodGroupId: 4, categoryId: 2, value: 0, percentUsage: 0 },
        { foodGroupId: 5, categoryId: 2, value: 0, percentUsage: 0 },
        { foodGroupId: 6, categoryId: 2, value: 0, percentUsage: 0 },
        { foodGroupId: 7, categoryId: 3, value: 0, percentUsage: 0 },
        { foodGroupId: 8, categoryId: 3, value: 0, percentUsage: 0 },
        { foodGroupId: 9, categoryId: 3, value: 0, percentUsage: 0 },
        { foodGroupId: 10, categoryId: 4, value: 0, percentUsage: 0 },
        { foodGroupId: 11, categoryId: 4, value: 0, percentUsage: 0 },
        { foodGroupId: 12, categoryId: 4, value: 0, percentUsage: 0 },
        { foodGroupId: 13, categoryId: 4, value: 0, percentUsage: 0 },
        { foodGroupId: 14, categoryId: 4, value: 0, percentUsage: 0 },
        { foodGroupId: 15, categoryId: 5, value: 0, percentUsage: 0 },
        { foodGroupId: 16, categoryId: 5, value: 0, percentUsage: 0 },
        { foodGroupId: 17, categoryId: 5, value: 0, percentUsage: 0 },
        { foodGroupId: 18, categoryId: 6, value: 0, percentUsage: 0 },
        { foodGroupId: 19, categoryId: 6, value: 0, percentUsage: 0 },
        { foodGroupId: 20, categoryId: 6, value: 0, percentUsage: 0 },
      ],
    },
  });

  const { watch, control, handleSubmit } = method;

  const { fields, replace } = useFieldArray({
    control,
    name: "items",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: addPastWeekIntake,
    onSuccess: () => {
      toast.success("مرحله سوم با موفقیت به اتمام رسید");
    },
    onError: (error) => {
      toast.error(handleAxiosError(error).message);
    },
  });

  useEffect(() => {
    chartData.map((cd) => {
      const totalPercentUsage = fields.reduce(
        (sum, item) =>
          sum + (item.categoryId === cd.categoryId ? item.percentUsage : 0),
        0
      );
      cd.totalPercentUsage = totalPercentUsage;
    });
  }, [fields]);

  const handleSetFoodFrequencyValue = useCallback(
    function handleSetFoodFrequencyValue(value: number, id: number) {
      const items = watch("items");
      items.find((item) => {
        if (item.foodGroupId === id) {
          item.value = value;
        }
      });

      const totalSelectedValue = items.reduce(
        (sum, field) => sum + field.value,
        0
      );
      items.map((item) => {
        if (item.value > 0) {
          item.percentUsage = Number(
            ((item.value * 100) / totalSelectedValue).toFixed(2)
          );
        } else {
          item.percentUsage = 0;
        }
      });

      replace(items);
    },
    [watch, replace]
  );

  const onRefreshFoodGroupsCategory = useCallback(
    function onRefreshFoodGroupsCategory(ids: number[]) {
      const items = watch("items");
      items.map((item) => {
        ids.forEach((id) => {
          if (id === item.foodGroupId) {
            item.value = 0;
            item.percentUsage = 0;
          }
        });
        return item;
      });

      replace(items);
    },
    [watch, replace]
  );

  const onPastWeekIntakeHandler: SubmitHandler<PastWeekIntakeForm> = (data) =>
    mutate(data);

  return (
    <>
      <Intro
        headingTitle="در هفته گذشته از هر گروه غذایی چند وعده استفاده کردی؟"
        title="با دایره‌ها مشخص کن که مصرفت از هر گروه غذایی چقدر بوده."
      />
      <div className="xxs:w-full sm:w-[90%] md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 sm:mx-auto xxs:px-2 mt-7">
        <FoodFrequencyHelpBar />
      </div>
      <div className="flex xxs:flex-col lg:flex-row items-stretch xxs:gap-8 lg:gap-10 w-full mt-12 md:px-10 2xl:px-28">
        <div className="flex flex-col gap-4 xxs:w-full lg:w-7/12 xl:w-8/12 xxs:px-4 sm:px-6 md:px-0">
          {DUMMYDATA.map((card) => (
            <FoodGroupCard
              key={card.name}
              title={card.title}
              bgColor={card.properties.bgColor}
              titleColor={card.properties.titleColor}
              iconColor={card.properties.iconColor}
              onRefreshGroup={() =>
                onRefreshFoodGroupsCategory(
                  card.foodFrequencyCards.map((ff) => ff.id)
                )
              }
            >
              <div className="grid xxs:grid-cols-2 sm:grid-cols-3 items-center justify-center xxs:gap-3 md:gap-6">
                {card.foodFrequencyCards.map((fCard) => (
                  <FoodFrequencyCard
                    key={fCard.code}
                    fCard={fCard}
                    valuesColor={card.properties.valuesColor}
                    value={
                      (fields || []).find((fd) => fd.foodGroupId === fCard.id)
                        ?.value
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
        <div className="flex flex-col lg:w-5/12 xl:w-4/12 xxs:px-4 sm:px-6 md:px-0">
          <div className="lg:sticky top-28 ">
            <div className="bg-white flex flex-col items-center xxs:gap-6 lg:gap-4 xl:gap-6 2xl:gap-8 xxs:py-8 lg:py-4 xl:py-6 2xl:py-8 rounded-3xl shadow-md">
              <h4 className="font-medium">نمودار کلی مصرف</h4>
              <PieChart chartData={chartData} />
              <small className="bg-[#B0E3C3] text-black rounded-lg py-4 px-3 font-normal !font-peyda">
                با انتخاب دایره‌ها، نمودار به‌صورت خودکار به‌روز می‌شود.
              </small>
            </div>
            <form onSubmit={handleSubmit(onPastWeekIntakeHandler)} noValidate>
              <Button
                classes="!mt-6 w-full btn btn-primary"
                title={isPending ? "در حال ارسال..." : "اتمام این مرحله"}
                icon={<FaRegSquareCheck />}
                itemsGap={10}
                disable={isPending || !fields.find((field) => field.value > 0)}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PastWeekIntake;
