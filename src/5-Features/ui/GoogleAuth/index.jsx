import { useEffect, useState } from "react";
import {  useGoogleLogin } from "@react-oauth/google";
import GoogleLogo from "./ui/img/google.svg";
import Button from "@mui/material/Button";
import s from "./index.module.scss";
import { userService } from "../../../7-Shared/API/userService";
import { useAlert } from "../../../6-Entities/common";
import {saveUserData} from "../../../7-Shared/lib/saveUserData";
import {useNavigate} from "react-router-dom";

const GoogleAuth = () => {

  const navigate = useNavigate()
  const setType = useAlert((state) => state.setType);
  const setMsg = useAlert((state) => state.setMessage);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      userService
        .getGoogleUserData(user.access_token)
        .then((res) => {
          userService
            .createUser(res.data)
            .then((res) => {
              saveUserData(res.data);
              navigate("/main", { replace: true });
            })
            .catch((e) => {
              setType("error");
              setMsg("Не удалось создать аккаунт");
              console.log(e);
            });
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
