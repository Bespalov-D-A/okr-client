import ForgotPassForm from "../../../forms/ForgotPassForm";
import s from "./index.module.scss";

const ForgotPassModalContent = ({ captchaFunc, children}) => {
	return (
		<div className={s.content}>
			<div className={s["form-wrap"]}>
				<ForgotPassForm children={children}  captchaFunc={captchaFunc} />
			</div>
		</div>
	);
};

export default ForgotPassModalContent;
