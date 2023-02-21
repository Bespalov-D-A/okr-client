import ListItemIcon from "@mui/material/ListItemIcon"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import ContentCut from "@mui/icons-material/ContentCut";

const TaskItemMenu = ({id, open, handleClose, anchorEl}) => {
	return <Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<ContentCut fontSize="small" />
					</ListItemIcon>
					Удалить задачу
				</MenuItem>
			</Menu>

}

export default TaskItemMenu
