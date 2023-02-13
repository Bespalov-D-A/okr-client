import { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import GoogleLogo from "./ui/img/google.svg";
import Button from "@mui/material/Button";
import s from "./index.module.scss";
import { userService } from "../../../7-Shared/API/userService";
import { useAlert } from "../../../6-Entities/common";
import { saveUserData } from "../../../7-Shared/lib/saveUserData";
import { useNavigate } from "react-router-dom";
import {
  FAILED_TO_CREATE_ACCOUNT,
  FAILED_TO_GET_DATA_GOOGLE_ACCOUNT,
  FAILED_TO_GOOGLE_AUTH,
} from "../../../7-Shared/assests/Constants";
import {googleAuth} from "../../../7-Shared/assests/Vars";

const GoogleAuth = () => {
  const navigate = useNavigate();
  const setAlert = useAlert((state) => state.setAlert);
  const [user, setUser] = useState(null);

useEffect(() => {
  if (user) {
    userService
      .getGoogleUserData(user.access_token)
      .then((res) => {


/*          userService*/
          /*.createUser(res.data)*/
          /*.then((res) => {*/
            /*saveUserData(res.data);*/
            /*navigate("/main", { replace: true });*/
          /*})*/
          /*.catch((e) => {*/
            /*setAlert({ type: "error", msg: FAILED_TO_CREATE_ACCOUNT });*/
            /*console.log(e);*/
          /*});*/
      })
      .catch((err) => {
        setAlert({ type: "error", msg: FAILED_TO_GET_DATA_GOOGLE_ACCOUNT });
        console.log(err);
      });
  }
}, [user]);

const login = useGoogleLogin({
  onSuccess: (codeResponse) => {
    console.log(codeResponse)
setUser(codeResponse)
  },
  onError: (error) => {
    setAlert({ type: "error", msg: FAILED_TO_GOOGLE_AUTH });
    console.log("Login Failed:", error);
  },
});
//userService.initGoogleAuth().then(res=>console.log(res))
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
