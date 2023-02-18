import Container from "@mui/system/Container";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import BarW from "../../4-Widgets/BarW";
import DialW from "../../4-Widgets/DialW";
import Alert from "../../5-Features/ui/Alert";
import s from './index.module.scss'

const Main = () => {
	const navigate = useNavigate();

	useEffect(() => {
		//Если юзер не авторизован
		const user = reactLocalStorage.get("user");
		if (!user) navigate("/greetings", { replace: true });
	}, []);

	return (
		<div className={s.wrap}>
			<Alert />
			<BarW />
			<Container className={s.content} maxWidth="xl">
				main
			</Container>

				<DialW />
		</div>
	);
};

export default Main;
