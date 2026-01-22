import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contacts from "../pages/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout wraps everything
    children: [
      {
        path: "", // default route
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path:'project',
        element:<Projects/>
      },
      {
        path:"contact",
        element:<Contacts/>
      }
      
    ],
  },
]);

export default router;
