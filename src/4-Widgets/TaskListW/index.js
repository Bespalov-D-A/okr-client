import TaskList from "../../5-Features/lists/TasksList";
import TaskCompleteBtn from "../../5-Features/taskItemComponents/TaskCompleteBtn";
import TaskEditBtn from "../../5-Features/taskItemComponents/TaskEditBtn";
import TaskItem from "../../5-Features/taskItemComponents/TaskItem";
import TaskItemMenu from "../../5-Features/taskItemComponents/TaskItemMenu";

const TaskListW = () => {
	return (
		<div>
			<TaskList
				TaskItem={(task) => (
					<TaskItem
						key={task.id}
						id={task.id}
						completed={task.attributes.completed}
						time={task.attributes.time}
						date={task.attributes.date}
						title={task.attributes.title}
						description={task.attributes.description}
						SetCompleteBtn={(id) => <TaskCompleteBtn taskId={id} />}
						EditTaskBtn={(id) => <TaskEditBtn taskId={id} />}
						TaskItemMenu={(id, open, handleClose, anchorEl) => (
							<TaskItemMenu
								id={id}
								open={open}
								handleClose={handleClose}
								anchorEl={anchorEl}
							/>
						)}
					/>
				)}
			/>
		</div>
	);
};

export default TaskListW;
