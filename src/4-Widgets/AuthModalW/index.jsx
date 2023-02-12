import Forgot from "../../5-Features/auth/Forgot";
import Captcha from "../../5-Features/Captcha";
import LoginModalContent from "../../5-Features/modals/Content/LoginModal";
import LoginModal from "../../5-Features/modals/LoginModal";

const AuthModalW= () => {
	const modalContent = () => (
		<LoginModalContent captchaFunc={(innerRef)=><Captcha innerRef={innerRef} />}>
			<Forgot />
			
		</LoginModalContent>
	);

	return <LoginModal component={modalContent} />;
};

export default AuthModalW;
