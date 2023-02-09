//Модальное окно. Принимает параметрами содержание
//колбек который будет вызван при нажатии
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import s from "./index.module.scss";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";

const ModalUI = (props) => {
	const { JSXcomponent, callback, open, handleClose, btnTitle, title } = props;

	return (
		<Modal
			open={open}
			onClose={handleClose}
			closeAfterTransition
			className={s.wrap}
		>
			<Fade in={open}>
				<div className={s.modal}>
					<div className={s.close}>
						<IconButton
							color="error"
							aria-label="upload picture"
							component="label"
							className={s["close-btn"]}
							onClick={handleClose}
						>
							<CloseIcon fontSize="large" className={s["close-ico"]} />
						</IconButton>
					</div>

					<Typography variant="h4" component="h4" className={s.title}>
						{title}
					</Typography>
					<div className={s.content}>{JSXcomponent()}</div>
					<div className={s["btn-wrap"]}>
						<Button
							className={s.btn}
							onClick={callback}
							variant="contained"
							size="large"
						>
							{btnTitle}
						</Button>
					</div>
				</div>
			</Fade>
		</Modal>
	);
};

export default ModalUI;
