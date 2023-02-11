import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DefaultField from "../../../7-Shared/ui/Fields/Default";
import { useFormik } from "formik";
import s from "./index.module.scss";
import {useLoginModal} from "../../../6-Entities/modals";
import {regValidationSchema} from "../../../7-Shared/config/forms/validationSchemes/registration";
import {regFields} from "../../../6-Entities/fields/RegFields";

const RegistrationForm = ({ children }) => {
	const authBtnDisabled = useLoginModal((state) => state.authBtnDisabled);

	const regFormik = useFormik({
		initialValues: {
			email: "",
			phone: "",
			password: '',
			confirm_password: ''
		},
		validationSchema: regValidationSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<Box
			className={s["form"]}
			component="form"
			noValidate
			autoComplete="off"
			onSubmit={regFormik.handleSubmit}
		>
			{regFields.map((field) => (
				<DefaultField
					key={field.name}
					name={field.name}
					label={field.label}
					fieldtype={field.fieldType}
					setFieldTouched={regFormik.setFieldTouched}
					value={regFormik.values[field.name]}
					onChange={regFormik.handleChange}
					touched={regFormik.touched[field.name]}
					errors={regFormik.errors}
				/>
			))}
			{children}
			<div className={s["btn-wrap"]}>
				<Button disabled={authBtnDisabled} type="submit" variant="contained">
					Войти
				</Button>
			</div>
		</Box>
	);
};

export default RegistrationForm;
