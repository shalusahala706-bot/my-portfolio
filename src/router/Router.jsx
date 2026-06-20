import { createBrowserRouter } from "react-router-dom";
import Port from "../port/Port";
import Portabt from "../port/Portabt"
import Portcntct from "../port/Portcntct"
import Portmore from "../port/Portmore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Port />,
  },
  {
    path: "portabt",
    element: <Portabt />,
  },
  {
    path:"portcntct",
    element:<Portcntct/>
  },
  {
    path:"portmore",
    element:<Portmore/>
  }
]);
export default router;
