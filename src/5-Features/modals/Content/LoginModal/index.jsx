import DefaultField from "../../../../7-Shared/ui/Fields/Default";
import s from "./index.module.scss";

const LoginModalContent = ({ children }) => {
	return (
		<div className={s.content}>
			<div className={s["form-wrap"]}>
				<DefaultField id="auth-name" label="Телефон или почта" error={false} />
				<DefaultField id="auth-password" label="Пароль" error={false} />
			</div>
			<div>{children}</div>
		</div>
	);
};

export default LoginModalContent;
