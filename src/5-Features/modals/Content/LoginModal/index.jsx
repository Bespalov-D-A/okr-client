import AuthForm from "../../../forms/AuthForm";
import s from "./index.module.scss";

const LoginModalContent = ({captchaFunc, children}) => {
	return (
		<div className={s.content}>
			<div className={s["form-wrap"]}>
				<AuthForm children={children} captchaFunc={captchaFunc} />
			</div>
		</div>
	);
};

export default LoginModalContent;
