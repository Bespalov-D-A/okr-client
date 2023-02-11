import AuthForm from "../../../forms/AuthForm";
import s from "./index.module.scss";

const LoginModalContent = ({children}) => {
	return (
		<div className={s.content}>
			<div className={s["form-wrap"]}>
				<AuthForm children={children} />
			</div>
		</div>
	);
};

export default LoginModalContent;
