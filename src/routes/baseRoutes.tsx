import { RouteObject } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error from "../pages/Error";

const baseRoutes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/contact-us",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
    ],
  },
];

export default baseRoutes;
