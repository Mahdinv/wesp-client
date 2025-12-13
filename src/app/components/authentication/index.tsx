import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Authentication = () => {
  const loc = useLocation();
  const pathName = loc.pathname.includes("login")
    ? "login"
    : loc.pathname.includes("register")
    ? "register"
    : loc.pathname.includes("reset-password")
    ? "reset-password"
    : "login";

  return (
    <Suspense fallback={<p>در حال بارگذاری...</p>}>
      <div className="w-full min-h-screen flex items-center justify-center xxs:px-3 xs:px-6 md:px-0">
        <div className="xxs:w-full sm:w-10/12 md:w-11/12 2xl:w-10/12 min-h-[60vh] bg-white flex md:flex-row rounded-2xl shadow-lg">
          <div className="w-full md:w-1/2 flex md:flex-row">
            <Outlet />
          </div>
          <div className="xxs:hidden md:block relative z-0 w-1/2 overflow-hidden rounded-2xl">
            <h1
              className={`${
                pathName === "reset-password" ? "hidden" : "block"
              } absolute text-nowrap !font-yekan z-10 text-primary-darker top-[13%] right-1/2 translate-x-1/2`}
            >
              برای انسان، برای طبیعت
            </h1>
            <img
              src={`/images/authentication/${pathName}-image.jpg`}
              alt={`diet-${pathName}-image`}
              loading="lazy"
              className="absolute inset-0 object-cover w-full h-full xl:scale-105 2xl:scale-110"
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Authentication;
