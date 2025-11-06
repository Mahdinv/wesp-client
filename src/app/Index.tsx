import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useContext, useEffect, useRef, useState } from "react";
import Authentication from "./components/authentication";
import logout, { checkTokenExpiration, getAccessToken } from "../utils/auth";
import UserProgressContext from "../store/userProgressContext";

const Index = () => {
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();
  const { token, setAccessToken, setProgress } =
    useContext(UserProgressContext);
  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [elementName, setElementName] = useState("");

  useEffect(() => {
    if (!token || token === "") return;
    const tokenExpiration: string | number = checkTokenExpiration();
    if (tokenExpiration === "EXPIRED") {
      logout();
    } else {
      const token = getAccessToken();
      if (!token || token === "") return;
      setAccessToken(token);
      setTimeout(() => {
        logout();
        setAccessToken("");
        setProgress("login");
        navigate("?mode=login");
      }, Number(tokenExpiration));
    }
  }, [token, setAccessToken, navigate, setProgress]);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mainSection = mainSectionRef.current;
    const sections = document.querySelectorAll(".container");
    if (!mainSection || sections.length === 0) return;
    function scrollHandler() {
      if (!!mainSection && !isScrolled && mainSection.scrollTop > 100) {
        setIsScrolled(true);
      } else if (!!mainSection && isScrolled && mainSection.scrollTop <= 100) {
        setIsScrolled(false);
      }

      const scrollTop = mainSection!.scrollTop;
      const scrollHeight = mainSection!.scrollHeight;
      const clientHeight = mainSection!.clientHeight;
      sections.forEach((section) => {
        const el = section as HTMLElement;
        const top = el.offsetTop - 200;
        const bottom = top + el.offsetHeight;

        if (
          section.id !== "" &&
          elementName !== el.id &&
          scrollTop >= top &&
          scrollTop < bottom
        ) {
          setElementName(el.id);
        }
      });
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 100;
      if (isNearBottom && elementName !== "contact-us") {
        setElementName("contact-us");
      }
      if (scrollTop < 100 && elementName !== "") {
        setElementName("");
      }
    }

    scrollHandler();

    mainSection?.addEventListener("scroll", scrollHandler);
    return () => mainSection?.removeEventListener("scroll", scrollHandler);
  }, [isScrolled, elementName]);

  return (
    <div
      ref={mainSectionRef}
      className="index-container sm:h-[100vh] md:min-h-screen flex flex-col overflow-y-auto overflow-x-hidden"
    >
      <Header
        isScrolled={isScrolled}
        mainSectionRef={mainSectionRef}
        elementName={elementName}
      />
      <Authentication />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
