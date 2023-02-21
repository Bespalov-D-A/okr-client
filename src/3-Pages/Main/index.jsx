import Container from "@mui/system/Container";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import AddTaskModalW from "../../4-Widgets/AddTaskModalW";
import BarW from "../../4-Widgets/BarW";
import ConsentDeleteTaskModalW from "../../4-Widgets/ConsentDeleteTaskModalW";
import DialW from "../../4-Widgets/DialW";
import TaskListW from "../../4-Widgets/TaskListW";
import Alert from "../../5-Features/ui/Alert";
import s from "./index.module.scss";

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
			<ConsentDeleteTaskModalW />
			<BarW />
			<Container className={s.content} maxWidth="xl">
				main
				<TaskListW/>
			</Container>
			<AddTaskModalW />
			<DialW />
		</div>
	);
};

export default Main;
