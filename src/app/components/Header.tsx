import { useContext, useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import Button from "../../base/inputs/Button";
import UserProgressContext from "../../store/userProgressContext";
import { NavLink, useNavigate } from "react-router-dom";
import { PiPlantLight, PiUserBold } from "react-icons/pi";
import Dropdown from "../../base/inputs/Dropdown";
import { RxHamburgerMenu } from "react-icons/rx";

const navLinks = [
  { id: "home", title: "خانه" },
  { id: "podcasts", title: "پادکست" },
  { id: "articles", title: "مجله‌سلامت" },
  { id: "about-us", title: "درباره‌ما" },
];

const Header = () => {
  const navigate = useNavigate();
  const { token } = useContext(UserProgressContext);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  if (menuIsOpen) {
    menuRef.current?.classList.remove("-translate-x-[102%]");
    menuRef.current?.classList.add("translate-x-0");
  } else {
    menuRef.current?.classList.remove("translate-x-0");
    menuRef.current?.classList.add("-translate-x-[102%]");
  }

  return (
    <>
      <header className="sticky top-0 right-0 w-full z-50 xxs:px-6 xxs:py-3 sm:py-3 xs:py-2 bg-[#F7f7f7] shadow-md">
        <nav className="flex flex-row w-full items-center justify-between font-peyda">
          <RxHamburgerMenu
            className="text-primary xxs:text-xl sm:text-5xl md:hidden"
            onClick={() => setMenuIsOpen(true)}
          />
          <div className="xxs:flex-grow md:grow-0 flex flex-row gap-2 w-auto items-center xxs:mr-3">
            <PiPlantLight
              strokeWidth={4}
              className="text-primary xxs:hidden md:block xxs:w-6 sm:w-10 lg:w-14 2xl:w-20 h-auto"
            />
            <h3>رژیم پایدار</h3>
          </div>
          <div
            ref={menuRef}
            className="fixed top-0 left-0 h-screen flex flex-col w-full xs:bg-gradient-to-b xs:from-green-300 xs:to-green-500 py-4 px-4 gap-4 duration-700 transition-transform -translate-x-[102%] md:static md:h-auto md:flex-row md:flex-1 md:duration-0 md:translate-x-0 md:w-auto md:bg-gradient-to-b md:from-transparent md:to-transparent z-50"
          >
            <div className="flex flex-row w-full items-center justify-between md:hidden">
              <div className="flex flex-row gap-2 items-center">
                <PiPlantLight className="text-green-100 xs:w-8 h-auto" />
                <h6 className="text-green-100">رژیم سبز</h6>
              </div>
              <FaXmark
                className="text-green-100 text-sm"
                onClick={() => setMenuIsOpen(false)}
              />
            </div>
            <ul className="flex flex-col h-screen md:flex-row md:h-auto md:w-full xs:justify-between md:justify-center xs:py-28 md:p-0 text-center md:gap-6 lg:gap-10 xl:gap-12 2xl:gap-14 duration-500 xs:text-green-100 md:text-primary-darker opacity-75">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="w-auto text-center"
                  onClick={() => {
                    setMenuIsOpen(false);
                  }}
                >
                  <NavLink
                    to={link.id === "home" ? "/" : link.id}
                    className={({ isActive }) =>
                      `duration-300 font-bold lg:text-base 2xl:text-lg ${
                        isActive
                          ? "opacity-100"
                          : "opacity-60 hover:opacity-100"
                      }`
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="xxs:w-5/12 xs:w-[28%] sm:w-3/12 md:w-2/12 lg:w-[14%] xl:w-[12%] 2xl:w-1/12 flex flex-row gap-2">
            {(!token || token === "") && (
              <>
                <Button
                  classes="w-full btn btn-primary"
                  title="ورود"
                  icon={<PiUserBold strokeWidth={4} />}
                  iconClasses="xxs:text-lg lg:text-2xl font-extrabold"
                  onClick={() => navigate("/auth/login")}
                />
              </>
            )}

            {!!token && <Dropdown />}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
