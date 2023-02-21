import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Tooltip from "@mui/material/Tooltip";
import {useAlert} from "../../../6-Entities/common";
import {useLoader} from "../../../7-Shared/hooks/useLoad";
import {FAILED_EDIT_TASK, SUCCESS_TASK_STATUS_EDIT} from "../../../7-Shared/assests/Constants";
import {reactLocalStorage} from "reactjs-localstorage";
import {taskService} from "../../../7-Shared/API/taskService";

const TaskCompleteBtn = ({ taskId }) => {
	const setAlert = useAlert(state => state.setAlert)
	const [isFetch, isLoad, error] = useLoader(
		FAILED_EDIT_TASK,
		setAlert,
		async (params) => {
			const token = reactLocalStorage.get("jwt");
			const response = await taskService.updateTask(token, taskId, {completed:true});
			console.log(response.data)
			setAlert('succes', SUCCESS_TASK_STATUS_EDIT)
		}
	);
	const handleClick = () => {
		isFetch()	
	}

	return (
		<Tooltip title="Завершить задачу">
			<IconButton onClick={handleClick} aria-label="Завершить задачу">
				<CheckCircleIcon />
			</IconButton>
		</Tooltip>
	);
};

export default TaskCompleteBtn;
