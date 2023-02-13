import Captcha from "../../5-Features/Captcha";
import ForgotPassModalContent from "../../5-Features/modals/Content/ForgotPassModal";
import ForgotPassModal from "../../5-Features/modals/ForgotPasModal";

const ForgotModalW = () => {
	const modalContent = () => (
		<ForgotPassModalContent
			captchaFunc={(innerRef) => <Captcha innerRef={innerRef} />}
		>
		</ForgotPassModalContent>
	);

	return <ForgotPassModal component={modalContent} />;
};

export default ForgotModalW;
