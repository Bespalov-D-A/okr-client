import Button from "@mui/material/Button";
import s from "./index.module.scss";

const Forgot = () => {
	return (
		<div className={s.wrap}>
			<Button variant="text">забыл пароль</Button>
		</div>
	);
};

export default Forgot;
