import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./app/components/Home";
import Index from "./app/Index";
import { UserProgressContextProvider } from "./store/userProgressContext";
import { action as authAction } from "./app/actions/auth-action";
import HotToaster from "./base/Toaster";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      action: authAction,
      children: [{ index: true, element: <Home /> }],
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
