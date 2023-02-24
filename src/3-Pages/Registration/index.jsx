import React, { useEffect } from "react";
import RegFormW from "../../4-Widgets/forms/RegFormW";
import LogoBlock from "../../7-Shared/components/LogoBlock";
import s from "./index.module.scss";
import Alert from "../../5-Features/ui/Alert";
import { useCommon } from "../../6-Entities/common";
import {reactLocalStorage} from "reactjs-localstorage";
import {useNavigate} from "react-router-dom";

const Registration = () => {
	const setFormBtnDisabled = useCommon((state) => state.setFormBtnDisabled);
	const navigate = useNavigate()

	useEffect(() => {
		setFormBtnDisabled(true);
		//Если юзер авторизован
		const user = reactLocalStorage.get('user')
		if (user) navigate("/main", {replace: true});
	}, []);

	return (
		<div className={s.wrap}>
			<Alert />
			<div className={s.form}>
				<div onClick={()=>navigate('/greetings')}  className={s['logo-wrap']}>
					<LogoBlock style={{ marginBottom: 24 }} imgStyle={{ width: 100, fill: "#9b27af" }} />
				</div>
				<RegFormW />
			</div>
		</div>
	);
};

export default Registration;
