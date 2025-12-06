import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense, useContext, useEffect, useRef } from "react";
import logout, { checkTokenExpiration, getAccessToken } from "../utils/auth";
import UserProgressContext from "../store/userProgressContext";

const Index = () => {
  const navigate = useNavigate();
  const { token, setAccessToken, setProgress } =
    useContext(UserProgressContext);
  const mainSectionRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div
      ref={mainSectionRef}
      className="index-container xxs:h-[100vh] md:min-h-screen flex flex-col overflow-y-auto overflow-x-hidden"
    >
      <Header />
      <div className="flex-grow">
        <Suspense fallback={<p>در حال بارگذاری...</p>}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
