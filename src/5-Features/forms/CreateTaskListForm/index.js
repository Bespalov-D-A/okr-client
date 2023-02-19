import MoreTimeIcon from "@mui/icons-material/MoreTime";
import CheckIcon from "@mui/icons-material/Check";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useFormik } from "formik";
import { createTaskListFields } from "../../../6-Entities/fields/CreateTaskListFields";
import { createTaskListValidationSchema } from "../../../7-Shared/config/forms/validationSchemes/createTaskList";
import DefaultField from "../../../7-Shared/ui/Fields/Default";
import s from "./index.module.scss";
import IconButton from "@mui/material/IconButton";

const CreateTaskListForm = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			date: "",
			time: "",
		},
		validationSchema: createTaskListValidationSchema,
		onSubmit: (values) => {},
	});

	return (
		<div className={s.wrap}>
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
			<IconButton color="primary" aria-label="upload picture" component="label">
				<MoreTimeIcon />
			</IconButton>

			<IconButton
				className={s.ok}
				color="primary"
				aria-label="upload picture"
				component="label"
			>
				<CheckIcon />
			</IconButton>
		</div>
	);
};

export default CreateTaskListForm;
