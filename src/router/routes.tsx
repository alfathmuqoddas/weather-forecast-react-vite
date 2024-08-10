import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import useLoader from "./useLoader";

const router: any = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/jakarta" replace />,
  },
  {
    path: "/:location",
    element: <App />,
    loader: useLoader as any,
  },
]);

export default router;
