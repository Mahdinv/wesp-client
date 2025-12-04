import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Index from "./app/Index";
import { UserProgressContextProvider } from "./store/userProgressContext";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./app/components/home/Index"));
const Podcasts = lazy(() => import("./app/components/podcasts/Index"));
const Articles = lazy(() => import("./app/components/articles/Index"));
const AboutUs = lazy(() => import("./app/components/about-us/Index"));
const Authentication = lazy(() => import("./app/components/authentication"));
const Login = lazy(() => import("./app/components/authentication/Login"));
const Register = lazy(() => import("./app/components/authentication/Register"));
const ResetPassword = lazy(
  () => import("./app/components/authentication/ResetPassword")
);
const GameWorkflowRoot = lazy(
  () => import("./app/components/game-workflow/Index")
);
const GameWorkflow = lazy(
  () => import("./app/components/game-workflow/GameWorkflow")
);
const DemographicInformation = lazy(
  () => import("./app/components/game-workflow/demographic-information/Index")
);
const Tablemates = lazy(
  () => import("./app/components/game-workflow/tablemates/Index")
);
const PastWeekIntake = lazy(
  () => import("./app/components/game-workflow/past-week-intake/Index")
);
const PreferredFood = lazy(
  () => import("./app/components/game-workflow/preferred-food/Index")
);
const Error = lazy(() => import("./base/Error"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      { index: true, element: <Home /> },
      { path: "/podcasts", element: <Podcasts /> },
      { path: "/articles", element: <Articles /> },
      { path: "/about-us", element: <AboutUs /> },
      {
        path: "/auth",
        element: <Authentication />,
        children: [
          {
            path: "login",
            element: (
              <Suspense fallback={<p>در حال بارگذاری...</p>}>
                <Login />
              </Suspense>
            ),
          },
          {
            path: "register",
            element: (
              <Suspense fallback={<p>در حال بارگذاری...</p>}>
                <Register />
              </Suspense>
            ),
          },
          {
            path: "reset-password",
            element: (
              <Suspense fallback={<p>در حال بارگذاری...</p>}>
                <ResetPassword />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/game-workflow",
        element: <GameWorkflowRoot />,
        children: [
          { index: true, element: <GameWorkflow /> },
          {
            path: "demographic-information",
            element: <DemographicInformation />,
          },
          { path: "tablemates", element: <Tablemates /> },
          { path: "past-week-intake", element: <PastWeekIntake /> },
          { path: "preferred-food", element: <PreferredFood /> },
        ],
      },
      { path: "*", element: <Error /> },
    ],
  },
]);

function App() {
  return (
    <>
      <UserProgressContextProvider>
        <RouterProvider router={router} />
      </UserProgressContextProvider>
    </>
  );
}

export default App;
