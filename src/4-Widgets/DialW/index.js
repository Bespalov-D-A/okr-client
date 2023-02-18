import Dial from "../../7-Shared/ui/Dial";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import CreateIcon from "@mui/icons-material/Create";

const actions = [
	{
		icon: <PlaylistAddIcon />,
		name: "Новый лист задач",
		action: () => {
			alert("задача");
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

const DialW = () => {
	return (
		<div style={{ marginBottom: 24 }}>
			<Dial>{actions}</Dial>
		</div>
	);
};

export default DialW;
