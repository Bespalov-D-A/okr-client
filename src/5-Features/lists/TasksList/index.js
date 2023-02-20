import Container from "@mui/system/Container";
import { useEffect } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { useAlert } from "../../../6-Entities/common";
import { useTaskList } from "../../../6-Entities/taskList";
import { taskService } from "../../../7-Shared/API/taskService";
import { FAILED_GET_TASKS } from "../../../7-Shared/assests/Constants";
import { useLoader } from "../../../7-Shared/hooks/useLoad";
import s from "./index.module.scss";

const TaskList = () => {
	const taskList = useTaskList((state) => state.list);
	const setTaskList = useTaskList((state) => state.setList);
	const setAlert = useAlert((state) => state.setAlert);

	const [isFetch, isLoad, error] = useLoader(
		FAILED_GET_TASKS,
		setAlert,
		async (params) => {
			const token = reactLocalStorage.get("jwt");
			const response = await taskService.getTasks(token);
			console.log(response);
			setTaskList(response.data.data);
		}
	);
	useEffect(() => {
		isFetch();
	}, []);

	return (
		<Container className={s.list} maxWidth="xl">
			{taskList &&
				taskList.map((task) => (
					<div key={task.id}>{task.attributes.title}</div>
				))}
		</Container>
	);
};

export default TaskList;
