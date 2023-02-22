import CustomScrollBar from "../../../../7-Shared/ui/CustomScrollBar";
import s from "./index.module.scss";

const AddTaskModalContent = ({ addTaskForm, captchaFunc, children }) => {
	return (
		<div id="login-modal-content" className={s.content}>
			<CustomScrollBar>
				<div className={s["form-wrap"]}>
					{addTaskForm(captchaFunc, children)}
				</div>
			</CustomScrollBar>
		</div>
	);
};

export default AddTaskModalContent;
