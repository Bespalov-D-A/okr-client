import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DefaultField from "../../../7-Shared/ui/Fields/Default";
import { useFormik } from "formik";
import s from "./index.module.scss";
import { useLoginModal } from "../../../6-Entities/modals";
import {profileValidationSchema} from "../../../7-Shared/config/forms/validationSchemes/profile";
import {profileFields} from "../../../6-Entities/fields/ProfileFields";

const ProfileForm = ({ children }) => {
	const authBtnDisabled = useLoginModal((state) => state.authBtnDisabled);

	const profileFormik = useFormik({
		initialValues: {
			name: "",
			lastName: "",
			middleName: "",
			birthday: "",
			email: "",
			country: "",
			city: "",
			phone: "",
			status: "",
			password: '',
			confirm_password: ''
		},
		validationSchema: profileValidationSchema,
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
			onSubmit={profileFormik.handleSubmit}
		>
			{profileFields.map((field) => (
				<DefaultField
					key={field.name}
					name={field.name}
					label={field.label}
					fieldtype={field.fieldType}
					setFieldTouched={profileFormik.setFieldTouched}
					value={profileFormik.values[field.name]}
					onChange={profileFormik.handleChange}
					touched={profileFormik.touched[field.name]}
					errors={profileFormik.errors}
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

export default ProfileForm;
