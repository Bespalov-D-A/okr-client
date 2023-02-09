import Typography from "@mui/material/Typography";
import s from "./index.module.scss";

const WelcomeBlock = () => {
	return (
		<div>
			<Typography className={s.title} variant="h1" component="h1">
				Возьми свою жизнь под контроль
			</Typography>
			<p className={s.description}>
				Наш универсальный помощник поможет вам нe упустить важные моменты.
				<br />
				Теперь каждый миг у вас под рукой.
			</p>
		</div>
	);
};

export default WelcomeBlock;
