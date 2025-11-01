import { useContext, useRef, useState } from "react";
import { FaBars, FaEarthAsia, FaXmark } from "react-icons/fa6";
import classes from "./Header.module.css";
import Button from "../../base/Button";
import UserProgressContext from "../../store/userProgressContext";
import { Link, NavLink } from "react-router-dom";
import logout from "../../utils/auth";

const navLinks = [
  {
    id: "home",
    title: "خانه",
    subLinks: [
      { id: "about-project", title: "درباره پروژه" },
      { id: "road-map", title: "چطور کار میکند؟" },
      { id: "members", title: "اعضای تیم" },
      { id: "contact-us", title: "تماس" },
    ],
  },
  { id: "diets", title: "رژیم‌های غذایی", subLinks: [] },
  { id: "news", title: "اخبار", subLinks: [] },
  { id: "articles", title: "مقالات", subLinks: [] },
  { id: "podcasts", title: "پادکست", subLinks: [] },
];

const Header: React.FC<{
  isScrolled: boolean;
  elementName: string;
  mainSectionRef: React.RefObject<HTMLDivElement | null>;
}> = (props) => {
  const { token, setAccessToken, setProgress } =
    useContext(UserProgressContext);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const subNavRef = useRef<HTMLDivElement | null>(null);
  if (menuIsOpen) {
    menuRef.current?.classList.remove("-translate-x-[102%]");
    menuRef.current?.classList.add("translate-x-0");
  } else {
    menuRef.current?.classList.remove("translate-x-0");
    menuRef.current?.classList.add("-translate-x-[102%]");
  }

  function handleNavEnter(id: string) {
    if (id === "home") {
      subNavRef.current?.classList.remove("hidden");
    }
  }

  function handleNavLeave(id: string) {
    if (id === "home") {
      subNavRef.current?.classList.add("hidden");
    }
  }

  return (
    <>
      <header
        className={`sticky top-0 right-0 ${
          props.isScrolled
            ? "border-b-[3px] border-green-400"
            : "border-b-[2px] border-green-300"
        } w-full z-20 xs:py-4 xs:px-6 bg-gradient-to-br from-green-50 to-emerald-100`}
      >
        <nav className="flex flex-row w-full items-center justify-between">
          <div className="flex flex-row gap-2 w-auto items-center">
            <FaEarthAsia className="xs:hidden sm:block text-icons sm:w-10 lg:w-12 xl:w-14 h-auto" />
            <h6 className="text-pretty xs:text-[14px] sm:text-[18px] lg:text-[22px]">
              الگوی حساس به آب و محیط‌زیست
            </h6>
          </div>
          <div
            ref={menuRef}
            className="fixed top-0 left-0 h-screen flex flex-col w-full xs:bg-gradient-to-b xs:from-colorTitleBold xs:to-primary py-4 px-4 gap-4 duration-700 transition-transform -translate-x-[102%] md:static md:h-auto md:flex-row  md:flex-1 md:duration-0 md:translate-x-0 md:w-auto md:bg-gradient-to-b md:from-transparent md:to-transparent z-50"
          >
            <div className="flex flex-row w-full items-center justify-between md:hidden">
              <div className="flex flex-row gap-2 items-center">
                <FaEarthAsia className="text-green-100 xs:w-8 h-auto" />
                <h6 className="text-green-100">الگوی حساس به آب و محیط‌زیست</h6>
              </div>
              <FaXmark
                className="text-green-100 text-sm"
                onClick={() => setMenuIsOpen(false)}
              />
            </div>
            <ul
              className={`${classes.navbar} font-noto flex flex-col h-screen md:flex-row md:h-auto md:w-full xs:justify-between md:justify-center xs:py-28 md:p-0 text-center md:gap-6 lg:gap-10 xl:gap-12 2xl:gap-14 duration-500 xs:text-green-100 md:text-colorTitleBold font-bold`}
            >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`relative z-30 w-auto text-center ${
                    props.elementName === link.id ? "nav-active" : undefined
                  }`}
                  onClick={() => {
                    setMenuIsOpen(false);
                  }}
                  onMouseEnter={() => handleNavEnter(link.id)}
                  onMouseLeave={() => handleNavLeave(link.id)}
                >
                  <NavLink to={link.id === "home" ? "/" : link.id}>
                    {link.title}
                  </NavLink>

                  {link.subLinks?.length > 0 && (
                    <div
                      ref={subNavRef}
                      className="hidden absolute left-1/2 top-full group-hover:block
                   -translate-x-1/2 mt-2 w-40 bg-slate-200 text-center rounded-lg shadow-lg"
                    >
                      <div className="relative w-4 h-4 rotate-45 -top-1 right-1/2 translate-x-1/2 bg-slate-200 z-10"></div>
                      <ul className="flex flex-col items-center justify-center gap-4 mb-4 px-4">
                        {link.subLinks.map((subLink) => (
                          <li
                            key={subLink.id}
                            className="cursor-pointer"
                            onClick={() => {
                              setMenuIsOpen(false);
                            }}
                          >
                            <NavLink to={`/#${subLink.id}`}>
                              {subLink.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-row gap-2">
              {(!token || token === "") && (
                <>
                  <Link to="?mode=login">
                    <Button
                      classes="btn px-4"
                      title="ورود"
                      onClick={() => setProgress("login")}
                    />
                  </Link>
                  <Link to="?mode=register">
                    <Button
                      classes="btn btn-primary px-6 md:px-7"
                      title="ثبت‌نام"
                      onClick={() => setProgress("register")}
                    />
                  </Link>
                </>
              )}

              {!!token && (
                <div className="flex flex-row gap-4 items-center">
                  <Link
                    to="/dashboard"
                    className="font-noto text-textDark font-bold duration-300 hover:text-primary"
                  >
                    داشبورد
                  </Link>
                  <Button
                    classes="btn btn-primary px-6 md:px-7"
                    title="خروج"
                    onClick={() => {
                      setAccessToken("");
                      logout();
                    }}
                  />
                </div>
              )}
            </div>
            <FaBars
              className="text-colorTitleBold xs:text-xs sm:text-sm md:hidden"
              onClick={() => setMenuIsOpen(true)}
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
