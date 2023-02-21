import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import CreateIcon from "@mui/icons-material/Create";
import { useAddTaskModal } from "../../6-Entities/modals";

const DialActions = ({ parent }) => {
	const setOpen = useAddTaskModal((state) => state.setOpen);

	const actions = [
		{
			icon: <PlaylistAddIcon />,
			name: "Новый лист задач",
			action: () => {

			},
		},
		{
			icon: <CreateIcon />,
			name: "Новая задача",
			action: () => {
				setOpen(true);
			},
		},
	];

	return <>{parent(actions)}</>;
};

export default DialActions;
