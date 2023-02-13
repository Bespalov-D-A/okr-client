import AuthForm from "../../../forms/AuthForm";
import s from "./index.module.scss";

const LoginModalContent = ({googleLogIn, captchaFunc, children}) => {
	return (
		<div className={s.content}>
			<div className={s["form-wrap"]}>
				<AuthForm children={children} googleLogIn={googleLogIn} captchaFunc={captchaFunc} />
			</div>
		</div>
	);
};

export default LoginModalContent;
