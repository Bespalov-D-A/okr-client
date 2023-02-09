import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = () => {
	const captchaRef = useRef(null);
	console.log(process.env.REACT_APP_SITE_KEY)
	return (
			<ReCAPTCHA
				sitekey={process.env.REACT_APP_SITE_KEY}
				ref={captchaRef}
			/>
	);
};

export default ReCaptcha;
