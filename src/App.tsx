import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Index from "./app/Index";
import { UserProgressContextProvider } from "./store/userProgressContext";
import { action as authAction } from "./app/actions/auth-action";
import HotToaster from "./base/Toaster";
import Home from "./app/components/home/Index";
import Diets from "./app/components/diets/Index";
import News from "./app/components/news/Index";
import Articles from "./app/components/articles/Index";
import Podcasts from "./app/components/podcasts/Index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      action: authAction,
      children: [
        { index: true, element: <Home /> },
        { path: "/diets", element: <Diets /> },
        { path: "/news", element: <News /> },
        { path: "/articles", element: <Articles /> },
        { path: "/podcasts", element: <Podcasts /> },
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
