import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [elementName, setElementName] = useState("");

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
      sections.forEach((section, i) => {
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
        const isNearBottom = scrollTop + clientHeight >= scrollHeight - 100;
        if (isNearBottom && i - 1 && elementName !== "contact-us") {
          setElementName("contact-us");
        }
        if (scrollTop < 100 && elementName !== "") {
          setElementName("");
        }
      });
    }

    scrollHandler();

    mainSection?.addEventListener("scroll", scrollHandler);
    return () => mainSection?.removeEventListener("scroll", scrollHandler);
  });
  return (
    <div
      ref={mainSectionRef}
      className="h-[100vh] overflow-y-auto overflow-x-hidden"
    >
      <Header
        isScrolled={isScrolled}
        mainSectionRef={mainSectionRef}
        elementName={elementName}
      />
      <Register />
      <Login />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Index;
