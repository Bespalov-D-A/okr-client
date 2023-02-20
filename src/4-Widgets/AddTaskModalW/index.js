import Captcha from "../../5-Features/Captcha";
import AddTaskForm from "../../5-Features/forms/AddTaskForm";
import AddTaskListForm from "../../5-Features/forms/AddTaskListForm";
import CreateTaskListForm from "../../5-Features/forms/CreateTaskListForm";
import DateTimeForm from "../../5-Features/forms/DateTimeForm";
import AddTaskModal from "../../5-Features/modals/AddTaskModal";
import AddTaskModalContent from "../../5-Features/modals/Content/AddTaskModalContent";

const AddTaskModalW = () => {
	const compFunc = () => {
		return (
			<AddTaskModalContent
				captchaFunc={(innerRef) => <Captcha innerRef={innerRef} />}
				addTaskForm={(captchaFunc, children) => (
					<AddTaskForm
						AddTaskListForm={(
							id,
							formik,
							isOpenCreateTaskForm,
							setIsOpenCreateTaskForm
						) => (
							<AddTaskListForm
								id={id}
								formik={formik}
								taskListFormIsOpen={isOpenCreateTaskForm}
								setTaskListFormIsOpen={setIsOpenCreateTaskForm}
							/>
						)}
						CreateTaskListForm={(closeCreateForm) => (
							<CreateTaskListForm
								DateTime={(listTime, setListTime, listDate, setListDate) => (
									<DateTimeForm
										listTime={listTime}
										setListTime={setListTime}
										listDate={listDate}
										setListDate={setListDate}
									/>
								)}
								closeCreateForm={closeCreateForm}
							/>
						)}
						children={children}
						captchaFunc={captchaFunc}
					/>
				)}
			>
				<div></div>
			</AddTaskModalContent>
		);
	};
	return <AddTaskModal component={compFunc} />;
};

export default AddTaskModalW;
