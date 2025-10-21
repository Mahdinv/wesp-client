import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./home/components/Home";
import Index from "./home/Index";
import { UserProgressContextProvider } from "./store/userProgressContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
  return (
    <UserProgressContextProvider>
      <RouterProvider router={router} />
    </UserProgressContextProvider>
  );
}

export default App;
