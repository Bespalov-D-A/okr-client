import MoreTimeIcon from "@mui/icons-material/MoreTime";
import CheckIcon from "@mui/icons-material/Check";
import { createTaskListFields } from "../../../6-Entities/fields/CreateTaskListFields";
import { createTaskListValidationSchema } from "../../../7-Shared/config/forms/validationSchemes/createTaskList";
import DefaultField from "../../../7-Shared/ui/Fields/Default";
import s from "./index.module.scss";
import IconButton from "@mui/material/IconButton";
import { taskService } from "../../../7-Shared/API/taskService";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import { reactLocalStorage } from "reactjs-localstorage";
import { useState } from "react";

const CreateTaskListForm = ({ DateTime, closeCreateForm }) => {
	const [addTime, setAddTime] = useState(false);
	const [startDate, setStartDate] = useState(new Date())
	const formik = useFormik({
		initialValues: {
			title: "",
			date: "",
			time: "",
		},
		validationSchema: createTaskListValidationSchema,
		onSubmit: (values) => {
			console.log(values);
			const token = reactLocalStorage.get("jwt");
			taskService
				.createTaskList(token, values)
				.then((res) => {
					closeCreateForm(false);
					console.log(res);
				})
				.catch((e) => console.log(e));
		},
	});

	return (
		<div>
			<Box
				className={s.wrap}
				id="create-task-form"
				component="form"
				noValidate
				autoComplete="off"
				onSubmit={formik.handleSubmit}
			>
				{createTaskListFields.map((field) => (
					<DefaultField
						key={field.name}
						name={field.name}
						label={field.label}
						fieldtype={field.fieldType}
						setFieldTouched={formik.setFieldTouched}
						value={formik.values[field.name]}
						onChange={formik.handleChange}
						touched={formik.touched[field.name]}
						errors={formik.errors}
					/>
				))}
				<IconButton
					color="primary"
					aria-label="upload picture"
					component="label"
					onClick={() => setAddTime(!addTime)}
				>
					<MoreTimeIcon />
				</IconButton>

				<IconButton
					className={s.ok}
					color="primary"
					type="submit"
				>
					<CheckIcon />
				</IconButton>
			</Box>
			{addTime && DateTime(startDate, setStartDate)}
		</div>
	);
};

export default CreateTaskListForm;
