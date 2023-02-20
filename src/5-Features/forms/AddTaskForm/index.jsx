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

const AddTaskForm = ({
	children,
	captchaFunc,
	AddTaskListForm,
	CreateTaskListForm,
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

	useEffect(() => {
		//Делаем кнопку submit неактивным
		setFormBtnDisabled(true);
	}, []);

	const formik = useFormik({
		initialValues: {
			selectedTaskList: null,
		},
		validationSchema: addTaskValidationSchema,
		onSubmit: (values) => {
			const recaptchaValue = captchaRef.current.getValue();
			if (!recaptchaValue) {
				setAlert({ type: "error", msg: CONFIRM_YOU_ARE_NOT_A_ROBOT });
			} else {
				userService
					.authUser(values)
					.then((res) => {
						saveUserData(res.data);
						navigate("/main", { replace: true });
					})
					.catch((e) => {
						setAlert({ type: "error", msg: FAILED_AUTHENTICATION });
						console.log(e);
					});
			}
		},
	});

	return (
		<>
			<Box
				className={s["form"]}
				component="form"
				noValidate
				autoComplete="off"
				onSubmit={formik.handleSubmit}
			>
				<StepperUI activeStep={activeStep} steps={steps} />
				{AddTaskListForm(
					"selectedTaskList",
					formik,
					createTaskListFormIsOpen,
					setCreateTaskListFormIsOpen
				)}
				{children}
			</Box>
			{createTaskListFormIsOpen &&
				CreateTaskListForm(setCreateTaskListFormIsOpen)}
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
					onClick={() => setActiveStep((prev) => prev + 1)}
					disabled={!formik.values.selectedTaskList}
					type="submit"
					variant="contained"
				>
					Далее
				</Button>
			</div>
		</>
	);
};

export default AddTaskForm;
