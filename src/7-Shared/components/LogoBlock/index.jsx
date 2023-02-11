import Logo from "./../../assests/img/tree.svg";
import Typography from "@mui/material/Typography";
import s from "./index.module.scss";

const LogoBlock = (props) => {
	const{ style, imgStyle, fontSize } = props
	return (
		<div className={s.wrap} style={style}>
			<img src={Logo} className={s.logo} style={imgStyle} alt="" />
			<Typography
				className={s.title}
				fontSize={fontSize ? fontSize : 24}
				variant="h4"
				component="h4"
			>
				okr-detox
			</Typography>
		</div>
	);
};

export default LogoBlock;
