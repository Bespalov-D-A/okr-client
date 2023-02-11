import React from "react";
import RegFormW from "../../4-Widgets/forms/RegFormW";
import LogoBlock from "../../7-Shared/components/LogoBlock";
import s from "./index.module.scss";
import Alert from "../../5-Features/ui/Alert";

const Registration = () => {
	return (
		<div className={s.wrap}>
			<Alert />
			Registration
			<div className={s.form}>
				<LogoBlock style={{ marginBottom: 24 }} imgStyle={{ width: 100 }} />
				<RegFormW />
			</div>
		</div>
	);
};

export default Registration;
