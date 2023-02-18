import SpeedDialAction from "@mui/material/SpeedDialAction";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const CreateTask = () => {
	return (
		<SpeedDialAction
			key={"createTask"}
			icon={<PlaylistAddIcon />}
			tooltipTitle={"Создать задачу"}
			onClick={() => {}}
		/>
	);
};

export default CreateTask;
