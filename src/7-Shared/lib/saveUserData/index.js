import { reactLocalStorage } from "reactjs-localstorage";
import { FAILED_SAVE_USER_DATA_TO_CLIENT } from "../../assests/Constants";

//Утилита для сохранения данных только что
//авторизованного или зарегистрированного юзера
export const saveUserData = (serverResponse, setAlert) => {
	const key = serverResponse.token
		? serverResponse.token
		: serverResponse.jwt
		? serverResponse.jwt
		: null;
	if (key || !!serverResponse.user) {
		reactLocalStorage.set("jwt", serverResponse.token);
		reactLocalStorage.setObject("user", serverResponse.user);
	} else setAlert({ type: "error", msg: FAILED_SAVE_USER_DATA_TO_CLIENT });
};
