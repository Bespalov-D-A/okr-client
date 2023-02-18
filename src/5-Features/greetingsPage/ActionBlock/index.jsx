import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { theme } from "../../../1-App/mui/WithTheme";
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
				style={{ background: theme.palette.primary.light }}
				className={`${s.btn} ${s.what}`}
				id="btn-greeting"
			>
				Что это?
			</Button>
			<div className={s.wrap}>
				<Button
					onClick={() => navigate("/registration", { replace: true })}
					id="btn-registration"
					variant="contained"
					className={s.btn}
					style={{ background: theme.palette.primary.dark }}
				>
					Регистрация
				</Button>
				<Button
					onClick={() => setOpenLoginModal(true)}
					variant="contained"
					className={s.btn}
					id="btn-login"
				>
					Войти
				</Button>
			</div>
		</div>
	);
};

export default ActionBlock;
