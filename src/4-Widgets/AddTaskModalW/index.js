import Captcha from "../../5-Features/Captcha";
import AddTaskForm from "../../5-Features/forms/AddTaskForm";
import AddTaskModal from "../../5-Features/modals/AddTaskModal";
import AddTaskModalContent from "../../5-Features/modals/Content/AddTaskModalContent";

const AddTaskModalW = () => {
	const compFunc = () => {
		return (
			<AddTaskModalContent
				captchaFunc={(innerRef) => <Captcha innerRef={innerRef} />}
				addTaskForm={(captchaFunc, children) => (
					<AddTaskForm children={children} captchaFunc={captchaFunc} />
				)}
			>
				<div></div>
			</AddTaskModalContent>
		);
	};
	return <AddTaskModal component={compFunc} />;
};

export default AddTaskModalW;
