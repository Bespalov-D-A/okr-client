import AsyncSelect from "react-select/async";
import { reactLocalStorage } from "reactjs-localstorage";
import { useAlert } from "../../../6-Entities/common";
import { useTaskList } from "../../../6-Entities/taskList";
import { taskService } from "../../../7-Shared/API/taskService";
import s from './index.module.scss'
import { FAILED_GET_TASK_TYPES } from "../../../7-Shared/assests/Constants";

const promiseOptions = (e, setAlert) => {
	const token = reactLocalStorage.get("jwt");

	return taskService
		.getTaskTypes(token)
		.then((res) => {
			const newRes = [{}, ...res.data.data];
			return newRes.map((option, index) => ({
				value: index === 0 ? '' : option.attributes.title,
				label: index === 0 ? 'Без фильтра типов' : 'Тип: ' +option.attributes.title,
				id: index === 0 ? null : option.id,
			}));
		})
		.catch((e) => {
			setAlert({ type: "error", msg: FAILED_GET_TASK_TYPES });
			console.log(e);
			return [];
		});
};

const SelectTaskTypeF = () => {
	const setAlert = useAlert((state) => state.setAlert);
	const selectedTaskType = useTaskList((state) => state.selectTaskType);
	const setSelectedTaskType = useTaskList((state) => state.setSelectedTaskType);

	const handleChange = (e) => {
		setSelectedTaskType(e);
	};

	return (
			<AsyncSelect
				//key={taskTypeFormIsOpen}
				className={s.select}
				isSearchable={false}
				name="selectTaskType"
				id="selectTaskType"
				placeholder="Выбрать тип задачи"
				cacheOptions
				defaultOptions
				value={selectedTaskType}
				onBlur={(e) => {}}
				onChange={handleChange}
				loadOptions={(e) => promiseOptions(e, setAlert)}
			/>
	);
};

export default SelectTaskTypeF;