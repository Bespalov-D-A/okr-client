import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../5-Features/ui/Alert";

const Main = () => {
	const navigate = useNavigate();

	useEffect(() => {
		//Если юзер не авторизован
		if (true) navigate("/greetings");
	}, []);

	return (
		<div>
			<Alert />
			main
		</div>
	);
};

export default Main;
