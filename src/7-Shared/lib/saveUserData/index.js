import {reactLocalStorage} from "reactjs-localstorage";

//Утилита для сохранения данных только что 
//авторизованного или зарегистрированного юзера
export const saveUserData = (serverResponse, setAlert) => {
	if(!!serverResponse.token && !!serverResponse.user) {
	reactLocalStorage.set('jwt', serverResponse.token);	
	reactLocalStorage.setObject('user', serverResponse.user);
	} else setAlert('error', 'Не удалось получить данные пользователя')
}

