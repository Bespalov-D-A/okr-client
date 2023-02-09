import Greeting from "../../../Pages/Greeting";
import Main from "../../../Pages/Main";
import Profile from "../../../Pages/Profile";
import Registration from "../../../Pages/Registration";

export const routes = [
  {
    path: "main/",
    element: <Main />,
  },
  {
    path: "greetings/",
    element: <Greeting />,
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
