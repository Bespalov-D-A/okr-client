import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import qs from "qs";
import { useEffect } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { useAlert } from "../../../6-Entities/common";
import { useTaskList } from "../../../6-Entities/taskList";
import { taskService } from "../../../7-Shared/API/taskService";
import { FAILED_GET_TASKS } from "../../../7-Shared/assests/Constants";
import { useLoader } from "../../../7-Shared/hooks/useLoad";
import s from "./index.module.scss";

const TaskList = ({Filters, TaskItem }) => {
	const taskList = useTaskList((state) => state.list);
	const selectedTaskList = useTaskList((state) => state.selectedTaskList);
	const selectedTaskType = useTaskList((state) => state.selectedTaskType);
	const selectedTaskCompleted = useTaskList((state) => state.selectedTaskCompleted);
	const setTaskList = useTaskList((state) => state.setList);
	const setAlert = useAlert((state) => state.setAlert);
	const taskSwitcher = useTaskList((state) => state.taskSwitcher);
	let query;

	const [isFetch, isLoad, error] = useLoader(
		FAILED_GET_TASKS,
		setAlert,
		async (params) => {
			const token = reactLocalStorage.get("jwt");
			const response = await taskService.getTasks(token, query);
			setTaskList(response.data.data);
		}
	);

	useEffect(() => {
		const taskListFilter = selectedTaskList ? selectedTaskList.id : undefined;
		const taskTypeFilter = selectedTaskType ? selectedTaskType.id : undefined;
		const taskSelectedFilter = selectedTaskCompleted?.id ? selectedTaskCompleted : undefined;
		const filters = {
			...(taskListFilter && { task_list: taskListFilter }),
			...(taskTypeFilter && { task_type: taskTypeFilter }),
			...(taskSelectedFilter&& { completed: taskSelectedFilter.value}),
		};

		const filtersString = qs.stringify({ filters });
		query = filtersString.length ? filtersString : null;
		isFetch();
	}, [taskSwitcher, selectedTaskList, selectedTaskType, selectedTaskCompleted]);

	return (
		<Container className={s.list} maxWidth="xl">
			{Boolean(taskList?.length) ? (
				<div>
					<Typography className={s["list-title"]} component="h5" variant="h5">
						Выбран лист: {selectedTaskList?.title ? selectedTaskList?.title : 'все'}
					</Typography>
					<div className={s.filters}>
					{Filters()}
					</div>
					{taskList.map(TaskItem)}
				</div>
			) : (
				<div>
					<Typography className={s["list-title"]} component="h5" variant="h5">
						Выбран лист: {selectedTaskList?.title ? selectedTaskList?.title : 'все'}
					</Typography>
					<Typography className={s.title} component="h3" variant="h3">
						Задач нет
					</Typography>
				</div>
			)}
		</Container>
	);
};

export default TaskList;
