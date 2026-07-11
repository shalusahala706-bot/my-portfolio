import { createBrowserRouter } from "react-router-dom";
import Port from "../port/Port";
import Portabt from "../port/Portabt"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Port />,
  },
  {
    path: "portabt",
    element: <Portabt />,
  }
]);
export default router;
