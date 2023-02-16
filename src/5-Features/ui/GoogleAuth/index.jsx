import {  useState } from "react";
import GoogleLogo from "./ui/img/google.svg";
import Button from "@mui/material/Button";
import s from "./index.module.scss";
import {googleAuth} from "../../../7-Shared/assests/Vars";

const GoogleAuth = () => {

return (
  <Button
    variant={"outlined"}
    startIcon={<img src={GoogleLogo} className={s.google} />}
    onClick={() => (window.location = googleAuth)}
  >
    Присоединиться с Google
  </Button>
);
};

export default GoogleAuth;
