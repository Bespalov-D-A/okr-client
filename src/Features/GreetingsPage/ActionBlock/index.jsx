import Button from "@mui/material/Button";
import s from "./index.module.scss";

const ActionBlock = () => {
	return (
		<div className={s.actions}>
			<Button variant="contained" className={`${s.btn} ${s.what}`}>
				Что это?
			</Button>
			<div className={s.wrap}>
				<Button variant="contained" className={s.btn}>
					Регистрация
				</Button>
				<Button variant="contained" className={s.btn}>
					Войти
				</Button>
			</div>
		</div>
	);
};

export default ActionBlock;
