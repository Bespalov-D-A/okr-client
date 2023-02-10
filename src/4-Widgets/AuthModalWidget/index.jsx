import CaptchaForAuth from "../../5-Features/auth/Captcha";
import Forgot from "../../5-Features/auth/Forgot";
import LoginModalContent from "../../5-Features/modals/Content/LoginModal";
import LoginModal from "../../5-Features/modals/LoginModal";

const AuthModalWidget = () => {
	const modalContent = () => (
		<LoginModalContent>
			<Forgot />
			<CaptchaForAuth />
		</LoginModalContent>
	);

	return <LoginModal component={modalContent} />;
};

export default AuthModalWidget;
