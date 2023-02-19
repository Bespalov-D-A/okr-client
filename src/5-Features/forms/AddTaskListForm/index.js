import Button from "@mui/material/Button";
import { useEffect } from "react";
import AsyncSelect from "react-select/async";
import { reactLocalStorage } from "reactjs-localstorage";
import { useAlert } from "../../../6-Entities/common";
import { taskService } from "../../../7-Shared/API/taskService";
import { FAILED_GET_TASK_LISTS } from "../../../7-Shared/assests/Constants";
import s from "./index.module.scss";

const promiseOptions = (e, setAlert) => {
	const token = reactLocalStorage.get("jwt");

	return taskService
		.getTaskLists(token)
		.then((res) =>
			res.data.data.map((option) => ({
				value: option.attributes.title,
				label: option.attributes.title,
			}))
		)
		.catch((e) => {
			setAlert({ type: "error", msg: FAILED_GET_TASK_LISTS });
			console.log(e);
			return [];
		});
};

const AddTaskListForm = ({ taskListFormIsOpen, setTaskListFormIsOpen }) => {
	const setAlert = useAlert((state) => state.setAlert);

	return (
		<div className={s.wrap}>
			<AsyncSelect
				key={taskListFormIsOpen}
				isSearchable={false}
				placeholder="Выбрать лист задач"
				cacheOptions
				defaultOptions
				loadOptions={(e) => promiseOptions(e, setAlert)}
			/>
			<div className={s.or}>или</div>
			<Button onClick={setTaskListFormIsOpen} variant="contained">
				Создать новый лист задач
			</Button>
		</div>
	);
};

export default AddTaskListForm;
