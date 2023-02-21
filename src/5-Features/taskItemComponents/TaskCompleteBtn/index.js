import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Tooltip from "@mui/material/Tooltip";

const TaskCompleteBtn = ({ taskId }) => {
	return (
		<Tooltip title="Завершить задачу">
			<IconButton aria-label="Завершить задачу">
				<CheckCircleIcon />
			</IconButton>
		</Tooltip>
	);
};

export default TaskCompleteBtn;
