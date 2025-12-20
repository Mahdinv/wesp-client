import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Authentication = () => {
  const location = useLocation();
  const pathName = location.pathname.includes("login")
    ? "login"
    : location.pathname.includes("register")
    ? "register"
    : location.pathname.includes("reset-password")
    ? "reset-password"
    : location.pathname.includes("forget-password")
    ? "forget-password"
    : "login";

  return (
    <div className="w-full min-h-screen flex items-center justify-center xxs:px-3 xs:px-6 md:px-0">
      <div className="xxs:w-full sm:w-10/12 md:w-11/12 2xl:w-10/12 xxs:h-[75vh] md:h-[90vh] max-h-[750px] min-h-[520px] bg-white flex md:flex-row rounded-2xl shadow-lg">
        <div className="w-full md:w-1/2 flex md:flex-row">
          <Suspense
            key={location.pathname}
            fallback={<p>در حال بارگذاری...</p>}
          >
            <Outlet />
          </Suspense>
        </div>
        <div className="xxs:hidden md:block relative z-0 w-1/2 overflow-hidden rounded-2xl">
          <h1
            className={`${
              pathName === "reset-password" || pathName === "forget-password"
                ? "hidden"
                : "block"
            } absolute text-nowrap !font-yekan z-10 text-primary-darker top-[13%] right-1/2 translate-x-1/2`}
          >
            برای انسان، برای طبیعت
          </h1>
          <img
            src={`/images/authentication/${
              pathName === "reset-password" || pathName === "forget-password"
                ? "reset-password"
                : pathName
            }-image.jpg`}
            alt={`diet-${pathName}-image`}
            loading="lazy"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
