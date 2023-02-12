import {reactLocalStorage} from "reactjs-localstorage";

//Утилита для сохранения данных только что 
//авторизованного или зарегистрированного юзера
export const saveUserData = (serverResponse) => {
	reactLocalStorage.set('jwt', serverResponse.jwt);	
	reactLocalStorage.setObject('user', serverResponse.user);
}

