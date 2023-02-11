import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DefaultField from "../../../7-Shared/ui/Fields/Default";
import { useFormik } from "formik";
import s from "./index.module.scss";
import { regValidationSchema } from "../../../7-Shared/config/forms/validationSchemes/registration";
import { regFields } from "../../../6-Entities/fields/RegFields";
import { useCommon } from "../../../6-Entities/common";
import LogoBlock from "../../../7-Shared/components/LogoBlock";

const RegistrationForm = ({ children, googleLogIn }) => {
	const formBtnDisabled = useCommon((state) => state.formBtnDisabled);

	const regFormik = useFormik({
		initialValues: {
			email: "",
			phone: "",
			password: "",
			confirm_password: "",
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
			{googleLogIn()}
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
				<Button disabled={formBtnDisabled} type="submit" variant="contained">
					Зарегистрироваться
				</Button>
			</div>
		</Box>
	);
};

export default RegistrationForm;
