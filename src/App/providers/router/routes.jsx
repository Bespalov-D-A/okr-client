import {Navigate} from "react-router-dom";
import Greetings from "../../../Pages/Greetings";
import Main from "../../../Pages/Main";
import Profile from "../../../Pages/Profile";
import Registration from "../../../Pages/Registration";

export const routes = [
  {
    path: "",
    element: <Navigate to="main" />,
  },
  {
    path: "main/",
    element: <Main />,
  },
  {
    path: "greetings/",
    element: <Greetings />,
  },
{
    path: "profile/",
    element: <Profile />,
  },
{
    path: "registration/",
    element: <Registration />,
  },
];
