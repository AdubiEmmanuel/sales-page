import { createBrowserRouter } from "react-router-dom";
import Guest from "./components/Guest";
import MainContent from "./pages/MainContent";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Guest />,
    children: [
      {
        path: "/",
        element: <MainContent to="/" />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);

export default router;