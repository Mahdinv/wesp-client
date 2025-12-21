import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";

const Index = () => {
  const location = useLocation();

  return (
    <div className="index-container xxs:h-[100vh] md:min-h-screen flex flex-col overflow-y-auto overflow-x-hidden">
      <Header />
      <div className="flex-grow">
        <Suspense
          key={location.pathname}
          fallback={<h4>در حال بارگذاری...</h4>}
        >
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
