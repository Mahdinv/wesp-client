import NewestContentSection from "./NewestContentSection";
import PositiveImpactSection from "./PositiveImpactSection";
import InnovativeMethodSection from "./InnovativeMethodSection";
import HeroSection from "./HeroSection";
import DietFamilySection from "./DietFamilySection";
import UserCommentsSection from "./UserCommentsSection";
import { useEffect, useState } from "react";
import Button from "../../../base/inputs/Button";
import { FaArrowLeftLong } from "react-icons/fa6";

const Home = () => {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setIsMd(e.matches);

    handler(mq as any);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return (
    <>
      {/*********************Hero Landing******************** */}
      <HeroSection />

      {/*********************روش نوآورانه*********************/}
      <InnovativeMethodSection />

      {/*********************تاثیر مثبت رژیم پایدار*********************/}
      <PositiveImpactSection />

      {/*********************تازه‌های رژیم پایدار*********************/}
      <NewestContentSection isMd={isMd} />

      {/*********************خانواده رژیم پایدار*********************/}
      <DietFamilySection />

      {/*********************همراهان ما چه می‌گویند؟*********************/}
      <UserCommentsSection isMd={isMd} />

      <section className="md:w-2/3 lg:w-[40%] mx-auto flex flex-col items-center justify-center xxs:gap-4 xl:gap-8 pt-10">
        <h2>حالا آماده‌ای سفرت رو شروع کنی؟</h2>
        <Button
          classes="btn btn-primary xxs:w-[40%] xs:w-1/3 md:w-1/3 lg:w-1/3 xxs:py-1 md:py-2"
          title="شروع سفر"
          icon={<FaArrowLeftLong />}
        />
      </section>
    </>
  );
};

export default Home;
