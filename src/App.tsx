import "../sass/main.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Error from "./components/Error";
import Expenses from "./pages/Expenses";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import RootLayout from "./pages/Root";
import Settings from "./pages/Settings";
import Stadistics from "./pages/Stadistics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "howitworks",
          element: <HowItWorks />,
        },
        {
          path: "expenses",
          element: <Expenses />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "stadistics",
          element: <Stadistics />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
