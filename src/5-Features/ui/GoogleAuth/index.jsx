import { useEffect, useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import GoogleLogo from "./ui/img/google.svg";
import axios from "axios";
import Button from "@mui/material/Button";
import s from "./index.module.scss";
import { userService } from "../../../7-Shared/API/userService";
import { useAlert } from "../../../6-Entities/common";

const { default: GoogleOAuth } = require("../../../7-Shared/lib/GoogleOAuth");

//<GoogleOAuth responseMessage={responseMessage}  errorMessage={errorMessage}/>

const GoogleAuth = () => {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const setType = useAlert((state) => state.setType);
  const setMsg = useAlert((state) => state.setMessage);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      userService
        .getGoogleUserData(user.access_token)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          setType("error");
          setMsg("Не удалось получить данные Google аккаунта");
          console.log(err);
        });
    }
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <Button
      variant={"outlined"}
      startIcon={<img src={GoogleLogo} className={s.google} />}
      onClick={() => login()}
    >
      Присоединиться с Google
    </Button>
  );
};

export default GoogleAuth;
