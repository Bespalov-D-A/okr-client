import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { useAlert, useCommon } from "../../../6-Entities/common";
import { useTaskList } from "../../../6-Entities/taskList";
import { taskService } from "../../../7-Shared/API/taskService";
import { FAILED_GET_TASK_LISTS } from "../../../7-Shared/assests/Constants";
import { useLoader } from "../../../7-Shared/hooks/useLoad";
import CustomScrollBar from "../../../7-Shared/ui/CustomScrollBar";
import s from "./index.module.scss";

const TasklistsList = () => {
	const setAlert = useAlert((state) => state.setAlert);
	const setSelectedTaskList = useTaskList(
		(state) => state.setSelectedTaskList
	);
  const setIsOpenMenu = useCommon((state) => state.setIsOpenMenu);
	const [list, setLists] = useState(null);

	const [isFetch, isLoad, error] = useLoader(
		FAILED_GET_TASK_LISTS,
		setAlert,
		async (params) => {
			const token = reactLocalStorage.get("jwt");
			taskService
				.getTaskLists(token)
				.then((res) => {
					setLists(res.data);
				})
				.catch((e) => {
					setAlert({ type: "error", msg: FAILED_GET_TASK_LISTS });
					console.log(e);
				});
		}
	);

	useEffect(() => {
		isFetch();
	}, []);

	function handleClick(listItem) {
		setIsOpenMenu(false)
		setSelectedTaskList({id: listItem.id, title: listItem.attributes.title});
	}

	function mapList() {
		let mapList;
		if (list) {
			mapList = list.data?.map((item) => (
				<ListItem
					onClick={() => handleClick(item)}
					className={s.item}
					key={item.id}
					disablePadding
				>
					<ListItemButton>
						<ListItemText primary={item.attributes.title} />
					</ListItemButton>
				</ListItem>
			));
		}
		return mapList;
	}

	return (
		<div className={s.wrap}>
			<p className={s.title}>Листы задач</p>
			{list && (
				<List className={s.lists}>
					<CustomScrollBar>{mapList()}</CustomScrollBar>
				</List>
			)}
		</div>
	);
};

export default TasklistsList;
