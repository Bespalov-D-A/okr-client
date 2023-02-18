import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import CreateIcon from "@mui/icons-material/Create";
import Dial from "../../7-Shared/ui/Dial";
import {useAddTaskModal} from "../../6-Entities/modals";

const DialActions = ({parent}) => {
	const setOpen = useAddTaskModal((state) => state.setOpen);

const actions = [
	{
		icon: <PlaylistAddIcon />,
		name: "Новый лист задач",
		action: () => {
			setOpen(true)
		},
	},
	{
		icon: <CreateIcon />,
		name: "Новая задача",
		action: () => {
			alert("задача");
		},
	},
];


	return <>{parent(actions)}</>
}

export default DialActions
