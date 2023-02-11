import Button from "@mui/material/Button";
import Captcha from "../../../5-Features/Captcha";
import RegistrationForm from "../../../5-Features/forms/RegistrationForm";
import { googleLogout } from '@react-oauth/google';
import GoogleAuth from "../../../5-Features/ui/GoogleAuth";

const RegFormW = () => {
	return (
		<div>
			<RegistrationForm googleLogIn={()=> <GoogleAuth />}>
				
				<button onClick={googleLogout}>Log out</button>
				<Captcha />
			</RegistrationForm>
		</div>
	);
};

export default RegFormW;
