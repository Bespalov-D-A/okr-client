import Button from "@mui/material/Button";
import {useModalStore} from "../../../6-Entities/modals";
import s from "./index.module.scss";

const ActionBlock = () => {
	const setOpenGreetingModal = useModalStore(state=> state.setOpen)

	const whatHandleClick = () => {
			setOpenGreetingModal(true)	
	}

	return (
		<div className={s.actions}>
			<Button onClick={whatHandleClick} variant="contained" className={`${s.btn} ${s.what}`}>
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
