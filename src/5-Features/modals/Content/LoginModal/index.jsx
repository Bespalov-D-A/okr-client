import DefaultField from "../../../../7-Shared/ui/Fields/Default";
import s from "./index.module.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { authValidationSchema } from "../../../../7-Shared/config/forms/validationSchemes/auth";
import { useLoginModal } from "../../../../6-Entities/modals";

const LoginModalContent = ({children}) => {
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
		<div className={s.content}>
			<div className={s["form-wrap"]}>
				<Box
					className={s["form"]}
					component="form"
					noValidate
					autoComplete="off"
					onSubmit={authFormik.handleSubmit}
				>
					<DefaultField
						name="authLogin"
						label="Телефон или почта"
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
						<Button
							disabled={authBtnDisabled}
							type="submit"
							variant="contained"
						>
							Войти
						</Button>
					</div>
				</Box>
			</div>
		</div>
	);
};

export default LoginModalContent;
