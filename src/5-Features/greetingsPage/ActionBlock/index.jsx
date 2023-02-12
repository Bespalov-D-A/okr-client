import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { useModalState } from "../../../6-Entities/common";
import { useGreetingModal, useLoginModal } from "../../../6-Entities/modals";
import s from "./index.module.scss";

const ActionBlock = () => {
	const setOpenLoginModal = useLoginModal((state) => state.setOpen);
	const setOpen = useGreetingModal((state) => state.setOpen);
	const navigate = useNavigate();

	return (
		<div className={s.actions}>
			<Button
				onClick={() => setOpen(true)}
				variant="contained"
				className={`${s.btn} ${s.what}`}
			>
				Что это?
			</Button>
			<div className={s.wrap}>
				<Button
					onClick={() => navigate("/registration", { replace: true })}
					variant="contained"
					className={s.btn}
				>
					Регистрация
				</Button>
				<Button
					onClick={() => setOpenLoginModal(true)}
					variant="contained"
					className={s.btn}
				>
					Войти
				</Button>
			</div>
		</div>
	);
};

export default ActionBlock;
