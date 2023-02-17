import AuthForm from "../../../forms/AuthForm";
import s from "./index.module.scss";

const LoginModalContent = ({authForm, googleLogIn, captchaFunc, children}) => {
	return (
		<div id='login-modal-content' className={s.content}>
			<div className={s["form-wrap"]}>
				{authForm(googleLogIn, captchaFunc, children)}
			</div>
		</div>
	);
};

export default LoginModalContent;
