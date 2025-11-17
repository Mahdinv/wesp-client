// import { useLoaderData } from "react-router-dom";

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
    <div className="grid grid-cols-2 items-center w-full mt-20">
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
  );
};

export default FormsCatalog;
