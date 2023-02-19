import Button from "@mui/material/Button";
import AsyncSelect from "react-select/async";

const promiseOptions = (inputValue) =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve([{ value: "sdfsdf", label: "abbb" }]);
		}, 1000);
	});

const AddTaskListForm = ({createNewTaskListFunc}) => {
	return (
		<div>
			<AsyncSelect
				placeholder="Выбрать лист задач"
				cacheOptions
				defaultOptions
				loadOptions={promiseOptions}
			/>
			<Button onClick={createNewTaskListFunc} variant="contained">Создать новый лист задач</Button>
		</div>
	);
};

export default AddTaskListForm;
