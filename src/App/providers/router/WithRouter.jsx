import {Suspense} from "react";
import {createBrowserRouter} from "react-router-dom";
import Main from "../../../Pages/Main";
import {routes} from "./routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path,
      element: route.element,
    })),
  },
], {basename: "/"});
