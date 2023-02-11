import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DefaultField from "../../../7-Shared/ui/Fields/Default";
import { useFormik } from "formik";
import s from "./index.module.scss";
import { useLoginModal } from "../../../6-Entities/modals";
import {authValidationSchema} from "../../../7-Shared/config/forms/validationSchemes/auth";

const AuthForm = ({ children }) => {
	const authBtnDisabled = useLoginModal((state) => state.authBtnDisabled);

	const authFormik = useFormik({
		initialValues: {
			authLogin: "",
			authPassword: "",
		},
		validationSchema: authValidationSchema,
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
			onSubmit={authFormik.handleSubmit}
		>
			<DefaultField
				name="authLogin"
				label="Почта или телефон"
				fieldtype="text"
				setFieldTouched={authFormik.setFieldTouched}
				value={authFormik.values.authLogin}
				onChange={authFormik.handleChange}
				touched={authFormik.touched.authLogin}
				errors={authFormik.errors}
			/>
			<DefaultField
				name="authPassword"
				label="Пароль"
				fieldtype="password"
				setFieldTouched={authFormik.setFieldTouched}
				value={authFormik.values.authPassword}
				onChange={authFormik.handleChange}
				touched={authFormik.touched.authPassword}
				errors={authFormik.errors}
			/>
			{children}
			<div className={s["btn-wrap"]}>
				<Button disabled={authBtnDisabled} type="submit" variant="contained">
					Войти
				</Button>
			</div>
		</Box>
	);
};

export default AuthForm;
