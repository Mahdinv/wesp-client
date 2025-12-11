import { memo, useState } from "react";
import {
  FaArrowLeftLong,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../../base/inputs/Button";

const newestContents = [
  {
    id: 1,
    title: "همــکاری استراتژیک با سازمــان حفاظت محیط زیست",
    imageName: "jungle",
    categoryName: "خبر",
  },
  {
    id: 2,
    title: "غذای سبک در سفر  چه بخوریم؟",
    imageName: "cruise-ship",
    categoryName: "مقاله",
  },
  {
    id: 3,
    title: "بهترین راه تشخیص گوشت مرغ سالم",
    imageName: "chicken",
    categoryName: "مقاله",
  },
];

const NewestContentSection: React.FC<{ isMd: boolean }> = (props) => {
  const navigate = useNavigate();
  const [translate, setTranslate] = useState(0);
  const elementWidth = newestContents.length * 100;
  const movement = 100 / newestContents.length;

  function handlePrevStep() {
    if (translate !== 0) {
      setTranslate((prev) => prev - movement);
    }
  }

  function handleNextStep() {
    if (translate < 100 - movement) {
      setTranslate((prev) => prev + movement);
    }
  }

  return (
    <section className="bg-back-page py-10 space-y-4">
      <div className="flex flex-row items-center xxs:px-4 sm:px-10 md:px-16 lg:px-24 gap-2">
        <div className="flex flex-col w-full justify-between gap-2">
          <h2>تازه های رژیم پایدار</h2>
          <p>
            آخرین اخبار، مقالات علمی و دستاوردهای ما در مسیر سلامت و پایداری.
          </p>
        </div>
        <Button
          classes="xxs:hidden md:block btn btn-outline md:w-1/3 lg:w-1/4 xl:w-1/6 md:!text-sm"
          icon={<FaArrowLeftLong />}
          iconClasses="text-lg"
          title="مشاهده آرشیو"
          onClick={() => navigate("/articles")}
        />
        <div className="md:hidden flex flex-row items-center gap-3">
          <span
            className={`bg-transparent border-2 p-2 rounded-full ${
              translate === 0 ? "border-gray-400" : "border-primary"
            }`}
            onClick={handlePrevStep}
          >
            <FaChevronRight
              className={`${
                translate === 0 ? "text-gray-400" : "text-primary"
              }`}
            />
          </span>
          <span
            className={`bg-transparent border-2 p-2 rounded-full ${
              translate >= 100 - movement ? "border-gray-400" : "border-primary"
            }`}
            onClick={handleNextStep}
          >
            <FaChevronLeft
              className={`${
                translate >= 100 - movement ? "text-gray-400" : "text-primary"
              }`}
            />
          </span>
        </div>
      </div>
      <div className="w-full h-auto overflow-hidden md:px-16 lg:px-24">
        <motion.div
          initial={false}
          animate={{
            width: !props.isMd ? `${elementWidth}%` : "100%",
            x: !props.isMd ? `${translate}%` : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full h-auto xxs:flex xxs:flex-row xxs:gap-8 xxs:px-4 md:px-0 md:grid md:grid-cols-3 md:items-start"
        >
          {newestContents.map((newestContent) => (
            <div className="relative w-[100%] h-full flex flex-col items-center justify-center gap-2">
              <div className="bg-white absolute top-4 right-6 rounded-full py-1 px-4 font-semibold">
                {newestContent.categoryName}
              </div>
              <img
                src={`/images/newest-content/${newestContent.imageName}.jpg`}
                alt={newestContent.title}
                loading="lazy"
                className="flex-1 w-full h-[65%] object-cover rounded-2xl"
              />
              <div className="flex-1 w-full h-full flex flex-col">
                <h3 className="text-black xxs:text-xl font-bold">
                  {newestContent.title}
                </h3>
                <Link
                  to={""}
                  className="text-primary underline underline-offset-[6px] decoration-[3px] duration-300 hover:text-primary-darker mt-auto"
                >
                  ادامه مطلب
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="md:hidden w-full xxs:px-4 sm:px-10">
        <Button
          classes="btn btn-outline w-full"
          title="مشاهده آرشیو"
          onClick={() => navigate("/articles")}
        />
      </div>
    </section>
  );
};

export default memo(NewestContentSection);
