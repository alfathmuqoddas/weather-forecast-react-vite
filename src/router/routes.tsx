import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import useLoader from "./useLoader";
import NotFoundPage from "./NotFoundPage";

const router: any = createBrowserRouter([
  {
    path: import.meta.env.BASE_URL,
    element: <Navigate to={`${import.meta.env.BASE_URL}jakarta`} replace />,
  },
  {
    path: `${import.meta.env.BASE_URL}:location`,
    element: <App />,
    loader: useLoader as any,
    errorElement: <NotFoundPage />,
  },
]);

export default router;
