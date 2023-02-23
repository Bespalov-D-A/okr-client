import Container from "@mui/system/Container";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import AddTaskListItemModalW from "../../4-Widgets/AddTaskListItemModalW";
import AddTaskModalW from "../../4-Widgets/AddTaskModalW";
import AddTaskTypeItemModalW from "../../4-Widgets/AddTaskTypeItemModalW";
import BarW from "../../4-Widgets/BarW";
import ConsentDeleteTaskModalW from "../../4-Widgets/ConsentDeleteTaskModalW";
import DialW from "../../4-Widgets/DialW";
import EditTaskListItemModalW from "../../4-Widgets/EditTaskListItemModalW";
import EditTaskTypeItemModalW from "../../4-Widgets/EditTaskTypeItemModalW";
import FiltersW from "../../4-Widgets/FiltersW";
import MenuW from "../../4-Widgets/MenuW";
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
			<MenuW />
			<ConsentDeleteTaskModalW />
			<AddTaskListItemModalW />
			<AddTaskTypeItemModalW />
			<EditTaskTypeItemModalW />
			<EditTaskListItemModalW />
			<BarW />
			<Container className={s.content} maxWidth="xl">
				<TaskListW>
				<FiltersW />
				</TaskListW>
			</Container>
			<AddTaskModalW />
			<DialW />
		</div>
	);
};

export default Main;
