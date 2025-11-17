// import { useLoaderData } from "react-router-dom";

import { toPersianDigits } from "../../../utils/public";
import FormsCatalogRoadmapStep from "./FormsCatalogRoadmapStep";

const formsCatalog = [
  { id: 1, imageName: "step-one", title: "پرسشنامه اولیه" },
  { id: 2, imageName: "step-two", title: "پرسشنامه همسفره‌ها" },
  { id: 3, imageName: "step-three", title: "مصرف غذایی هفته گذشته" },
  { id: 4, imageName: "step-four", title: "بشقاب غذایی مورد علاقه‌ات" },
  { id: 5, imageName: "step-five", title: "بشقاب غذایی بدون محدودیت" },
  { id: 6, imageName: "step-six", title: "بشقاب غذایی با محدودیت منابع" },
];

const FormsCatalog = () => {
  // const res = useLoaderData();
  return (
    <>
      <div className="w-full mx-auto flex flex-col gap-4 mt-12 text-center text-pretty">
        <h4>سفر تغذیه‌ای تو از همین‌جا شروع میشه</h4>
        <p className="xs:px-6 sm:px-16">
          در یک سفر {toPersianDigits(7)} مرحله‌ای، عادت‌ها و ترجیحاتت رو
          می‌شناسیم تا در پایان، رژیمی کاملاً مطابق با بدن و سبک زندگی تو
          بسازیم.
        </p>
      </div>
      <div className="grid grid-cols-2 items-center w-full mt-16">
        {formsCatalog.map((fc, index) => {
          const isOdd = (index + 1) % 2 !== 0;
          return (
            <>
              {isOdd && (
                <>
                  <FormsCatalogRoadmapStep
                    key={index}
                    isOdd
                    counter={index + 1}
                    imageName={fc.imageName}
                    title={fc.title}
                  />
                  <div></div>
                </>
              )}
              {!isOdd && (
                <>
                  <div></div>
                  <FormsCatalogRoadmapStep
                    key={index}
                    isOdd={false}
                    counter={index + 1}
                    imageName={fc.imageName}
                    title={fc.title}
                  />
                </>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default FormsCatalog;
