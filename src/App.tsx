import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Index from "./app/Index";
import { UserProgressContextProvider } from "./store/userProgressContext";
import { action as authAction } from "./actions/auth-action";
import { action as tablematesAction } from "./actions/tablemates-action";
import HotToaster from "./base/Toaster";
import Home from "./app/components/home/Index";
import Diets from "./app/components/diets/Index";
import News from "./app/components/news/Index";
import Articles from "./app/components/articles/Index";
import Podcasts from "./app/components/podcasts/Index";
import { loader as gameWorkflowLoader } from "./loaders/game-workflow-loader";
import Error from "./base/Error";
import GameWorkflowRoot from "./app/components/game-workflow/Index";
import GameWorkflow from "./app/components/game-workflow/GameWorkflow";
import DemographicInformation from "./app/components/game-workflow/demographic-information/Index";
import Tablemates from "./app/components/game-workflow/tablemates/Index";
import PreferredFood from "./app/components/game-workflow/preferred-food/Index";
import PastWeekIntake from "./app/components/game-workflow/past-week-intake/Index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      action: authAction,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/game-workflow",
          element: <GameWorkflowRoot />,
          children: [
            {
              index: true,
              element: <GameWorkflow />,
              loader: gameWorkflowLoader,
            },
            {
              path: "demographic-information",
              element: <DemographicInformation />,
            },
            {
              path: "tablemates",
              element: <Tablemates />,
              action: tablematesAction,
            },
            { path: "past-week-intake", element: <PastWeekIntake /> },
            { path: "preferred-food", element: <PreferredFood /> },
          ],
        },
        { path: "/diets", element: <Diets /> },
        { path: "/news", element: <News /> },
        { path: "/articles", element: <Articles /> },
        { path: "/podcasts", element: <Podcasts /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);
  return (
    <>
      <UserProgressContextProvider>
        <RouterProvider router={router} />
      </UserProgressContextProvider>
      <HotToaster />
    </>
  );
}

export default App;
