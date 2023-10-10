import { createBrowserRouter } from "react-router-dom";
import baseRoutes from "./baseRoutes";

const router = createBrowserRouter([...baseRoutes], {
  basename: import.meta.env.BASE_URL,
});

export default router;
