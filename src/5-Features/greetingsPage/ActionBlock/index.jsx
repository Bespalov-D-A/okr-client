import Button from "@mui/material/Button";
import {useGreetingModal, useLoginModal} from "../../../6-Entities/modals";
import s from "./index.module.scss";

const ActionBlock = () => {
	const setOpenGreetingModal = useGreetingModal(state=> state.setOpen)
	const setOpenLoginModal = useLoginModal(state=> state.setOpen)


	return (
		<div className={s.actions}>
			<Button onClick={()=>setOpenGreetingModal(true)} variant="contained" className={`${s.btn} ${s.what}`}>
				Что это?
			</Button>
			<div className={s.wrap}>
				<Button onClick={()=> {}} variant="contained" className={s.btn}>
					Регистрация
				</Button>
				<Button onClick={()=> setOpenLoginModal(true)} variant="contained" className={s.btn}>
					Войти
				</Button>
			</div>
		</div>
	);
};

export default ActionBlock;
