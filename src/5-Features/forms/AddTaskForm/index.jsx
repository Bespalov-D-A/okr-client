import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import s from "./index.module.scss";
import { authValidationSchema } from "../../../7-Shared/config/forms/validationSchemes/auth";
import { useEffect, useRef, useState } from "react";
import { useAlert, useCommon } from "../../../6-Entities/common";
import { userService } from "../../../7-Shared/API/userService";
import { saveUserData } from "../../../7-Shared/lib/saveUserData";
import { useNavigate } from "react-router-dom";
import {
	CONFIRM_YOU_ARE_NOT_A_ROBOT,
	FAILED_AUTHENTICATION,
} from "../../../7-Shared/assests/Constants";
import StepperUI from "../../../7-Shared/ui/StepperUI";
import { addTaskValidationSchema } from "../../../7-Shared/config/forms/validationSchemes/addTask";
import CanvasPreloader from "../../../7-Shared/ui/CanvasPreloader";

const AddTaskForm = ({
	children,
	captchaFunc,
	AddTaskListForm,
	AddTaskTypeForm,
	CreateTaskListForm,
	CreateTaskTypeForm,
	CreateTaskTaskForm,
}) => {
	const formBtnDisabled = useCommon((state) => state.formBtnDisabled);
	const setFormBtnDisabled = useCommon((state) => state.setFormBtnDisabled);
	const setAlert = useAlert((state) => state.setAlert);
	const captchaRef = useRef(null);
	const navigate = useNavigate();
	const [activeStep, setActiveStep] = useState(0);
	const steps = ["Лист", "Тип", "Задача"];
	const [createTaskListFormIsOpen, setCreateTaskListFormIsOpen] =
		useState(false);
	const [createTaskTypeFormIsOpen, setCreateTaskTypeFormIsOpen] =
		useState(false);
	const [createTaskTaskFormIsOpen, setCreateTaskTaskFormIsOpen] =
		useState(false);
	const [isLoad, setIsLoad] = useState(false)

	useEffect(() => {
		//Делаем кнопку submit неактивным
		setFormBtnDisabled(true);
	}, []);

	const handleSubmit = () => {
		if(activeStep < 2) setActiveStep((prev) => prev + 1)
		else formik.submitForm()
	}

	const formik = useFormik({
		initialValues: {
			selectedTaskList: null,
			selectedTaskType: null,
			taskTitle: "",
			taskDescription: "",
			time: new Date(),
			date: new Date(),
		},
		validationSchema: addTaskValidationSchema,
		onSubmit: (values) => {
			console.log('+++++++++++++++')
			console.log(values)
			setIsLoad(true)
 /*     const recaptchaValue = captchaRef.current.getValue();*/
			/*if (!recaptchaValue) {*/
				/*setAlert({ type: "error", msg: CONFIRM_YOU_ARE_NOT_A_ROBOT });*/
			/*} else {*/
				/*userService*/
					/*.authUser(values)*/
					/*.then((res) => {*/
						/*saveUserData(res.data);*/
						/*navigate("/main", { replace: true });*/
					/*})*/
					/*.catch((e) => {*/
						/*setAlert({ type: "error", msg: FAILED_AUTHENTICATION });*/
						/*console.log(e);*/
					/*});*/
			/*}*/
		},
	});

	return (
		<div className={s.wrap}>
		<CanvasPreloader isLoad={isLoad} />
			<Box
				className={s["form"]}
				component="form"
				id='add_task_form'
				noValidate
				autoComplete="off"
				onSubmit={formik.handleSubmit}
			>
				<StepperUI activeStep={activeStep} steps={steps} />
				{activeStep === 0 &&
					AddTaskListForm(
						"selectedTaskList",
						formik,
						createTaskListFormIsOpen,
						setCreateTaskListFormIsOpen
					)}
				{activeStep === 1 &&
					AddTaskTypeForm(
						"selectedTaskType",
						formik,
						createTaskTypeFormIsOpen,
						setCreateTaskTypeFormIsOpen
					)}
				{activeStep === 2 && CreateTaskTaskForm(formik)}
			</Box>
			{createTaskListFormIsOpen &&
				activeStep === 0 &&
				CreateTaskListForm(setCreateTaskListFormIsOpen)}
			{createTaskTypeFormIsOpen &&
				activeStep === 1 &&
				CreateTaskTypeForm(setCreateTaskTypeFormIsOpen)}

			<div className={s["btn-wrap"]}>
				{activeStep > 0 && (
					<Button
						id="btn-go-auth"
						onClick={() => setActiveStep((prev) => prev - 1)}
						disabled={!formik.values.selectedTaskList}
						type="submit"
						variant="contained"
					>
						Назад
					</Button>
				)}
				<Button
					id="btn-go-auth"
					onClick={handleSubmit}
					disabled={!formik.values.selectedTaskList}
					type="submit"
					variant="contained"
				>
					Далее
				</Button>
			</div>
		</div>
	);
};

export default AddTaskForm;
