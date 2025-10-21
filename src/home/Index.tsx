import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const mainSection = mainSectionRef.current;
    function scrollHandler() {
      if (!!mainSection && !isScrolled && mainSection?.scrollTop > 100) {
        setIsScrolled(true);
      } else if (!!mainSection && isScrolled && mainSection?.scrollTop <= 100) {
        setIsScrolled(false);
      }
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
      <Header isScrolled={isScrolled} mainSectionRef={mainSectionRef} />
      <Register />
      <Login />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Index;
