import s from "./index.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
	useAddTaskListItemModal,
	useAddTaskTypeItemModal,
	useEditTaskTypeItemModal,
} from "../../../6-Entities/modals";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

const TaskItem = ({
	id,
	completed,
	title,
	description,
	date,
	time,
	SetCompleteBtn,
	taskType,
	taskList,
	EditTaskBtn,
	TaskItemMenu,
}) => {
	const [expanded, setExpanded] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const setOpenTaskListModal = useAddTaskListItemModal(
		(state) => state.setOpen
	);
	const setOpenTaskTypeModal = useAddTaskTypeItemModal(
		(state) => state.setOpen
	);
	const setOpenSelectTypeModal = useEditTaskTypeItemModal(
		(state) => state.setOpen
	);
	const setTaskId = useEditTaskTypeItemModal(
		(state) => state.setTaskId
	);
	const setSelectedType = useEditTaskTypeItemModal(
		(state) => state.setSelectedType
	);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const handleClickList = () => {
		setOpenTaskListModal(true);
	};

	const handleClickType = () => {
		const objType = taskType
			? {
					id: taskType.data.id,
					value: taskType.data.attributes.title,
					label: taskType.data.attributes.title,
			  }
			: null;
		setSelectedType(objType);
		setTaskId(id)
		setOpenSelectTypeModal(true);
	};

	return (
		<Card className={s.card}>
			<Tooltip title="Статус задачи">
				<div className={s.bar}>
					Статус:{" "}
					{completed ? (
						<span className={s.success}>Выполнено</span>
					) : (
						"Ожидает выполнения"
					)}
				</div>
			</Tooltip>

			<CardHeader
				title={title}
				subheader={`${date || time ? "На" : "Без времени"}  ${
					date ? date : ""
				}  ${time ? time : ""}`}
				action={
					<IconButton
						aria-label="settings"
						aria-controls={open ? "basic-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						onClick={handleClick}
					>
						<MoreVertIcon />
					</IconButton>
				}
			/>

			<CardContent className={s["list-type"]}>
				<Tooltip title="Изменить">
					<Button variant="text" onClick={handleClickList}>
						{taskList ? taskList.data.attributes.title : "Без листа"}
					</Button>
				</Tooltip>
				<Tooltip title="Изменить">
					<Button variant="text" onClick={handleClickType}>
						{taskType ? taskType.data.attributes.title : "Без типа"}
					</Button>
				</Tooltip>
			</CardContent>

			<CardActions disableSpacing>
				{TaskItemMenu(id, open, handleClose, anchorEl)}
				{SetCompleteBtn(completed, id)}
				{description.length > 0 && (
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
					>
						<Tooltip title="Описание задачи">
							<ExpandMoreIcon />
						</Tooltip>
					</ExpandMore>
				)}
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>{description}</CardContent>
			</Collapse>
		</Card>
	);
};

export default TaskItem;
