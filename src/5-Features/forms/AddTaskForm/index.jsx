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
import {CONFIRM_YOU_ARE_NOT_A_ROBOT, FAILED_AUTHENTICATION} from "../../../7-Shared/assests/Constants";
import StepperUI from "../../../7-Shared/ui/StepperUI";

const AddTaskForm = ({children, captchaFunc, AddTaskListForm, CreateTaskListForm}) => {
	const formBtnDisabled = useCommon((state) => state.formBtnDisabled);
	const setFormBtnDisabled = useCommon((state) => state.setFormBtnDisabled);
	const setAlert = useAlert((state) => state.setAlert);
	const captchaRef = useRef(null);
	const navigate = useNavigate();
	 const [activeStep, setActiveStep] = useState(0);
	const steps = ['Лист', 'Тип', 'Задача']
	const [createTaskListFormIsOpen, setCreateTaskListFormIsOpen] = useState(false)

	useEffect(() => {
		//Делаем кнопку submit неактивным
		setFormBtnDisabled(true);
	}, []);

	const authFormik = useFormik({
		initialValues: {
			authLogin: "",
			authPassword: "",
		},
		validationSchema: authValidationSchema,
		onSubmit: (values) => {
			const recaptchaValue = captchaRef.current.getValue();
			if (!recaptchaValue) {
				setAlert({type:'error', msg:CONFIRM_YOU_ARE_NOT_A_ROBOT})
			} else {
				userService
					.authUser(values)
					.then((res) => {
						saveUserData(res.data);
						navigate("/main", { replace: true });
					})
					.catch((e) => {
						setAlert({type:'error', msg:FAILED_AUTHENTICATION})
						console.log(e);
					});
			}
		},
	});

	return (
		<Box
			className={s["form"]}
			component="form"
			noValidate
			autoComplete="off"
			onSubmit={authFormik.handleSubmit}
		>
			<StepperUI activeStep={activeStep} steps={steps}/>
			{AddTaskListForm(setCreateTaskListFormIsOpen)} 
			{createTaskListFormIsOpen && CreateTaskListForm()}
			{children}
			<div className={s["btn-wrap"]}>
				<Button id='btn-go-auth' disabled={formBtnDisabled} type="submit" variant="contained">
					Далее
				</Button>
			</div>
		</Box>
	);
};

export default AddTaskForm;
