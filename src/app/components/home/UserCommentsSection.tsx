import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoStar } from "react-icons/io5";
import { BiSolidQuoteLeft } from "react-icons/bi";

const userComments = [
  {
    id: 1,
    title:
      "فضای سایت خیلی حس خوبی میده، اصلاً استرس رژیم نداری. مثل یک بازی جذابه که آخرش جایزه‌ت سلامتی خودت و خانواده‌ته. بچه‌هام هم عاشق بخش انتخاب غذاهای سالم شدن.",
    imageName: "angelina-joolie",
    userName: "آنجلینا جولی",
  },
  {
    id: 2,
    title:
      "به عنوان کسی که با اعداد سر و کار داره، بخش مدیریت هزینه برام جذاب بود. دقیقاً بهم نشون داد که چقدر از خریدهای قبلیم هدررفت سرمایه بود. الان هم سالم‌ترم، هم پس‌اندازم بیشتر شده.",
    imageName: "leonardo-dicaprio",
    userName: "لئوناردو دیکاپریو",
  },
  {
    id: 3,
    title:
      "تا قبل از رژیم چایدار فکر می‌کردم رژیم گرفتن یعنی گرسنگی کشیدن و غذاهای بدمزه. اما اینجا یاد گرفتم چطور با مواد اولیه ساده و فصلی، غذاهایی درست کنم که  انرژیم رو بالا میبره.",
    imageName: "arash-kamangir",
    userName: "آرش کمانگیر",
  },
];

const UserCommentsSection: React.FC<{ isMd: boolean }> = (props) => {
  return (
    <section className="bg-back-page py-10 space-y-4">
      <div className="xxs:px-4 sm:px-10 md:px-16 lg:px-24">
        <h2 className="mb-2">همراهان ما چه می‌گویند؟</h2>
        <p>
          تجربه واقعی کاربرانی که با رژیم پایدار سبک زندگی سالم‌تر و پایدارتری
          را شروع کرده‌اند.
        </p>
      </div>
      {!props.isMd && (
        <Swiper
          slidesPerView={1.3}
          spaceBetween={20}
          centeredSlides={true}
          loop={false}
        >
          {userComments.map((userComment) => (
            <SwiperSlide className="bg-white relative -z-10 rounded-xl">
              <span className="absolute top-0 left-0 w-28 aspect-square z-0">
                <BiSolidQuoteLeft className="text-light-primary w-full h-full" />
              </span>
              <div className="h-full flex flex-col items-start justify-between xxs:py-4 xxs:px-4 space-y-8 relative z-10">
                <div className="flex flex-row">
                  {[1, 2, 3, 4, 5].map((rate) => (
                    <IoStar
                      className={`${
                        rate !== 5 ? "text-normal-yellow" : "text-default-gray"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-pretty text-justify">{userComment.title}</p>
                <div className="w-full flex flex-row items-center gap-2 border-t border-default-gray pt-2">
                  <img
                    src={`/images/user-comments/${userComment.imageName}.jpg`}
                    alt={userComment.imageName}
                    loading="lazy"
                    className="w-[23%] rounded-full"
                  />
                  <h6 className="flex-grow text-black">
                    {userComment.userName}
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {props.isMd && (
        <div className="grid grid-cols-3 items-center xxs:px-4 sm:px-10 md:px-16 lg:px-24 gap-4 w-full h-auto">
          {userComments.map((userComment) => (
            <div className="bg-white relative rounded-xl h-full">
              <span className="absolute top-0 left-0 xxs:w-28 2xl:w-40 aspect-square z-0">
                <BiSolidQuoteLeft className="text-light-primary w-full h-full" />
              </span>
              <div className="h-full flex flex-col items-start justify-between xxs:py-4 xxs:px-4 space-y-8 relative z-10">
                <div className="flex flex-row">
                  {[1, 2, 3, 4, 5].map((rate) => (
                    <IoStar
                      className={`${
                        rate !== 5 ? "text-normal-yellow" : "text-default-gray"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-pretty">{userComment.title}</p>
                <div className="w-full flex flex-row items-center gap-2 border-t border-default-gray pt-2">
                  <img
                    src={`/images/user-comments/${userComment.imageName}.jpg`}
                    alt={userComment.imageName}
                    loading="lazy"
                    className="w-[23%] rounded-full"
                  />
                  <h6 className="flex-grow text-black">
                    {userComment.userName}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default memo(UserCommentsSection);
