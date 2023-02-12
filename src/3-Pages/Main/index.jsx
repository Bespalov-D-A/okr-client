import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {reactLocalStorage} from "reactjs-localstorage";
import Alert from "../../5-Features/ui/Alert";

const Main = () => {
	const navigate = useNavigate();

	useEffect(() => {
		//Если юзер не авторизован
		const user = reactLocalStorage.get('user')
		if (!user) navigate("/greetings", {replace: true});
	}, []);

	return (
		<div>
			<Alert />
			main
		</div>
	);
};

export default Main;
