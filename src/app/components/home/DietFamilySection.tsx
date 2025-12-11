import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const familyMembers = [
  {
    id: 1,
    name: "پارسا متینی",
    title: "بنیان‌گذار و متخصص تغذیه",
    imageName: "user-profile",
  },
  {
    id: 2,
    name: "پارسا متینی",
    title: "بنیان‌گذار و متخصص تغذیه",
    imageName: "user-profile",
  },
  {
    id: 3,
    name: "پارسا متینی",
    title: "بنیان‌گذار و متخصص تغذیه",
    imageName: "user-profile",
  },
  {
    id: 4,
    name: "پارسا متینی",
    title: "بنیان‌گذار و متخصص تغذیه",
    imageName: "user-profile",
  },
  {
    id: 5,
    name: "پارسا متینی",
    title: "بنیان‌گذار و متخصص تغذیه",
    imageName: "user-profile",
  },
  {
    id: 6,
    name: "پارسا متینی",
    title: "بنیان‌گذار و متخصص تغذیه",
    imageName: "user-profile",
  },
  {
    id: 7,
    name: "پارسا متینی",
    title: "بنیان‌گذار و متخصص تغذیه",
    imageName: "user-profile",
  },
];

const DietFamilySection = () => {
  return (
    <section className="bg-white xxs:px-4 sm:px-10 md:px-16 lg:px-24 py-10">
      <h2 className="mb-2">خانواده رژیم پایدار</h2>
      <p>تیمی متخصص و دغدغه‌مند که برای سلامت شما و زمین تلاش می‌کنند.</p>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          550: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1280: { slidesPerView: 5 },
        }}
        className="!pt-4 !pb-6"
      >
        {familyMembers.map((member) => (
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img
              src={`/images/members/${member.imageName}.jpg`}
              alt={member.imageName}
              loading="lazy"
              className="xxs:w-1/3 sm:w-2/4 xl:w-3/5 rounded-full border border-primary mx-auto relative z-10"
            />
            <div className="relative z-0 flex flex-col items-center sm:justify-self-center gap-1 bg-dark-light-primary rounded-xl xxs:mx-12 sm:mx-0 pt-6 pb-4 xxs:px-10 md:px-2 md:w-full -translate-y-[20%]">
              <h6 className="text-black !font-yekan !font-extrabold">
                {member.name}
              </h6>
              <small>{member.title}</small>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default memo(DietFamilySection);
