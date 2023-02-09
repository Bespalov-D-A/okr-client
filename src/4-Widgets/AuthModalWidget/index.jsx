import Forgot from "../../5-Features/auth/Forgot";
import LoginModalContent from "../../5-Features/modals/Content/LoginModal";
import LoginModal from "../../5-Features/modals/LoginModal";
import ReCaptcha from "../../7-Shared/lib/ReCAPTCHA";

const AuthModalWidget = () => {
	const modalContent = () => (
		<LoginModalContent>
			<Forgot />
			<ReCaptcha />
		</LoginModalContent>
	);

	return <LoginModal component={modalContent} />;
};

export default AuthModalWidget;
