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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

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
	EditTaskBtn,
	TaskItemMenu,
}) => {
	const [expanded, setExpanded] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
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

	return (
		<Card className={s.card} sx={{ maxWidth: 600 }}>
			<Tooltip title="Статус задачи">
				<div className={s.bar}>
					Статус: {completed ? "Выполнено" : "Ожидает выполнения"}
				</div>
			</Tooltip>
			<CardHeader
				title={title}
				subheader={`назначено на:  ${date}  ${time}`}
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
			<CardActions disableSpacing>
				{TaskItemMenu(id, open, handleClose, anchorEl)}
				{SetCompleteBtn(id)}
				{EditTaskBtn(id)}
				{description.length > 0 && (
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
					>
						<ExpandMoreIcon />
					</ExpandMore>
				)}
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					sdfsdfs
					{description}
				</CardContent>
			</Collapse>
		</Card>
	);
};

export default TaskItem;
