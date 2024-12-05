import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../App";
import Layout from "../shared/Layout";
import Clients from "../pages/Clients";
import Projects from "../pages/Projects";
import Users from "../pages/Users";
import Error404 from "../errors/Error404";

const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Navigate to="/clients" replace />,
          },
          {
            path: "/clients",
            element: <Clients />,
          },
          {
            path: "/projects",
            element: <Projects />,
          },
          {
            path: "/users",
            element: <Users />,
          },
          {
            path: "*",
            element: <Error404 />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
